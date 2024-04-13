// src/App.js

import React from 'react';
import './App.css';
import HealthCheck from './HealthCheck';
import CreateItem from './CreateItem';
import StockManagement from './StockManagement';
import OrderProcessing from './OrderProcessing';

function App() {
  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <div>
        <h2>Health Check</h2>
        <HealthCheck />
      </div>
      <div>
        <h2>Create Item</h2>
        <CreateItem />
      </div>
      <div>
        <StockManagement />
      </div>
      <div>
        <OrderProcessing />
      </div>
    </div>
  );
}

export default App;
