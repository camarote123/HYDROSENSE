import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppWrapper from './appWrapper'; // Import the AppWrapper
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
