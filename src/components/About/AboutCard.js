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
            I graduated in Computer Science and Engineering from Ahsanullah
            University of Science and Technology (AUST), and I am now building
            enterprise banking features as a Java Developer Intern at Sonali
            Intellect Limited.
            <br />
            I enjoy turning ideas into working software: backend services,
            secure APIs, full-stack products, AI-assisted workflows, and
            research-driven blockchain systems.
            <br />
            <br />
            Outside daily engineering work, I like spending time on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> AI knowledge-base and document Q&A systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Open-source projects and GitHub experiments
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain, IPFS, and privacy-preserving systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Football, hackathons, and competitive programming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build useful systems, learn deeply, and keep improving the craft."
          </p>
          <footer className="blockquote-footer">Mostafiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
