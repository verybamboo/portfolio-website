import React from "react";
import "../styles/Topbar.css"
import resume from "../resume/resume.pdf"

export default function Topbar()
{
  return (
    <div className="top-bar-div">
      <div className="top-bar-name">George Chen</div>
      <a href="#home" className="top-bar-home">Home
      </a>  
      <a href="#skills" className="top-bar-skills">Skills
      </a>
      <a href="#projects-holder" className="top-bar-project">Projects
      </a>
      <a href="#profile" className="top-bar-profile">Profile
      </a>
      <a href="#contact" className="top-bar-contact">Contact Me
      </a>
      <a href={resume} download={resume} className="top-bar-contact">Download Resume
      </a>
   </div>
  )
}