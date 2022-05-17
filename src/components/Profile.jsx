import React from "react";
import "../styles/Profile.css"
import ProfilePic from "../images/profilepic.jpeg"
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 70%;
`;


export default function Profile() {
  return (
    <div id="profile" className="profile-section">
      <div className="profile-pic-column">
        <img src={ProfilePic} className="profile-pic" alt="pic" />
      </div>
        <div className="profile-bio">
            <p className="profile-text">
              I've always had a knack and love for puzzle solving. I recall all the
              hours spent playing various games in my youth and just having a blast
              solving the little puzzles. It was through games such as Pokemon, Legend of
              Zelda and many more that I learned to love logical thinking. 
              I was very into computers throughout my childhood and teen years. I
              had a mock major in high-school for computer science. Suffice to say, I absolutely loved it. Sadly, it wasn't
              the career path that I ended up going down because of monetary and familial
              pressures. However, after working for awhile and simply not enjoying what I've
              been doing, I decided to turn around and go back to pursuing my dreams to become
              a software developer.
              I've learned so much ever since I decided to do software engineering boot camp at
              General Assembly. Becoming a junior full-stack developer has been an eye-opening
              experience. I've still so much more to learn and see, so here's to a wonderful journey.
            </p>
        </div>
      </div>
  );
}