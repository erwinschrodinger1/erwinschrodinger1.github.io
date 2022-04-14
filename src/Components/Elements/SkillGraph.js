import React from "react";
import Graph from "../../bar graph.png";
import "../Styles/FamiliarWith.sass";

export default function SkillGraph() {
  return (
    <div className="FamiliarWith">
      <h1 className="heading">Skill Graph</h1>
      <img src={Graph} style={{ width: "100%" }} />
    </div>
  );
}
