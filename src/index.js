import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element where the React app will be mounted
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component within React's StrictMode to highlight potential problems
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Function to handle reporting web vitals for performance measurement
const logResults = (metric) => {
  // You can send this to an analytics endpoint
  // or log it to the console for now
  console.log(metric);

  // Example: send to an analytics endpoint
  // fetch('/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: { 'Content-Type': 'application/json' },
  // });
};

// Report web vitals for performance measurement
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logResults);

