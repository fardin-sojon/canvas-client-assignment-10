import React from 'react';
import { Palette, Brush, PenTool, Image, Aperture, Layers } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Oil Painting', icon: Palette, color: 'text-blue-500' },
    { name: 'Water Color', icon: Brush, color: 'text-green-500' },
    { name: 'Digital Art', icon: Image, color: 'text-purple-500' },
    { name: 'Sketching', icon: PenTool, color: 'text-gray-500' },
    { name: 'Photography', icon: Aperture, color: 'text-red-500' },
    { name: 'Abstract', icon: Layers, color: 'text-orange-500' }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-base-200 cursor-pointer group">
            <div className="card-body items-center text-center p-6">
              <cat.icon className={`w-10 h-10 mb-2 ${cat.color} group-hover:scale-110 transition-transform`} />
              <h3 className="font-semibold text-sm">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
