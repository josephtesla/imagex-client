import React from "react";
import img from "../../assets/food-3.jpg";
import "./imageView.css";

const ImageView = ({ image, handleDelete }) => {
  return (
    <div className="image-view">
      {image ? (
        <div id="image-view" className="card">
          <p className="image-details">
            File: {image.public_id} <br></br> Uploaded:{" "}
            {new Date(image.createdAt).toLocaleString()}
          </p>
          <img className="main-image" src={image.url} alt="Sample.jpg" />
          <div className="button-div">
            <button
              className="delete-btn"
              onClick={() => handleDelete(image._id)}
            >
              x Delete Image
            </button>
          </div>
        </div>
      ) : (
        <h2 style={{ marginTop: "60px", color: "grey" }}>
          EMpTY IMagE GALLERY
        </h2>
      )}
    </div>
  );
};

export default ImageView;
