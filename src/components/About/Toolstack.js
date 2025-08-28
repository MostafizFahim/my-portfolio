import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiVisualstudio, DiAndroid } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiAzuredevops,
  SiArduino,
  SiRaspberrypi,
  SiLatex,
} from "react-icons/si";
import { FaCalculator } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Tools & Software */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="icon-tooltip">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="icon-tooltip">VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <span className="icon-tooltip">Android Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <span className="icon-tooltip">Visual Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="icon-tooltip">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCalculator />
        <span className="icon-tooltip">MATLAB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
        <span className="icon-tooltip">LaTeX</span>
      </Col>

      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <span className="icon-tooltip">Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <span className="icon-tooltip">AWS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <span className="icon-tooltip">Google Cloud</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <span className="icon-tooltip">Azure DevOps</span>
      </Col>

      {/* IoT & Embedded Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <span className="icon-tooltip">Arduino</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
        <span className="icon-tooltip">Raspberry Pi</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
