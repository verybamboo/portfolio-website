import { Tab,Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css"
import Whackadiglett from "./Whackadiglett";
import FFreactapi from "./FFReactapi";

export default function Projects() {
  return (
    <div id="projects">
      <div id="all-projects-tab" className="all-projects-div">
        <Tabs defaultActiveKey="project-whackadiglett" className="all-projects">
          <Tab eventKey="project-whackadiglett" title="Whackadiglett" className="tab-button">
            <Whackadiglett />
          </Tab>
          <Tab eventKey="project-ffapireact" title="Final Fantasy React API" className="tab-button">
            <FFreactapi />
          </Tab>
          <Tab eventKey="project-backrub" title="Backrub.wiki" className="tab-button">
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}