import React from "react";
import Backrub from "../images/backrub.png"
import "../styles/Backrub.css"
import { Card } from "react-bootstrap";

export default function FFReact() {
  return (
    <div className="main-div">
      <Card className="whole-card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Backrub} className="react-card"/>
        <Card.Body className="card-body">
          <Card.Title className="card-title">Backrub.wiki - Google Archive API</Card.Title>
          <Card.Text className="card-text">
          A group project made with 2 other cohort mates from General Assembly. The website fetches from a deployed back-end that we made using MongoDB and Heroku. You are able to view tech articles from the NYT for the last 20 or so years.
          </Card.Text>
          <Card.Text className="card-links">
            <a className="card-links" href="https://github.com/verybamboo/google-archive-api">Google API (Backrub) Repo</a>
          </Card.Text>
          <Card.Text className="card-links">
            <a className="card-links" href="backrub.wiki">Backrub Deployment</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}