import React from "react";
import "../styles/Home.css"
import Fullstack from "../images/fullstackicon.png"

export default function Home() {
  return (
    <div id="home" className="home">
      <div className="home-pic">
        <img className="fullstack-icon" src={Fullstack}></img>
      </div>
      <div className="home-text">
        <div className="home-text-boxes">
          <div className="home-title-text">
            <h2>Hey, my name's</h2>
            <span className="span-letters-1">G</span>
            <span className="span-letters-2">e</span>
            <span className="span-letters-3">o</span>
            <span className="span-letters-4">r</span>
            <span className="span-letters-5">g</span>
            <span className="span-letters-6">e</span>
            <span className="span-letters-7">.</span>
          <p className="home-paragraph">
            Welcome to my personal website. I'm an aspiring Full-Stack developer looking to start a career in software developing.
              Please take some time and have a look at some of the stuff I've made. These are projects showcasing how I improved my skills over the course of time.
              You're also welcome to check out what skills I've picked or read up on my profile and learn a little about me. Feel free to contact me as well if you want.
              Anyone is free to contact me through the contact me section by submitting their email. I also have a resume that you can download
              from the profile section.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}