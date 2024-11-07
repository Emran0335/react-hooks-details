import React, { useState, useEffect } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innnerWidth);
  console.log("before effect", width);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    console.log("after effect", width);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // only run once after mount

  return <div>Window width: {width}px</div>;
};

export default WindowWidth;
