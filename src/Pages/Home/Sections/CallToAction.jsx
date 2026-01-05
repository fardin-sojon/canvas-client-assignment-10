import React from 'react';
import { Link } from 'react-router';
import ctaBg from '../../../assets/cta_bg.jpg';

const CallToAction = () => {
  return (
    <div className="hero bg-base-200 mt-16 rounded-xl overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse p-10">
        <img src={ctaBg} className="max-w-sm rounded-lg shadow-2xl" alt="Art Studio" />
        <div>
          <h1 className="text-4xl font-bold">Start Your Journey Today!</h1>
          <p className="py-6">Join thousands of artists and collectors. Whether you want to showcase your talent or find the perfect piece for your home, Canvas is the place to be.</p>
          <div className="flex gap-4">
              <Link to="/auth/register" className="btn btn-primary">Join Now</Link>
              <Link to="/explore-artwork" className="btn btn-outline">Explore Art</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
