import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-base-200 py-16 mt-16 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Trust by Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat place-items-center">
            <div className="stat-title">Total Artworks</div>
            <div className="stat-value text-primary">10K+</div>
            <div className="stat-desc">From 100+ categories</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Active Artists</div>
            <div className="stat-value text-secondary">2,500</div>
            <div className="stat-desc">↗︎ 22% this month</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Happy Collectors</div>
            <div className="stat-value">5,000+</div>
            <div className="stat-desc">Global shipping</div>
          </div>

          <div className="stat place-items-center">
             <div className="stat-title">Years of Service</div>
             <div className="stat-value text-accent">5+</div>
             <div className="stat-desc">Since 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
