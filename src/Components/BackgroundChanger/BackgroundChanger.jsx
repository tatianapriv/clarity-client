import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pathToImages = {
    "/": "../11.jpg",
    "/user": "../03.jpg",
    "/tracker": "../07.jpg",
    "/register": "../22.jpg",
    "/login": "../22.jpg"
};

const BackgroundChanger = ({ children }) => {
  const location = useLocation();
  console.log("location: ", location);

  useEffect(() => {
    const path = location.pathname;
    document.body.style.backgroundImage = `url(${
      pathToImages[path] || "./07.jpg"
    })`;
  }, [location]);

  return <>{children}</>;
};

export default BackgroundChanger;