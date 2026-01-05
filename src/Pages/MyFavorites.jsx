import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MyFavorites = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(
      `http://localhost:5000/favorites/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user]);

  const handleUnfavorite = (artworkId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/favorites", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ artworkId, userEmail: user.email }),
        }).then(() => {
          setFavorites(favorites.filter((f) => f._id !== artworkId));
          Swal.fire({
            title: "Removed!",
            text: "Removed from favorites.",
            icon: "success",
          });
        });
      }
    });
  };

  if (loading) return <Loading />;
  if (!user)
    return (
      <p className="text-center mt-10 text-gray-500">
        Please login to view favorites.
      </p>
    );
  if (favorites.length === 0)
    return <p className="text-center mt-10 text-gray-500">No favorites yet.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        My Favorites
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <motion.div
            key={fav._id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-purple-100 p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={fav.image}
              alt={fav.title}
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="text-xl text-black font-semibold mt-2">
              {fav.title}
            </h4>
            <p className="text-gray-500">{fav.category}</p>
            <button
              onClick={() => handleUnfavorite(fav.artworkId)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Remove Favorite
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
