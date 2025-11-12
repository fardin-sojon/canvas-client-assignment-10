import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ArtworkCard from "./Home/ArtworkCard";

const ExploreArtworks = () => {
  const artData = useLoaderData();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from the data
  const categories = ["All", ...new Set(artData.map((art) => art.category))];

  // Filtered artworks based on search & category
  const filteredArtworks = artData.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-5">
      <h2 className="text-blue-500 text-3xl text-center font-bold mt-7">
        Explore Artworks
      </h2>

      {/* 🔍 Search Input */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6">
        <input
          type="text"
          placeholder="Search artworks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* 🎨 Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full sm:w-1/4 px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 🖼️ Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art) => (
            <ArtworkCard key={art._id} art={art}></ArtworkCard>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No artworks found 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreArtworks;
