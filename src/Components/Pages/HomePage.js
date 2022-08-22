import React from "react";
import "../Styles/HomePage.sass";
import BackgroundGradient from "../Elements/BackgroundGradient";
import NavigationBar from "../Elements/NavigationBar";
import CodeSection from "../Elements/CodeSection";
import SuperMan from "../Elements/SuperMan";
import Projects from "../Elements/Projects";
import FamiliarWith from "../Elements/FamiliarWith";
import SkillGraph from "../Elements/SkillGraph";
import ContactMe from "../Elements/ContactMe";
export default function HomePage() {
  return (
    <div className="HomePage">
      <BackgroundGradient
        firstColor="100vh"
        gradient="150vh"
        secondGradient="200vh"
      />
      <div style={{ zIndex: 10, position: "relative" }}>
        <CodeSection
          line1="#inlcude <stdio.h>"
          line1Size={28}
          line2="int main(){"
          line2Size={28}
          line3="Impossible();"
          line3Size={64}
          line4="}"
          line4Size={28}
        />
        {/* <div style={{ margin: "40vh" }} /> */}
        <div>
          <CodeSection
            line1="Impossible.itselfis(){"
            line1Size={28}
            line2="printf{`I'am Possible`}"
            line2Size={64}
            line3="}"
            line3Size={28}
            line4="//@author Nirjal Bhurtel"
            line4Size={28}
          />
        </div>
        {/* <div style={{ height: "100vh" }}> */}
        <div>
          <SuperMan />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <FamiliarWith />
        </div>
        <div>
          <SkillGraph />
        </div>
        <div style={{ height: "58vh" }}>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
