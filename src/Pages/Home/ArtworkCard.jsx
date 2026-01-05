import React from "react";
import { Link } from "react-router";

const ArtworkCard = ({ art }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-base-content">{art.title}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Artist:</span> {art.artistName}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Category:</span> {art.category}
        </p>

        {/* View Details Button */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/artworkDetails/${art._id}`} className="w-full">
            <button className="btn btn-primary w-full text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
