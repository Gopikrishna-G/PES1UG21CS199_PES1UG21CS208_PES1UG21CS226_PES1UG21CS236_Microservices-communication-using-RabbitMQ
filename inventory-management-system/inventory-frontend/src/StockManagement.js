// src/components/StockManagement.js

import React, { useState } from 'react';
import axios from 'axios';
import './StockManagement.css';

const StockManagement = () => {
  const [itemID, setItemID] = useState('');

  const handleStockManagement = async () => {
    try {
      const response = await axios.post(`http://localhost:8003/manage_stock/${itemID}`);
      console.log('Stock management result:', response.data);
      // Optionally, handle response or update UI based on the result
    } catch (error) {
      console.error('Error managing stock:', error);
    }
  };

  return (
    <div>
      <h2>Stock Management</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemID}
        onChange={(e) => setItemID(e.target.value)}
      />
      <button onClick={handleStockManagement}>Manage Stock</button>
    </div>
  );
};

export default StockManagement;
