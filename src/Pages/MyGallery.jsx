import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [gallery, setGallery] = useState([]);

    useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/artwork?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGallery(data);
        });
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
      fetch(`http://localhost:3000/artwork/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            setGallery((prev) => prev.filter((art) => art._id !== _id));

            Swal.fire({
              title: "Deleted!",
              text: "This Artwork has been deleted.",
              icon: "success",
            });
          }
        });
    }
  });
};


  return (
    <div>
      <h2 className="text-blue-500 text-3xl text-center font-bold mt-7">
       My Gallery
      </h2>

      {gallery.map((art) => 
        <div key={art._id} className="md:w-[50%] xl:w-[30%] mx-auto px-5 my-5">
      <div className="bg-purple-100 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group">
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
            <span className="font-medium text-gray-800">Artist:</span>{" "}
            {art.artistName}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium text-gray-800">Category:</span>{" "}
            {art.category}
          </p>

          {/* Update & Delete Buttons */}
          <div className="flex gap-3">
            <Link to={`/updateArtwork/${art._id}`}
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
    </div>
      )}
    </div>
  );
};

export default MyGallery;
