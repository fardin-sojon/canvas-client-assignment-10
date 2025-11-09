import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#7A3FFF] to-[#C63BFA] text-white">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>

      {/* Text */}
      <h3 className="text-2xl font-semibold tracking-wide animate-pulse">
        Loading...
      </h3>
    </div>
  );
};

export default Loading;
