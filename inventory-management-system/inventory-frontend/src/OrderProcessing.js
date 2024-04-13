// src/components/OrderProcessing.js

import React, { useState } from 'react';
import axios from 'axios';
import './OrderProcessing.css';

const OrderProcessing = () => {
  const [orderID, setOrderID] = useState('');

  const handleOrderProcessing = async () => {
    try {
      const response = await axios.post(`http://localhost:8004/process_order/${orderID}`);
      console.log('Order processing result:', response.data);
      // Optionally, handle response or update UI based on the result
    } catch (error) {
      console.error('Error processing order:', error);
    }
  };

  return (
    <div>
      <h2>Order Processing</h2>
      <input
        type="text"
        placeholder="Order ID"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      />
      <button onClick={handleOrderProcessing}>Process Order</button>
    </div>
  );
};

export default OrderProcessing;
