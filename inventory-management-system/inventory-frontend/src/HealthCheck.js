// src/components/HealthCheck.js

import React, { useState } from 'react';
import axios from 'axios';
import './HealthCheck.css';

const HealthCheck = () => {
  const [healthStatus, setHealthStatus] = useState('');

  const checkHealth = async () => {
    try {
      const response = await axios.get('http://localhost:8000/health');
      setHealthStatus(response.data.status);
    } catch (error) {
      console.error('Error checking health:', error);
      setHealthStatus('Error');
    }
  };

  return (
    <div>
      <button onClick={checkHealth}>Check Health</button>
      <p>Health Status: {healthStatus}</p>
    </div>
  );
};

export default HealthCheck;
