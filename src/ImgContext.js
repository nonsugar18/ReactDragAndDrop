import React, { createContext, useState } from "react";

export const ImgContext = createContext();

export const ImgProvider = ({ children }) => {
    const [image, setImage] = useState({
        width: 200,
        height: 200,
        uri: "https://www.rayuncle.com/wp-content/uploads/2022/11/%E9%9B%BB%E5%95%86%E5%B9%B3%E5%8F%B0%E6%AF%94%E8%BC%83-Meepshop-1.png",
    });
    return <ImgContext.Provider value={{image, setImage}}>{children}</ImgContext.Provider>;
};
