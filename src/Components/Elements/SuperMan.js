import React from "react";
import Superman from "../../Mask Group 2.png";
import { Parallax } from "react-parallax";
import "../Styles/SuperMan.sass";
import Typed from "react-typed";

export default function SuperMan() {
  return (
    <div className="SuperMan">
      <div className="SuperManImg">
        <Parallax
          renderLayer={(offset) => (
            <div
              style={{
                position: "relative",
                top: `${100 - offset * 100}%`,
                left: `${100 - offset * 100}%`,
              }}
            >
              <img
                style={{
                  height: "80%",
                  zIndex: 1,
                }}
                src={Superman}
                alt="Superman"
              />
            </div>
          )}
        ></Parallax>
      </div>
      <div className="SuperManContent">
        <h1 className="name">NIRJAL BHURTEL</h1>
        <div className="typewriter">
          <p className="iam">I am</p>
          <Typed
            strings={[
              " UI/UX Designer",
              " MERN Stack Developer",
              " Newbie Game Dev",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>
  );
}
