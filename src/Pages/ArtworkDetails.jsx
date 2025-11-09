import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const isLoggedIn = true; 

const ArtworkDetails = () => {
  const art = useLoaderData(); 
  const navigate = useNavigate();

  // Local state for like & favorite
  const [likes, setLikes] = useState(art.likes || 0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleLike = () => {
    if (!isLoggedIn) return toast.error("Please login to like the artwork.");
    setLikes(likes + 1);
    // TODO: Call API to update DB
  };

  const handleFavorite = () => {
    if (!isLoggedIn) return alert("Please login to add to favorites.");
    setIsFavorite(!isFavorite);
    // TODO: Call API to update DB
  };

  if (!art) {
    return <p className="text-center mt-10">Loading artwork...</p>;
  }

  const formattedDate = new Date(art.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen  flex justify-center items-start p-6">
      <div className="max-w-6xl w-full bg-purple-100 rounded-2xl shadow-xl p-6 mt-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 px-3 py-2 bg-blue-500 text-white border border-gray-300 rounded-full hover:bg-purple-700 transition text-gray-700 px-6"
        >
          Back
        </button>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Artwork Image */}
          <div className="md:w-2/3">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-[400px] rounded-xl shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-600 mt-4">{art.description}</p>
          </div>

          {/* Artwork Details */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-purple-700">
              {art.title}
            </h1>
            <p className="text-gray-700 font-medium">
              Category: {art.category}
            </p>
            <p className="text-gray-700 font-medium">Medium: {art.medium}</p>
            

            {/* Artist Info */}
            <div className="mt-6 flex items-center gap-4 bg-purple-100 p-4 rounded shadow-sm">
              <img
                src={art.artistPhoto}
                alt={art.artistName}
                className="w-16 h-16 rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="font-semibold text-purple-800">
                  {art.artistName}
                </p>
                <p className="text-gray-500 text-sm">
                  Total Artworks: {art.artistTotalArtworks}
                </p>
              </div>
            </div>

            {/* Created Date */}
            <p className="text-gray-400 text-xs mt-2">
              Added on: {formattedDate}
            </p>

            {/* Like & Favorite Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition font-semibold"
              >
                ❤️ Like {likes}
              </button>

              <button
                onClick={handleFavorite}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  isFavorite
                    ? "bg-yellow-400 text-white border-yellow-400"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                } font-semibold transition`}
              >
                ⭐ {isFavorite ? "Favorited" : "Add to Favorites"}
              </button>
            </div>

            {/* Contact Artist */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=artist@example.com&subject=Inquiry about ${art.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition font-semibold text-center"
            >
              Contact Artist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;
