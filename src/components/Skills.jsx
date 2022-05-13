import React from "react";
import "../styles/Skills.css"
import Imageset from "../images/logos/imageSet.js"
import imageSet from "../images/logos/imageSet.js";

export default function Skills() {
  return (
    <div id="skills" className="skills-div">
      <div className="skill-icons">
        {imageSet.map((item, index) => (
          <div>
            <img
              src={require("../images/logos/" + item.image + ".svg")}
              height={120}
              className="skill-logos"
              id={"skill" + item.number}
            />
          </div>
        ))}
      </div>
    </div>
  )
}