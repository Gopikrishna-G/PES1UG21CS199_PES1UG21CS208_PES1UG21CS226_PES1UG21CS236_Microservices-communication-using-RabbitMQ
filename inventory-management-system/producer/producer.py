# producer.py

from flask import Flask, jsonify, request
import pika
import json

app = Flask(__name__)

# RabbitMQ connection parameters
RABBITMQ_HOST = 'rabbitmq'
RABBITMQ_PORT = 5672
RABBITMQ_USERNAME = 'guest'
RABBITMQ_PASSWORD = 'guest'
RABBITMQ_QUEUE = 'inventory_queue'

def publish_message(action, data):
    message = {'action': action, 'data': data}
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT, 
                                  credentials=pika.PlainCredentials(username=RABBITMQ_USERNAME, password=RABBITMQ_PASSWORD))
    )
    channel = connection.channel()
    channel.queue_declare(queue=RABBITMQ_QUEUE)
    channel.basic_publish(exchange='', routing_key=RABBITMQ_QUEUE, body=json.dumps(message))
    connection.close()

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

@app.route('/create_item', methods=['POST'])
def create_item():
    item_data = request.json
    if not item_data:
        return jsonify({'error': 'Item data is required'}), 400
    publish_message('create', item_data)
    return jsonify({'message': 'Item creation request received'})

@app.route('/update_item/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    item_data = request.json
    if not item_data:
        return jsonify({'error': 'Item data is required'}), 400
    publish_message('update', {'item_id': item_id, 'item_data': item_data})
    return jsonify({'message': f'Item with ID {item_id} update request received'})

@app.route('/delete_item/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    publish_message('delete', {'item_id': item_id})
    return jsonify({'message': f'Item with ID {item_id} delete request received'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
