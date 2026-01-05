import React from 'react';
import testimonial1 from '../../../assets/testimonial1.jpg';
import testimonial2 from '../../../assets/testimonial2.jpg';
import testimonial3 from '../../../assets/testimonial3.jpg';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Art Collector",
            text: "Canvas changed the way I buy art. The quality and variety are unmatched!",
            image: testimonial1
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Digital Artist",
            text: "A fantastic platform for artists to showcase their work to a global audience.",
            image: testimonial2
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Interior Designer",
            text: "Found the perfect pieces for my latest project. Highly recommended!",
            image: testimonial3
        }
    ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
            <div key={review.id} className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={review.image} alt={review.name} />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <p className="text-xs text-gray-500">{review.role}</p>
                        </div>
                    </div>
                    <p className="italic text-gray-600">"{review.text}"</p>
                    <div className="flex gap-1 mt-2 text-warning">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
