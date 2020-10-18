import React from "react";
import Image from "../../components/Image";
import "./ImageList.css";

const ImageList = ({ handleClick, images }) => {
  return (
    <div>
      <h3 className="image-list-title"> All Uploads</h3>
      <div className="image-list card">
        {images.length ? (
          <div>
            {images.map((image) => (
              <Image
                key={image._id}
                image={image}
                handleClick={() => {
                  handleClick(image._id);
                }}
              />
            ))}
          </div>
        ) : (
          <h3 style={{ marginTop: "60px" }}>
            No uploads. Pls upload an image...
          </h3>
        )}
      </div>
    </div>
  );
};

export default ImageList;
