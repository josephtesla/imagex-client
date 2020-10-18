import React from "react";
import "./Image.css";

const Image = ({ image, handleClick }) => {
  return (
    <div className="single-image-wrapper card" onClick={handleClick}>
      <img className="single-image" alt={image.public_id} src={image.url} />
      <p className="single-image-text">
        Uploaded: {new Date(image.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default Image;
