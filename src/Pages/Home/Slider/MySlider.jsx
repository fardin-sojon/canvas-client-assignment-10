import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import art1 from "../../../assets/art1.jpg";
import art2 from "../../../assets/art2.avif";
import art3 from "../../../assets/art3.jpg";

const MySlider = () => {
  const images = [
    {
      original: art1,
      thumbnail: art1,
    },
    {
      original: art2,
      thumbnail: art2,
    },
    {
      original: art3,
      thumbnail: art3,
    },
  ];

  return (
    <div className="mt-8 w-[90%] md:w-[70%] mx-auto">
      <ImageGallery 
        items={images} 
        showPlayButton={false} 
        autoPlay={true} 
        additionalClass="my-custom-slider"
      />
    </div>
  );
};

export default MySlider;
