import React, { useState, useEffect } from "react";
import { Trash2, Edit } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/artwork")
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  const handleDelete = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artwork/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", `${title} has been deleted.`, "success");
              const remaining = artworks.filter((item) => item._id !== id);
              setArtworks(remaining);
            }
          });
      }
    });
  };

  // Filter artworks based on search
  const filteredArtworks = artworks.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.artistName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Artworks ({artworks.length})</h2>
        <input
          type="text"
          placeholder="Search artworks..."
          className="input input-bordered input-sm w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table View for Desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Artist</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArtworks.map((item, index) => (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td className="font-bold">{item.title}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </td>
                  <td>{item.artistName}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item.category}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <Link
                      to={`/dashboard/update-artwork/${item._id}`}
                      className="btn btn-square btn-ghost btn-xs text-primary tooltip"
                      data-tip="Edit"
                    >
                      <Edit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id, item.title)}
                      className="btn btn-square btn-ghost btn-xs text-error tooltip"
                      data-tip="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile (2 Columns) */}
      <div className="grid grid-cols-2 md:hidden gap-4">
        {filteredArtworks.map((item) => (
          <div key={item._id} className="bg-base-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
             <div className="avatar mb-3">
                <div className="mask mask-squircle w-16 h-16">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{item.category}</p>
              
              <div className="flex gap-2 mt-auto">
                 <Link
                    to={`/updateArtwork/${item._id}`}
                    className="btn btn-sm btn-circle btn-ghost text-primary"
                  >
                    <Edit size={16} />
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id, item.title)}
                    className="btn btn-sm btn-circle btn-ghost text-error"
                  >
                    <Trash2 size={16} />
                  </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageArtworks;
