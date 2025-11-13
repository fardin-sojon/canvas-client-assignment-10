import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center p-5 my-20">
      <motion.div
        className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl shadow-xl max-w-sm w-full p-8 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        {user ? (
          <>
            <div className="relative mx-auto w-32 h-32 mb-5">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt={user.displayName}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <span className="absolute -bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {user.displayName || "No Name"}
            </h2>
            <p className="text-white/80 mb-4">{user.email}</p>
          </>
        ) : (
          <p className="text-gray-600 text-lg">No user logged in.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
