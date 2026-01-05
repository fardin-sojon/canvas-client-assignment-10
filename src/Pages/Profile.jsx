
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, Edit, Shield } from 'lucide-react';
import EditProfileModal from '../Components/EditProfileModal';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [role, setRole] = useState("User");
  const [dbUser, setDbUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Basic stats state
  const [stats, setStats] = useState({
      artworks: 0,
      favorites: 0
  });

  useEffect(() => {
    if(user?.email){
        // Fetch user data from DB
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            const loggedInUser = data.find(u => u.email?.toLowerCase() === user?.email?.toLowerCase());
            if(loggedInUser) {
                setRole(loggedInUser.role);
                // We can also store the dbUser if we want other fields, but for now we interact directly or save to a state
                setDbUser(loggedInUser);
            }
        });

        // Fetch stats (Artworks count)
        fetch(`http://localhost:5000/artwork?email=${user.email}`)
        .then(res => res.json())
        .then(data => setStats(prev => ({...prev, artworks: data.length})));
        
        // Fetch stats (Favorites count)
        fetch(`http://localhost:5000/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => setStats(prev => ({...prev, favorites: data.length})));
    }
  }, [user]);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center p-5 mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-base-100 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-base-200"
      >
        {/* Header/Cover Area */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-32 relative">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/150"}
                        alt={user.displayName}
                        className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg object-cover bg-white"
                    />
                     <span className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white ${role === 'admin' ? 'bg-yellow-400' : 'bg-green-500'}`}></span>
                </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="pt-20 pb-8 px-8 text-center">
            <h2 className="text-3xl font-bold text-base-content flex items-center justify-center gap-2">
              {user.displayName || "Anonymous User"}
              {role === 'admin' && <Shield className="text-blue-500 w-6 h-6" fill="currentColor" fillOpacity={0.2} />}
            </h2>
            <div className="flex items-center justify-center gap-2 text-base-content/60 mt-1">
                <Mail size={16} />
                <span>{user.email}</span>
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-3">
                 <span className={`badge ${role === 'admin' ? 'badge-primary' : 'badge-secondary'} badge-lg`}>
                    {role === 'admin' ? 'Administrator' : 'Explorer'}
                 </span>
                 <span className="badge badge-ghost badge-lg flex items-center gap-1">
                    <Calendar size={14} /> Joined {dbUser?.creationTime ? new Date(dbUser.creationTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }) : (user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }) : 'Recently')}
                 </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto">
                <div className="bg-base-200 p-4 rounded-2xl">
                    <p className="text-4xl font-bold text-primary">{stats.artworks}</p>
                    <p className="text-sm font-medium opacity-70">Artworks Contributed</p>
                </div>
                 <div className="bg-base-200 p-4 rounded-2xl">
                    <p className="text-4xl font-bold text-secondary">{stats.favorites}</p>
                    <p className="text-sm font-medium opacity-70">Favorites Collected</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center gap-4">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary px-8"
                >
                    <Edit size={18} /> Edit Profile
                </button>
            </div>
        </div>
        
        <EditProfileModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            user={user}
            onUpdate={(updatedData) => {
                setUser(updatedData);
                // Also update local dbUser state to reflect changes if necessary, though name/photo mainly come from 'user' object
                // setDbUser(prev => ({...prev, ...updatedData})); 
            }}
        />
      </motion.div>
    </div>
  );
};

export default Profile;
