import React from "react";
import { useLoaderData } from "react-router";
import ArtworkCard from "./Home/ArtworkCard";

const ExploreArtworks = () => {

    const artData = useLoaderData();
    console.log(artData);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-blue-500 text-3xl text-center font-bold mt-7">
        Explore Artworks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
        {
            artData.map(art=> <ArtworkCard key={art._id} art={art}></ArtworkCard>)
        }
      </div>
    </div>
  );
};

export default ExploreArtworks;
