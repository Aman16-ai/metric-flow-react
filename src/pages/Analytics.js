
import React from 'react';
import './Analytics.css';

const Analytics = () => {
  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">Detailed performance analytics and insights</p>
      </div>
      
      <div className="analytics-content">
        <div className="analytics-card">
          <h2>Coming Soon</h2>
          <p>Advanced analytics features are currently in development.</p>
          <div className="feature-list">
            <div className="feature-item">📊 Advanced Charts</div>
            <div className="feature-item">📈 Trend Analysis</div>
            <div className="feature-item">🔍 Deep Insights</div>
            <div className="feature-item">📋 Custom Reports</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
