import React from "react";
import "../Styles/FamiliarWith.sass";
import js from "../Images/js.png";
import react from "../../logo.svg";
import node from "../Images/node.png";
import css from "../Images/css.png";
import sass from "../Images/sass.png";
import blender from "../Images/blender.png";
import adobexd from "../Images/Adobe_XD_CC_icon.svg.png";
import figma from "../Images/figma.png";
import restapi from "../Images/restapi.png";
import html from "../Images/html.png";
import threejs from "../Images/three.png";
import arduino from "../Images/arduino.png";
import git from "../Images/git.png";
import mongo from "../Images/mongo.png";
import cpp from "../Images/cpp.png";
import c from "../Images/c.png";
import mysql from "../Images/mysql.png";
import unreal from "../Images/unrealengine.png";
import java from "../Images/java.png";
export default function () {
  const familiarList = [
    {
      title: "JavaScript",
      src: js,
    },
    {
      title: "React Js",
      src: react,
    },
    {
      title: "Node Js",
      src: node,
    },
    {
      title: "CSS",
      src: css,
    },
    {
      title: "SASS",
      src: sass,
    },
    {
      title: "Blender",
      src: blender,
    },
    {
      title: "Adobe Xd",
      src: adobexd,
    },
    {
      title: "Figma",
      src: figma,
    },
    {
      title: "Rest Api",
      src: restapi,
    },
    {
      title: "HTML",
      src: html,
    },
    {
      title: "Three Js",
      src: threejs,
    },
    {
      title: "Arduino",
      src: arduino,
    },

    {
      title: "Git",
      src: git,
    },
    {
      title: "Mongo DB",
      src: mongo,
    },
    {
      title: "C++",
      src: cpp,
    },
    {
      title: "C",
      src: c,
    },

    {
      title: "My Sql",
      src: mysql,
    },
    {
      title: "Unreal Game Engine",
      src: unreal,
    },
    {
      title: "Java",
      src: java,
    },
  ];
  return (
    <div className="FamiliarWith">
      <h1 className="heading">FAMILIAR WITH</h1>
      <div className="cards">
        {familiarList.map((list) => (
          <div>
            <img src={list.src} />
            <h1>{list.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
