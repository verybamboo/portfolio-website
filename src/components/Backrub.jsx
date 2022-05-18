import React from "react";
import Backrubimg from "../images/backrub.png"
import "../styles/Backrub.css"
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

export default function Backrub() {
  return (
    <div className="backrub-main-div">
      <Card className="backrub-whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Backrubimg} className="react-card"/>
        <Card.Body className="backrub-card-body">
          <Card.Title className="backrub-card-title">Backrub.wiki - Google Archive API</Card.Title>
          <Card.Text className="backrub-card-text">
          A group project made with 2 other cohort mates from General Assembly. The website fetches from a deployed back-end that we made using MongoDB and Heroku. You are able to view tech articles from the NYT for the last 20 or so years.
          </Card.Text>
          <Card.Text className="backrub-card-links">
            <motion.a
              href="https://github.com/verybamboo/google-archive-api"
              target={"_blank"}
              whileHover={{ scale: 1.2, color: "#e4405f" }}
              className="social-logos"
            >
              {<IoLogoGithub />}
            </motion.a>
          </Card.Text>
          <Card.Text className="backrub-card-links">
            <a className="backrub-card-links" href="https://backrub.wiki/">Backrub Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}