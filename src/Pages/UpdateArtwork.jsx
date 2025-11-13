import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const UpdateArtwork = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate();

  const handleUpdateArtwork = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    const artistTotalArtworks = e.target.totalArtwork.value;
    const medium = e.target.medium.value;
    const description = e.target.description.value;

    const updateArtwork = {
      title,
      image,
      category,
      artistTotalArtworks,
      medium,
      description,
      artistName: user?.displayName,
      artistPhoto: user?.photoURL,
      artistEmail: user?.email,
      createdAt: new Date().toISOString(),
    };

    fetch(`http://localhost:5174/artwork/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateArtwork),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);
        navigate("/my-gallery");
      });
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto bg-purple-100 p-8 rounded-2xl shadow-lg my-10">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Update
        </h2>

        <form onSubmit={handleUpdateArtwork} className="space-y-5">
          {/* Title */}
          <div>
            <label className="text-gray-700 font-medium">Artwork Title</label>
            <input
              type="text"
              name="title"
              defaultValue={data.title}
              required
              className="w-full mt-2 p-3 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
              placeholder="Enter artwork title"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-gray-700 font-medium">
              Artwork Image URL
            </label>
            <input
              type="text"
              name="image"
              defaultValue={data.image}
              required
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black bg-white"
              placeholder="Enter image URL"
            />
          </div>

          {/* Category & Medium */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Category Select */}
            <div>
              <label className="text-gray-700 font-medium">Category</label>
              <select
                name="category"
                defaultValue={data.category}
                required
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
              >
                <option value="">-- Select Category --</option>
                <option value="Abstract">Abstract</option>
                <option value="Nature">Nature</option>
                <option value="Landscape">Landscape</option>
                <option value="Urban">Urban</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Photography">Photography</option>
                <option value="Digital Art">Digital Art</option>
                <option value="Surrealism">Surrealism</option>
                <option value="Minimalism">Minimalism</option>
              </select>
            </div>

            {/* Total Artworks */}
            <div>
              <label className="text-gray-700 font-medium">
                Total Artworks
              </label>
              <input
                type="number"
                name="totalArtwork"
                defaultValue={data.artistTotalArtworks}
                required
                className="w-full mt-2 p-3 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
                placeholder="Total Artworks"
              />
            </div>

            {/* Medium */}
            <div>
              <label className="text-gray-700 font-medium">Medium</label>
              <input
                type="text"
                name="medium"
                defaultValue={data.medium}
                required
                className="w-full mt-2 p-3 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
                placeholder="Medium"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={data.description}
              required
              className="w-full mt-2 p-3 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
              placeholder="Write a short description..."
              rows="4"
            ></textarea>
          </div>

          {/* Read-only artist info */}
          <div className="bg-gray-100 p-4 rounded-lg text-gray-700 border border-gray-200 flex items-center gap-3">
            <div>
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <div>
              <p>
                <span className="font-semibold">Artist Name:</span>{" "}
                {user?.displayName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtwork;
