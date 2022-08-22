import React, { useEffect, useState } from "react";
import "../Styles/CodeSection.sass";
export default function CodeSection(prop) {
  const [widthDivider, setWidthDivider] = useState(1);
  useEffect(() => {
    if (window.innerWidth < 520) {
      setWidthDivider(1.8);
    } else if (window.innerWidth < 728) {
      setWidthDivider(1.2);
    } else {
      setWidthDivider(1);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 520) {
        setWidthDivider(1.8);
      } else if (window.innerWidth < 728) {
        setWidthDivider(1.2);
      } else {
        setWidthDivider(1);
      }
    });
  }, [window.innerWidth]);
  return (
    <div className="CodeSection">
      <div className="circleLine">
        <span className="circle" />
        <span className="line" />
      </div>
      <div className="codes">
        <p
          className="line1"
          style={{ fontSize: `${prop.line1Size / widthDivider}px` }}
        >
          {prop.line1}
        </p>
        <p
          className="line2"
          style={{ fontSize: `${prop.line2Size / widthDivider}px` }}
        >
          {prop.line2}
        </p>
        <p
          className="line3"
          style={{ fontSize: `${prop.line3Size / widthDivider}px` }}
        >
          {prop.line3}
        </p>
        <p
          className="line4"
          style={{ fontSize: `${prop.line4Size / widthDivider}px` }}
        >
          {prop.line4}
        </p>
      </div>
    </div>
  );
}
