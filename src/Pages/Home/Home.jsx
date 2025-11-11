import React from "react";
import MySlider from "./MySlider";
import { useLoaderData } from "react-router";
import ArtworkCard from "./ArtworkCard";

const Home = () => {
  const cardData = useLoaderData();
  console.log(cardData);

  // Demo data for extra sections
  const topArtists = [
    {
      id: 1,
      name: "Nadia Akter",
      photo: "https://i.ibb.co/tPtLKd1/artist1.jpg",
      artworks: 24,
    },
    {
      id: 2,
      name: "Rafiul Hasan",
      photo: "https://i.ibb.co/VWcCtjR/artist2.jpg",
      artworks: 18,
    },
    {
      id: 3,
      name: "Farzana Islam",
      photo: "https://i.ibb.co/LJ9Fzvq/artist3.jpg",
      artworks: 15,
    },
  ];

  const communityHighlights = [
    {
      id: 1,
      title: "Local Art Exhibition 2025",
      description: "A colorful art fest featuring 50+ new artists from all over Bangladesh.",
      image: "https://i.ibb.co/9tN8Rcb/exhibition.jpg",
    },
    {
      id: 2,
      title: "Digital Art Workshop",
      description: "Learn digital painting and concept design with expert mentors.",
      image: "https://i.ibb.co/8sBgLtz/workshop.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5">
      {/* Swiper */}
      <MySlider />

      {/* Recent Artwork */}
      <h2 className="text-blue-500 text-3xl text-center font-bold mt-7">
        Most Recent
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
        {cardData.map((art) => (
          <ArtworkCard key={art._id} art={art} />
        ))}
      </div>

      {/* Top Artists of the Week */}
      <section className="my-16">
        <h2 className="text-purple-600 text-3xl font-bold text-center mb-6">
          Top Artists of the Week
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-purple-100 rounded-xl shadow-md p-5 flex flex-col items-center hover:scale-105 transition"
            >
              <img
                src={artist.photo}
                alt={artist.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-300 mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-800">
                {artist.name}
              </h3>
              <p className="text-gray-600">Total Artworks: {artist.artworks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Highlights */}
      <section className="my-16">
        <h2 className="text-blue-600 text-3xl font-bold text-center mb-6">
          Community Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-blue-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
