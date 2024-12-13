import React, { useState } from "react";

const DynamicImageLoader = ({ info, text }) => {
  console.log(info);
  const [imageUrl, setImageUrl] = useState(info);
  const [showImage, setShowImage] = useState(false);

  const [content, setcontent] = useState(text);
  const [showContent, setContent] = useState(false);

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleInputTextChange = (e) => {
    setImageUrl(e.target.value);
  };

  const loadImage = () => {
    if (imageUrl) {
      setShowImage(true);
    }
  };

  return (
    <div>
      <h1>Dynamic Image Loader</h1>
      {/* <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={handleInputChange}
      /> */}
      {/* <button onClick={loadImage}>Load Image</button> */}
      <div>
        <img
          src={imageUrl}
          alt="Loaded"
          style={{ maxWidth: "300px", maxHeight: "200px" }}
          onClick={handlePrevImage}
        />
      </div>
    </div>
  );
};

export default DynamicImageLoader;
