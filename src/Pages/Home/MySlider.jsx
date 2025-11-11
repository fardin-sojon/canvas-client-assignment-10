import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import art1 from "../../assets/art1.jpg";
import art2 from "../../assets/art2.avif";
import art3 from "../../assets/art3.jpg";

const MySlider = () => {
  const images = [
    {
      original: art1,
      thumbnail: art1,
      description: "Exploring Creative Artworks",
    },
    {
      original: art2,
      thumbnail: art2,
      description: "Modern Abstract Imagination",
    },
    {
      original: art3,
      thumbnail: art3,
      description: "Nature Meets Emotion",
    },
  ];

  return (
    <div className="mt-7 rounded-xl overflow-hidden shadow-2xl">
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        autoPlay={true}
        slideInterval={4000}
        showBullets={true}
        showThumbnails={false}
        lazyLoad={true}
        infinite={true}
      />
    </div>
  );
};

export default MySlider;
