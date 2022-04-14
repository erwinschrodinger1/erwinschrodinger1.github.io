import React from "react";
import "../Styles/ContactMe.sass";
import Hand from "../../handgesture.jpg";
import { Parallax } from "react-parallax";

export default function ContactMe() {
  return (
    <div className="ContactMe">
      <div className="Contents">
        <h1>Contact Me</h1>
        <a href="mailto:sunnynirjal@gmail.com">sunnynirjal@gmail.com</a>
      </div>

      <div className="Hand">
        <Parallax
          renderLayer={(offset) => {
            return (
              <div sty>
                <img src={Hand} />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
