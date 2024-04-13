# consumer_two.py

import pika
import json

RABBITMQ_HOST = 'rabbitmq'
RABBITMQ_PORT = 5672
RABBITMQ_USERNAME = 'guest'
RABBITMQ_PASSWORD = 'guest'
RABBITMQ_QUEUE = 'inventory_queue'

def item_creation_callback(ch, method, properties, body):
    data = json.loads(body)
    print("Item Creation Received:", data)

def main():
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT,
                                  credentials=pika.PlainCredentials(username=RABBITMQ_USERNAME, password=RABBITMQ_PASSWORD))
    )
    channel = connection.channel()
    channel.queue_declare(queue=RABBITMQ_QUEUE)
    channel.basic_consume(queue=RABBITMQ_QUEUE, on_message_callback=item_creation_callback, auto_ack=True)
    print('Consumer Two is waiting for messages...')
    channel.start_consuming()

if __name__ == '__main__':
    main()
