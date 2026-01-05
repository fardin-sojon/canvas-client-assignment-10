import React, { useState } from 'react';
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { toast } from 'react-toastify';
import { X, Save } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, user, onUpdate }) => {
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Update Firebase Profile
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });

            // 2. Update Database Record
            const res = await fetch(`http://localhost:5000/users/${user.email}`, {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, photoURL: photo })
            });
            
            if(res.ok){
                toast.success("Profile Updated Successfully!");
                onUpdate({ ...user, displayName: name, photoURL: photo }); // Optimistic update / Trigger refresh
                onClose();
            } else {
                throw new Error("Failed to update database");
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-base-100 w-full max-w-md p-6 rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-200">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 btn btn-circle btn-ghost btn-sm"
                >
                    <X size={20} />
                </button>
                
                <h3 className="text-2xl font-bold mb-6 text-center">Edit Profile</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full focus:input-primary"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Photo URL</span>
                        </label>
                        <input 
                            type="text" 
                            value={photo} 
                            onChange={(e) => setPhoto(e.target.value)}
                            className="input input-bordered w-full focus:input-primary"
                            placeholder="https://example.com/photo.jpg"
                            required
                        />
                    </div>
                    
                    {/* Preview (Optional) */}
                    {photo && (
                        <div className="flex justify-center mt-2">
                             <img src={photo} alt="Preview" className="w-16 h-16 rounded-full object-cover border-2 border-base-200" />
                        </div>
                    )}

                    <div className="modal-action mt-6">
                        <button 
                            type="button" 
                            className="btn btn-ghost"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner loading-sm"></span> : <Save size={18} />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
