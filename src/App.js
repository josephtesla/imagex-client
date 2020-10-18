import React, { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import ImageList from "./components/ImageList";
import ImageView from "./components/ImageView";
import * as API from "./api/api";

const App = () => {
  const imageInput = useRef();
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedImage, setClickImage] = useState(null);

  useEffect(() => {
    const func = async () => {
      setLoading(true);
      const resp = await API.getImages();
      setImages(resp.data);
      setClickImage(resp.data[0]);
      setLoading(false);
    };
    func();
  }, []);

  const onImageChange = () => {
    const image = imageInput.current.files[0];
    setSelectedImage(image.name);
  };

  const handleClick = (imageId) => {
    console.log(imageId);
    setClickImage(images.filter((img) => img._id === imageId)[0]);
    window.location.href = "#image-view";
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const image = imageInput.current.files[0];
    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    const resp = await API.postImage(formData);
    const newImageData = resp.data;
    const currentImages = images;
    currentImages.unshift(newImageData);
    setImages(currentImages);
    setLoading(false);
  };

  const handleDelete = async (imageId) => {
    console.log(imageId);
    setLoading(true);
    await API.deleteImage(imageId);
    const currentImages = images.filter((img) => img._id !== imageId);
    setImages(currentImages);
    setClickImage(currentImages[0]);
    setLoading(false);
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        {!loading ? (
          <>
            <div className="upload-section">
              <form>
                <input
                  type="file"
                  id="files"
                  name="image"
                  accept="image/*"
                  className="form-input hidden"
                  ref={imageInput}
                  required
                  onChange={onImageChange}
                />
                <div className="flex-col">
                  <label className="upload-image-label" htmlFor="files">
                    Upload New Photo &#8594;
                  </label>{" "}
                  <small> &nbsp; {selectedImage}</small>{" "}
                  <button
                    onClick={handleSave}
                    style={{ display: `${selectedImage ? "block" : "none"}` }}
                    className="upload-btn"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            <p>Click on any of the images to get the full view</p>
            <div className="row">
              <div className="image-list-col">
                <ImageList
                  handleClick={(imageId) => {
                    handleClick(imageId);
                  }}
                  images={images}
                />
              </div>
              <div className="image-view-col">
                <ImageView
                  image={clickedImage}
                  handleDelete={(imageId) => {
                    handleDelete(imageId);
                  }}
                  images={images}
                />
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>Loading... pls wait</h1>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
