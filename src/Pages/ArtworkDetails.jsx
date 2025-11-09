import React from "react";
import { useLoaderData } from "react-router";

const ArtworkDetails = () => {

    const art = useLoaderData();
    console.log(art);

  return (
    <div>
      <h3>Artwork Details</h3>
    </div>
  );
};

export default ArtworkDetails;
