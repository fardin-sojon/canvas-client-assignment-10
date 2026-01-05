import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { motion } from "framer-motion";
import { FaImage, FaPalette, FaLayerGroup, FaPenNib, FaEye, FaEyeSlash, FaGlobe, FaLock, FaArrowLeft, FaSave } from "react-icons/fa";
import { MdTitle, MdDescription } from "react-icons/md";
import Swal from "sweetalert2";

const UpdateArtwork = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleUpdateArtwork = (e) => {
        e.preventDefault();
        setLoading(true);

        const title = e.target.title.value;
        const image = e.target.image.value;
        const category = e.target.category.value;
        const artistTotalArtworks = e.target.totalArtwork.value;
        const description = e.target.description.value;
        const visibility = e.target.visibility.value;

        const updateArtwork = {
            title,
            image,
            category,
            artistTotalArtworks,
            description,
            visibility,
            artistName: user?.displayName,
            artistPhoto: user?.photoURL,
            artistEmail: user?.email,
            createdAt: new Date().toISOString(),
        };

        fetch(
            `http://localhost:5000/artwork/${data._id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateArtwork),
            }
        )
            .then((res) => res.json())
            .then((resData) => {
                setLoading(false);
                if (resData.modifiedCount > 0) {
                     Swal.fire({
                        title: "✅ Artwork Updated!",
                        icon: "success",
                        confirmButtonColor: "#7C3AED",
                     }).then(() => {
                        navigate("/dashboard/my-gallery");
                     });
                } else {
                     Swal.fire({
                        title: "⚠️ No Changes Made",
                        icon: "info",
                        confirmButtonColor: "#7C3AED",
                     });
                }
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
                Swal.fire({
                    title: "❌ Error!",
                    text: "Failed to update artwork.",
                    icon: "error",
                    confirmButtonColor: "#7C3AED",
                });
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50"
            >
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-8 px-8 text-center relative overflow-hidden">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-6 left-6 z-10 text-white/80 hover:text-white flex items-center gap-2 transition-colors"
                    >
                        <FaArrowLeft size={20} /> Back
                    </button>
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm transform skew-y-6 origin-bottom-left scale-150"></div>
                    <h2 className="relative text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Update Masterpiece
                    </h2>
                    <p className="relative text-purple-100 mt-2 text-lg">
                        Refine your creation details.
                    </p>
                </div>

                <div className="p-8 md:p-12">
                    <form onSubmit={handleUpdateArtwork} className="space-y-8">
                        {/* Top Row: Title & Image */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label font-semibold text-gray-700 mb-1 flex items-center gap-2">
                                    <MdTitle className="text-purple-600 text-lg" /> Artwork Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={data.title}
                                    placeholder="Enter artwork title"
                                    className="input input-bordered w-full bg-gray-100 border-gray-300 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-900 placeholder-gray-500"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold text-gray-700 mb-1 flex items-center gap-2">
                                    <FaImage className="text-purple-600 text-lg" /> Image URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={data.image}
                                    placeholder="Enter image URL"
                                    className="input input-bordered w-full bg-gray-100 border-gray-300 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-900 placeholder-gray-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Middle Row: Category & Count */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label font-semibold text-gray-700 mb-1 flex items-center gap-2">
                                    <FaPalette className="text-purple-600 text-lg" /> Category
                                </label>
                                <select
                                    name="category"
                                    defaultValue={data.category}
                                    className="select select-bordered w-full bg-gray-100 border-gray-300 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-900"
                                    required
                                >
                                    <option value="" disabled>Select a Category</option>
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
                            <div className="form-control">
                                <label className="label font-semibold text-gray-700 mb-1 flex items-center gap-2">
                                    <FaLayerGroup className="text-purple-600 text-lg" /> Artist Total Artworks
                                </label>
                                <input
                                    type="number"
                                    name="totalArtwork"
                                    defaultValue={data.artistTotalArtworks}
                                    placeholder="Enter total artworks"
                                    className="input input-bordered w-full bg-gray-100 border-gray-300 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-900 placeholder-gray-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700 mb-1 flex items-center gap-2">
                                <MdDescription className="text-purple-600 text-lg" /> Description
                            </label>
                            <textarea
                                name="description"
                                defaultValue={data.description}
                                className="textarea textarea-bordered h-32 w-full bg-gray-100 border-gray-300 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-900 text-base placeholder-gray-500"
                                placeholder="Write a short description..."
                                required
                            ></textarea>
                        </div>

                        {/* Footer Row: Visibility & User Badge */}
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border-t border-gray-100 pt-8">

                            {/* Visibility Toggle */}
                            <div className="form-control">
                                <label className="label font-semibold text-gray-700 mb-2">Visibility</label>
                                <div className="flex gap-4">
                                    <label className="cursor-pointer label gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-purple-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="visibility"
                                            value="Public"
                                            className="radio radio-primary radio-sm"
                                            defaultChecked={data.visibility === "Public" || !data.visibility}
                                        />
                                        <span className="label-text font-medium flex items-center gap-2"><FaGlobe className="text-blue-500" /> Public</span>
                                    </label>
                                    <label className="cursor-pointer label gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-purple-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="visibility"
                                            value="Private"
                                            className="radio radio-primary radio-sm"
                                            defaultChecked={data.visibility === "Private"}
                                        />
                                        <span className="label-text font-medium flex items-center gap-2"><FaLock className="text-gray-500" /> Private</span>
                                    </label>
                                </div>
                            </div>

                            {/* Artist Badge */}
                            <div className="flex items-center gap-4 bg-gradient-to-br from-purple-50 to-indigo-50 px-5 py-3 rounded-2xl border border-purple-100 shadow-sm w-full md:w-auto">
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL || "https://i.pravatar.cc/150"} alt="Artist" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">{user?.displayName}</h3>
                                    <p className="text-xs text-gray-500 font-mono">{user?.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(124, 58, 237, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary w-full text-lg normal-case h-14 bg-gradient-to-r from-purple-600 to-indigo-600 border-none hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-md"></span>
                            ) : (
                                <>
                                    <FaSave className="mr-2" /> Update Artwork
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default UpdateArtwork;
