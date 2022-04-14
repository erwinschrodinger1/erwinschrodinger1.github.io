import React from "react";
import "../Styles/CodeSection.sass";
export default function CodeSection(prop) {
  return (
    <div className="CodeSection">
      <div className="circleLine">
        <span className="circle" />
        <span className="line" />
      </div>
      <div className="codes">
        <p className="line1" style={{ fontSize: `${prop.line1Size}px` }}>
          {prop.line1}
        </p>
        <p className="line2" style={{ fontSize: `${prop.line2Size}px` }}>
          {prop.line2}
        </p>
        <p className="line3" style={{ fontSize: `${prop.line3Size}px` }}>
          {prop.line3}
        </p>
        <p className="line4" style={{ fontSize: `${prop.line4Size}px` }}>
          {prop.line4}
        </p>
      </div>
    </div>
  );
}
