import React, { useEffect, useState } from "react";
import "../Styles/Projects.sass";
import logo from "../../logo.svg";

export default function Projects() {
  const [pjl, setpjl] = useState("projectlist");

  const [velocity, setVelocity] = useState(0);
  let scrollPos = window.pageYOffset;
  useEffect(() => {
    const interval = setInterval(() => {
      let newScrollPos = window.pageYOffset;
      setVelocity((newScrollPos - scrollPos) * 4);
    }, 10);
    return () => clearInterval(interval);
  });
  const projects = [
    {
      name: "OMNECAL",
      image: logo,
    },
    {
      name: "AIFIVERSE",
      image: logo,
    },
    {
      name: "DIGI-PAPYRUS",
      image: logo,
    },
    {
      name: "CUBOHOLIC",
      image: logo,
    },
    {
      name: "EL.MARS",
      image: logo,
    },
  ];
  return (
    <div className="Projects">
      <h1 className="heading">PROJECTS</h1>
      <div className={pjl}>
        {projects.map((project) => (
          <div>
            <div
              style={{
                transform: `rotate(${velocity}deg) skew(${velocity}deg)`,
              }}
              onMouseEnter={() => {
                pjl === "projectlist"
                  ? setpjl("projectlist active")
                  : setpjl("projectlist");
              }}
              onMouseLeave={() => {
                setpjl("projectlist");
              }}
            >
              <h1>{project.name}</h1>

              <img src={project.image} />
            </div>
          </div>
        ))}
        {/* <div>
          <div
          style={{
            transform: `rotate(${velocity}deg) skew(${velocity}deg)`,
            }}
            onMouseEnter={() => {
              pjl === "projectlist"
                ? setpjl("projectlist active")
                : setpjl("projectlist");
            }}
            onMouseLeave={() => {
              setpjl("projectlist");
            }}
          >
            <h1>DIGI-PAPYRUS</h1>
            <img src={logo} />
          </div>
        </div>
        <div>
          <div
            style={{
              transform: `rotate(${velocity}deg) skew(${velocity}deg)`,
            }}
            onMouseEnter={() => {
              pjl === "projectlist"
                ? setpjl("projectlist active")
                : setpjl("projectlist");
            }}
            onMouseLeave={() => {
              setpjl("projectlist");
            }}
          >
            <h1>AYURWIZ</h1>
            <img src={logo} />
          </div>
        </div>
        <div>
          <div
            style={{
              transform: `rotate(${velocity}deg) skew(${velocity}deg)`,
            }}
            onMouseEnter={() => {
              pjl === "projectlist"
                ? setpjl("projectlist active")
                : setpjl("projectlist");
            }}
            onMouseLeave={() => {
              setpjl("projectlist");
            }}
          >
            <h1>EL. MARS</h1>
            <img src={logo} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
