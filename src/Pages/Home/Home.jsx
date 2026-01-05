import React from "react";
import MySlider from "./Slider/MySlider";
import { useLoaderData } from "react-router"; 
import ArtworkCard from "./ArtworkCard";
import { Link } from "react-router";

// Import New Sections
import StatsSection from "./Sections/StatsSection";
import Categories from "./Sections/Categories";
import Testimonials from "./Sections/Testimonials";
import FAQ from "./Sections/FAQ";
import Newsletter from "./Sections/Newsletter";
import CallToAction from "./Sections/CallToAction";

// Import Images
import artistFardin from "../../assets/artist_fardin.jpg";
import artistRifat from "../../assets/artist_rifat.jpg";
import artistRefat from "../../assets/artist_refat.jpg";
import highlight1 from "../../assets/highlight1.webp";
import highlight2 from "../../assets/highlight2.jpg";

// ... (imports remain)

const Home = () => {
  const cardData = useLoaderData();

  const topArtists = [
    { id: 1, name: "Fardin Rahman Sojon", photo: artistFardin, artworks: 24, role: "Digital Artist" },
    { id: 2, name: "Rifat Hasan", photo: artistRifat, artworks: 18, role: "Concept Artist" },
    { id: 3, name: "Refat Hasan", photo: artistRefat, artworks: 15, role: "Illustrator" },
  ];

  const communityHighlights = [
    { 
      id: 1, 
      title: "Local Art Exhibition 2025", 
      description: "A colorful art fest featuring 50+ new artists from all over Bangladesh.", 
      image: highlight1,
      date: "Oct 15, 2025"
    },
    { 
      id: 2, 
      title: "Digital Art Workshop", 
      description: "Learn digital painting and concept design with expert mentors.", 
      image: highlight2,
      date: "Nov 20, 2025"
    },
  ];

  return (
    <div className="bg-base-100 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 1. Slider Section */}
        <MySlider />

        {/* 2. Stats Section */}
        <StatsSection />
        
        {/* 3. Artworks Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-2">Most Recent Artworks</h2>
          <p className="text-center text-gray-500 mb-8">Explore the latest creations from our community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData && cardData.slice(0, 3).map((art) => (
              <ArtworkCard key={art._id} art={art} />
            ))}
          </div>
          <div className="text-center mt-8">
             <Link to="/explore-artwork" className="btn btn-outline btn-primary">View All Artworks</Link>
          </div>
        </div>

        {/* 4. Categories Section */}
        <Categories />

        {/* 5. Top Artists Section */}
        <div className="mt-16">
           <h2 className="text-3xl font-bold text-center mb-8">Top Artists of the Week</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topArtists.map((artist) => (
               <div key={artist.id} className="card bg-base-200 shadow-xl border border-gray-200">
                  <div className="card-body items-center text-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={artist.photo} alt={artist.name} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">{artist.name}</h3>
                    <p className="text-sm text-gray-500">{artist.role}</p>
                    <p className="font-semibold text-primary">{artist.artworks} Artworks</p>
                  </div>
               </div>
            ))}
           </div>
        </div>

        {/* 6. Call To Action Section */}
        <CallToAction />

        {/* 7. Community Highlights Section */}
        <div className="mt-16 mb-10">
           <h2 className="text-3xl font-bold text-center mb-8">Community Highlights</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityHighlights.map((highlight) => (
                <div key={highlight.id} className="card lg:card-side bg-base-100 shadow-xl border border-gray-200">
                  <figure className="lg:w-1/2">
                    <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover" />
                  </figure>
                  <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-primary">{highlight.title}</h2>
                    <p>{highlight.description}</p>
                    <div className="badge badge-secondary">{highlight.date}</div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Newsletter Section */}
        <Newsletter />

      </div>
    </div>
  );
};

export default Home;
