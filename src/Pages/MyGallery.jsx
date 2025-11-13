import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://canvas-server-assignment-10.vercel.app/artwork?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setGallery(data));
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://canvas-server-assignment-10.vercel.app/artwork/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              setGallery((prev) => prev.filter((art) => art._id !== _id));
              Swal.fire({ title: "Deleted!", text: "This Artwork has been deleted.", icon: "success" });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 my-10">
      <h2 className="text-blue-500 text-3xl text-center font-bold mb-7">My Gallery</h2>

      {gallery.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-xl mb-4">You haven't added any artworks yet.</p>
          <Link
            to="/add-artwork"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Add Your First Artwork
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {gallery.map((art) => (
            <motion.div
              key={art._id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-purple-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500 text-black"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
                    {art.title}
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Artist:</span> {art.artistName}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-gray-800">Category:</span> {art.category}
                  </p>

                  <div className="flex gap-3">
                    <Link
                      to={`/updateArtwork/${art._id}`}
                      className="flex-1 bg-green-500 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition text-center"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(art._id)}
                      className="flex-1 bg-red-500 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
