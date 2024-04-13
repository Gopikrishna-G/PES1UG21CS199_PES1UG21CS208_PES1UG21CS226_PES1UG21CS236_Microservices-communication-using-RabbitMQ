// src/components/CreateItem.js

import React, { useState } from 'react';
import axios from 'axios';
import './CreateItem.css';

const CreateItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleCreateItem = async () => {
    try {
      const response = await axios.post('http://localhost:8000/create_item', {
        name: itemName,
        description: itemDescription,
      });
      console.log('Item created:', response.data.message);
      // Optionally, perform additional actions after item creation
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button onClick={handleCreateItem}>Create Item</button>
    </div>
  );
};

export default CreateItem;
