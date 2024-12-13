import React, { useState, useRef, useContext } from "react";
import { render } from "react-dom";
import "./styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableBox from "./DraggableBox";
import DropArea from "./DropArea";
import { MyProvider, MyContext } from "./MyContext";
import { ImgProvider, ImgContext } from "./ImgContext";

function App() {
  const [status, setStatus] = useState("initial");
  // const [imgInfo, setImgInfo] = useState({
  //   width: 200,
  //   height: 200,
  //   uri: "https://www.rayuncle.com/wp-content/uploads/2022/11/%E9%9B%BB%E5%95%86%E5%B9%B3%E5%8F%B0%E6%AF%94%E8%BC%83-Meepshop-1.png",
  // });

  // const [message, setMessage] = useState("Hello!");

  const { message, setMessage } = useContext(MyContext);
  const { image, setImage} = useContext(ImgContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setImage((prevInputs) => ({
      ...prevInputs,
      [name]: value, // 根據 name 更新對應的輸入框
    }));
  };
  const handleTextInputChange = (e) => {
    // setMessage((prev) => ({ ...prev, src: e.target.value }));
    setMessage(e.target.value);
  };
  const renderContent = () => {
    if (status === "text") {
      return (
        <div className="input">
          <input type="text" value={message} onChange={handleTextInputChange} />
        </div>
      );
    } else if (status === "image") {
      return (
        <div className="input">
          <input
            type="number"
            name="height"
            value={image.height}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="width"
            value={image.width}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="uri"
            value={image.uri}
            onChange={handleInputChange}
          />
        </div>
      );
    } else {
      return (
        <div>
          <DraggableBox name="圖片元件" info={image} />
          <DraggableBox name="文字元件" text={message} />
        </div>
      );
    }
  };

  const selectImageCallBack = (obj) => {
    console.log(obj);
    setStatus(obj);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div class="page">
        <div class="sidebar">{renderContent()}</div>
        <div class="content">
          <div class="title">This is a fixed header, no need to modify</div>
          <div class="preview">
            {/* <DynamicImageLoader /> */}
            <DropArea selectImageCallBack={selectImageCallBack}></DropArea>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
// 用 MyProvider 包裹 App 組件
const AppWrapper = () => {
  return (
    <MyProvider>
      <ImgProvider><App /></ImgProvider>
    </MyProvider>
  );
};

export default AppWrapper;

//export default App;
