import React from "react";
import MySlider from "./Slider/MySlider";
import { useLoaderData } from "react-router"; 
import ArtworkCard from "./ArtworkCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const cardData = useLoaderData();

  const topArtists = [
    { id: 1, name: "Fardin Rahman Sojon", photo: "https://i.ibb.co.com/Dxr4tHj/fardin.jpg", artworks: 24 },
    { id: 2, name: "Rifat Hasan", photo: "https://i.ibb.co.com/G4s41tQL/rifat.jpg", artworks: 18 },
    { id: 3, name: "Refat Hasan", photo: "https://i.ibb.co.com/35cjGSK2/rifat-2.jpg", artworks: 15 },
  ];

  const communityHighlights = [
    { id: 1, title: "Local Art Exhibition 2025", description: "A colorful art fest featuring 50+ new artists from all over Bangladesh.", image: "https://i.ibb.co.com/1fmRNHNh/highlight1.webp" },
    { id: 2, title: "Digital Art Workshop", description: "Learn digital painting and concept design with expert mentors.", image: "https://i.ibb.co.com/Cp080xyf/digital-ar.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5">
      <MySlider />

      {/* Most Recent */}
      <h2 className="text-blue-500 text-3xl text-center font-bold mt-7">Most Recent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
        {cardData.map((art) => (
          <motion.div
            key={art._id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <ArtworkCard art={art} />
          </motion.div>
        ))}
      </div>

      {/* Top Artists */}
      <section className="my-16">
        <h2 className="text-purple-600 text-3xl font-bold text-center mb-6">Top Artists of the Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topArtists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-purple-100 rounded-xl shadow-md p-5 flex flex-col items-center hover:scale-105 transition">
                <img src={artist.photo} alt={artist.name} className="w-28 h-28 rounded-full object-cover border-4 border-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-purple-800">{artist.name}</h3>
                <p className="text-gray-600">Total Artworks: {artist.artworks}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Highlights */}
      <section className="my-16">
        <h2 className="text-blue-600 text-3xl font-bold text-center mb-6">Community Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityHighlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-100 h-90 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={highlight.image} alt={highlight.title} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{highlight.title}</h3>
                  <p className="text-gray-700">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
