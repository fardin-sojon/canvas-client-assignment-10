import React from "react";
import { Link } from "react-router";

const ArtworkCard = ({ art }) => {
  return (
    <div>
      <div className="bg-purple-100 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group">
        {/* Image */}
        <div className="relative">
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500 text-black"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
            {art.title}
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Artist:</span>{" "}
            {art.artistName}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium text-gray-800">Category:</span>{" "}
            {art.category}
          </p>

          {/* View Details Button */}
          <Link to={`/artworkDetails/${art._id}`}>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
