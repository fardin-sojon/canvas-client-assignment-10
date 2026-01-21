import React, { useState, useEffect, useContext } from "react";
import { Trash2, ShieldCheck } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";

const AllUsers = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Check if current logged-in user is admin
  const loggedInUser = users.find(u => u.email?.toLowerCase() === currentUser?.email?.toLowerCase());
  const isAdmin = loggedInUser?.role === "admin";

  const handleMakeAdmin = (user) => {
    // ... (rest of function same as before)
    if (!isAdmin) {
      Swal.fire("Error", "Only admins can perform this action.", "error");
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to promote ${user.name} to Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7C3AED",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Promote!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Promoted!", `${user.name} is now an Admin.`, "success");
              // Update UI
              const updatedUsers = users.map((u) =>
                u._id === user._id ? { ...u, role: "admin" } : u
              );
              setUsers(updatedUsers);
            }
          });
      }
    });
  };

  const handleDelete = (user) => {
    if (!isAdmin) {
       Swal.fire("Error", "Only admins can perform this action.", "error");
       return;
    }
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
        fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", `${user.name} has been deleted.`, "success");
              const remainingUsers = users.filter((u) => u._id !== user._id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">All Users ({users.length})</h2>
        <input
          type="text"
          placeholder="Search users..."
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
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{user.name}</div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`badge ${
                      user.role === "admin" ? "badge-primary" : "badge-ghost"
                    } badge-sm`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-square btn-ghost btn-xs text-primary tooltip"
                    data-tip="Make Admin"
                    disabled={!isAdmin || user.role === "admin"}
                  >
                    <ShieldCheck size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-square btn-ghost btn-xs text-error tooltip"
                    data-tip="Delete User"
                    disabled={!isAdmin}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile (1 col on tiny screens, 2 cols on small screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
        {filteredUsers.map((user) => (
          <div key={user._id} className="bg-base-200 rounded-xl p-4 flex flex-col shadow-sm">
              <div className="flex justify-between items-start mb-2">
                 <div>
                    <h3 className="font-bold text-sm">{user.name}</h3>
                    <p className="text-xs text-gray-500 break-all">{user.email}</p>
                 </div>
                 <span
                    className={`badge ${
                      user.role === "admin" ? "badge-primary" : "badge-ghost"
                    } badge-xs`}
                  >
                    {user.role}
                  </span>
              </div>
              
              <div className="flex justify-end gap-2 mt-auto pt-2 border-t border-gray-300/50">
                   {isAdmin && (
                    <>
                       <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm btn-circle btn-ghost text-primary disabled:bg-transparent"
                        disabled={user.role === "admin"}
                      >
                        <ShieldCheck size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-sm btn-circle btn-ghost text-error"
                      >
                        <Trash2 size={18} />
                      </button>
                    </>
                   )}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
