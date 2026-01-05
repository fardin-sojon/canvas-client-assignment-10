import React from 'react';

const FAQ = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-plus join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked /> 
            <div className="collapse-title text-xl font-medium">
                How can I list my artwork?
            </div>
            <div className="collapse-content">
                <p>Simply sign up for an account, go to your dashboard, and click on "Add Artwork". Fill in the details and upload your image!</p>
            </div>
        </div>
        <div className="collapse collapse-plus join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
                Is there a fee for selling?
            </div>
            <div className="collapse-content">
                <p>We charge a small 5% commission on successful sales to maintain the platform.</p>
            </div>
        </div>
        <div className="collapse collapse-plus join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
                Do you ship internationally?
            </div>
            <div className="collapse-content">
                <p>Yes! Our artists ship worldwide. Shipping costs and times vary by location.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
