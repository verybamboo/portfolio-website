import React from "react";
import Whackadiglettpng from "../images/whackadiglett.png"
import "../styles/Whackadiglett.css"
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

export default function Whackadiglett() {
  return (
    <div className="whack-div">
      <Card className="whack-whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Whackadiglettpng} className="diglett-card"/>
        <Card.Body className="whack-card-body">
          <Card.Title className="whack-card-title">Whackadiglett</Card.Title>
          <Card.Text className="whack-card-text">
            I made this project as a fun off shoot based off of the original Whack-A-Mole game using Digletts(which are pokemon that were created as a parody of moles from Whack-A-Mole). The game has different types of Digletts that appear at random times at a random hole and will stay on the board for a random amount of time as well.
          </Card.Text>
          <Card.Text className="whack-card-links">
            <motion.a
              href="https://github.com/verybamboo/whackadiglett"
              target={"_blank"}
              whileHover={{ scale: 1.2, color: "#e4405f" }}
              className="social-logos"
            >
              {<IoLogoGithub />}
            </motion.a>
          </Card.Text>
          <Card.Text className="whack-card-links">
            <a className="whack-links" href="https://verybamboo.github.io/whackadiglett/">Whackadiglett Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}