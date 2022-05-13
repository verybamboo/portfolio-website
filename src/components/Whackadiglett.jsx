import React from "react";
import Whackadiglettpng from "../images/whackadiglett.png"
import "../styles/Whackadiglett.css"
import { Card } from "react-bootstrap";

export default function Whackadiglett() {
  return (
    <div className="whack-div">
      <Card className="whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Whackadiglettpng} className="diglett-card"/>
        <Card.Body className="card-body">
          <Card.Title className="card-title">Whackadiglett</Card.Title>
          <Card.Text className="card-text">
            I made this project as a fun off shoot based off of the original Whack-A-Mole game using Digletts(which are pokemon that were created as a parody of moles from Whack-A-Mole). The game has different types of Digletts that appear at random times at a random hole and will stay on the board for a random amount of time as well.
          </Card.Text>
          <Card.Text className="card-links">
            <a className="whack-links" href="https://github.com/verybamboo/whackadiglett">Whackadiglett Github Repo</a>
          </Card.Text>
          <Card.Text className="card-links">
            <a className="whack-links" href="https://verybamboo.github.io/whackadiglett/">Whackadiglett Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}