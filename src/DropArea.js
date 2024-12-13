// DropArea.js
import React, { useState, useContext } from "react";
import { useDrop } from "react-dnd";
import { MyContext } from "./MyContext";
import { ImgContext } from "./ImgContext";

const DropArea = ({ selectImageCallBack }) => {
  const {image, setImage} =  useContext(ImgContext);
  const {message, setMessage} = useContext(MyContext);
  const [showImg, setShowImg] = useState(false);
  const [showText, setShowText] = useState(false);
  const clickCallBack = (msg) => {
    selectImageCallBack(msg);
  };
  const updateImage = (newUrl, newWidth, newHeight) => {
    setImage((prevState) => ({
      ...prevState, // 保留其他屬性
      uri: newUrl, // 更新 imageUrl
      width: newWidth, // 更新 imageW
      height: newHeight, // 更新 imageH
    }));
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    // drop: (item) => console.log(`Dropped ${item.info.uri} in ${title}`),
    drop: (item) => {
      //   item.info != undefined ? setImageUrl(item.info.uri) : setText(item.text);
        console.log(item);
      if (item.info !== undefined) {
        updateImage(item.info.uri, item.info.width, item.info.height);
        setShowImg(true);
        console.log("drop img");
      } else if (item.text !== undefined) {
        setMessage(item.text);
        setShowText(true);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  const backgroundColor = isActive ? "lightyellow" : "white";
  return (
    <div
      ref={drop}
      style={{
        backgroundColor,
        width: "100%",
        height: "100%",
        position: "relative",
      }}

    >
      {showImg && (
        <div>
          <img
            src={image.uri}
            width={image.width}
            height={image.height}
            alt="Dropped"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            onClick={() => clickCallBack("image")}
          />
        </div>
      )}
      {showText && <div onClick={() => clickCallBack("text")}>{message}</div>}
    </div>
  );
};

export default DropArea;
