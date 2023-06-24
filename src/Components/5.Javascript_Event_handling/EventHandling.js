import React, { useState } from "react";
import "./event.css";
import thumb1 from "./Img/thumb1.jpg";
import thumb2 from "./Img/thumb2.jpg";
import thumb3 from "./Img/thumb3.jpg";

const EventHandling = () => {
  const [mainImage, setMainImage] = useState("");

  const handleThumbnailClick = (thumbnailSrc) => {
    setMainImage(thumbnailSrc);
  };

  return (
    
    
    <div className="gallery">
      <div className="thumbnails">
        <img
          src={thumb1}
          alt="Thumbnail 1"
          onClick={() => handleThumbnailClick(thumb1)}
        />
        <img
          src={thumb2}
          alt="Thumbnail 2"
          onClick={() => handleThumbnailClick(thumb2)}
        />
        <img
          src={thumb3}
          alt="Thumbnail 3"
          onClick={() => handleThumbnailClick(thumb3)}
        />
      </div>
      <div className="main-image">
        <img src={mainImage} alt="Main" />
      </div>
    </div>
  );
};

export default EventHandling;
