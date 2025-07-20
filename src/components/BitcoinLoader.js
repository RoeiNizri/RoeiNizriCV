// components/BitcoinLoader.js
import React from 'react';
import bitcoinLogo from '../bitcoin-color-icon.svg';
import './BitcoinLoader.css'; // Optional for styling

function BitcoinLoader() {
  return (
    <div className="bitcoin-loader-container">
      <img
        src={bitcoinLogo}
        alt="Loading"
        className="bitcoin-spinner"
      />
    </div>
  );
}

export default BitcoinLoader;
