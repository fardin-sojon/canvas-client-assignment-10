import React from "react";
import artistFardin from "../assets/artist_fardin.jpg";
import artistRifat from "../assets/artist_rifat.jpg";
import artistRefat from "../assets/artist_refat.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          About Canvas Connect
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Empowering artists and craft enthusiasts to share their creativity with
          the world.
        </p>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
              alt="Art Supplies"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Canvas Connect, we believe that art is a universal language. Our
              mission is to provide a platform where painters, sketchers, and
              paper crafters can showcase their work, inspire others, and connect
              with a global community of art lovers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are a professional artist or just starting, Canvas
              Connect is your space to shine.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section (Optional/Static) */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                 <img src={artistFardin} alt="Fardin Rahman Sojon" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Fardin Rahman Sojon</h3>
              <p className="text-blue-500">Lead Developer</p>
            </div>
             {/* Member 2 */}
             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                 <img src={artistRifat} alt="Rifat Hasan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Rifat Hasan</h3>
              <p className="text-blue-500">UI/UX Designer</p>
            </div>
             {/* Member 3 */}
             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                 <img src={artistRefat} alt="Refat Hasan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Refat Hasan</h3>
              <p className="text-blue-500">Community Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
