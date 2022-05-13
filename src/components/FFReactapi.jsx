import React from "react";
import FFreactapi from "../images/ffreactapi.png"
import "../styles/FFReactapi.css"
import { Card } from "react-bootstrap";

export default function FFReact() {
  return (
    <div className="main-div">
      <Card className="whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={FFreactapi} className="react-card"/>
        <Card.Body className="card-body">
          <Card.Title className="card-title">Final Fantasy React API</Card.Title>
          <Card.Text className="card-text">
          A simple webpage that allows you to scroll through all the characters from all Final Fantasy games. You can press the arrows to nagivate left or right depending on the arrow. You can also use the random button in the middle to pick a random character. The slides loop around back to the beginning or end, infinitely depending on which way you are going. The information is printed to the right, the image of the character is placed in the middle and the description of the character will be on the left.
          </Card.Text>
          <Card.Text className="card-links">
            <a className="whack-links" href="https://github.com/verybamboo/React-rebuild">FFReactAPI Github Repo</a>
          </Card.Text>
          <Card.Text className="card-links">
            <a className="whack-links" href="https://kaleidoscopic-mousse-1212c1.netlify.app/">FFReactAPI Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}