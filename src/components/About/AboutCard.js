import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Mostafizur Rahman Fahim</span> from{" "}
            <span className="purple">Dhaka, Bangladesh.</span>
            <br />
            I am a Computer Science & Engineering graduate from Ahsanullah
            University of Science and Technology (AUST).
            <br />
            I am passionate about full-stack development, blockchain systems,
            machine learning, IoT, and cloud technologies—building solutions
            that combine software, hardware, and research.
            <br />
            <br />
            Apart from coding, here are a few activities I love doing!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Open-source contributions & GitHub projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring IoT, robotics & embedded systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in tech workshops & university
              events
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football and cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build solutions that create real impact and inspire innovation."
          </p>
          <footer className="blockquote-footer">Mostafiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
