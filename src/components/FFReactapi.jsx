import React from "react";
import FFreactapi from "../images/ffreactapi.png"
import "../styles/FFReactapi.css"
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

export default function FFReact() {
  return (
    <div className="main-div-ff">
      <Card className="react-whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={FFreactapi} className="react-card"/>
        <Card.Body className="react-card-body">
          <Card.Title className="react-card-title">Final Fantasy React API</Card.Title>
          <Card.Text className="react-card-text">
          A simple webpage that allows you to scroll through all the characters from all Final Fantasy games. You can press the arrows to nagivate left or right depending on the arrow. You can also use the random button in the middle to pick a random character. The slides loop around back to the beginning or end, infinitely depending on which way you are going. The information is printed to the right, the image of the character is placed in the middle and the description of the character will be on the left.
          </Card.Text>
          <Card.Text className="react-card-links">
            <motion.a
              href="https://github.com/verybamboo/React-rebuild"
              target={"_blank"}
              whileHover={{ scale: 1.2, color: "#e4405f" }}
              className="social-logos"
            >
              {<IoLogoGithub />}
            </motion.a>
          </Card.Text>
          <Card.Text className="react-card-links">
            <a className="react-links" href="https://kaleidoscopic-mousse-1212c1.netlify.app/">FFReactAPI Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}