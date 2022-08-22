import React, { useEffect, useState } from "react";

export default function BackgroundGradient(prop) {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(height);
      setHeight(window.innerHeight);
    });
  }, [height]);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 0,
        background: "#98ADEF",
      }}
    >
      <div style={{ height: prop.firstColor, background: "black" }} />
      <div
        style={{
          height: prop.gradient,
          background: "linear-gradient(black, #3960E4)",
        }}
      />
      <div
        style={{
          height: prop.secondGradient,
          background: "linear-gradient(#3960E4, #98ADEF)",
        }}
      />
    </div>
  );
}
