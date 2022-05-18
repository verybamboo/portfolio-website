import React from "react";
import Hater from "../images/hater.png"
import "../styles/Hater.css"
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

export default function FFReact() {
  return (
    <div className="hater-main-div">
      <Card className="hater-whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Hater} className="react-card" />
        <Card.Body className="hater-card-body">
          <Card.Title className="hater-card-title">Hater.rip</Card.Title>
          <Card.Text className="hater-card-text">
            This is a project made as a group with my cohort mates at General Assembly. This is our attempt at a funny spin off of what Twitter would be but instead called Hater. This has a fully functioning deployed back-end using Django, Python, MySQL and Knox. The front-end is made with React.
          </Card.Text>
          <Card.Text className="hater-card-links">
            <motion.a
              href="https://github.com/verybamboo/hater"
              target={"_blank"}
              whileHover={{ scale: 1.2, color: "#e4405f" }}
              className="social-logos"
            >
              {<IoLogoGithub />}
            </motion.a>
          </Card.Text>
          <Card.Text className="hater-card-links">
            <a className="hater-card-links" href="https://haterip.netlify.app/">Hater Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}