import React from "react";
import MySlider from "./MySlider";
import { useLoaderData } from "react-router";
import ArtworkCard from "./ArtworkCard";

const Home = () => {
  const cardData = useLoaderData();
  console.log(cardData);

  return (
    <div className="max-w-7xl mx-auto px-5">
      {/* Swiper */}
      <MySlider></MySlider>

      {/* Recent Artwork */}
      <h2 className="text-blue-500 text-3xl text-center font-bold mt-7">
        Most Recent
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
        {
            cardData.map(art=> <ArtworkCard key={art._id} art={art}></ArtworkCard>)
        }
      </div>
    </div>
  );
};

export default Home;
