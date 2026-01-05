import React from 'react';

const Newsletter = () => {
  return (
    <div className="mt-16 bg-primary text-primary-content rounded-2xl p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Inspired</h2>
      <p className="mb-6 max-w-lg mx-auto">Subscribe to our newsletter to get the latest art trends, artist interviews, and exclusive offers delivered to your inbox.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
        <input 
            type="email" 
            placeholder="Enter your email" 
            className="input input-bordered w-full text-base-content" 
        />
        <button className="btn btn-secondary">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
