// LoadingScreen.js
import React from 'react';
import './LoadingScreen.css'; // Import the CSS file

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <h1 className="loading-text">FishEye Pro</h1>
        </div>
    );
};

export default LoadingScreen;
