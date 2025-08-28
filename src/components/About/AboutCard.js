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
            <span className="purple">Mostafizur Rahman Fahim </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am a recent Computer Science & Engineering graduate from
            Ahsanullah University of Science and Technology (AUST).
            <br />
            I am passionate about full-stack development, blockchain
            technologies, and building innovative software solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Open-source development
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football and cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring robotics and IoT projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build innovative solutions that make a difference in people's
            lives!"{" "}
          </p>
          <footer className="blockquote-footer">Mostafiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
