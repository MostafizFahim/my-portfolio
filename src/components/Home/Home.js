import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <p className="hero-eyebrow">
                Java Developer Intern | Full-Stack Software Engineer
              </p>

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mostafiz Fahim</strong>
              </h1>

              <p className="hero-summary">
                I build secure web platforms, banking applications, and
                AI-assisted systems with Java, Spring Boot, ASP.NET Core,
                React, Angular, and cloud deployment workflows.
              </p>

              <div className="hero-actions">
                <Link className="hero-action hero-action-primary" to="/resume">
                  <AiOutlineDownload /> Resume
                </Link>
                <a
                  className="hero-action"
                  href="https://github.com/MostafizFahim"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub /> GitHub
                </a>
                <a
                  className="hero-action"
                  href="https://www.linkedin.com/in/mostafiz-fahim-a430b1230/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
              </div>

              <div className="hero-proof-strip" aria-label="Portfolio highlights">
                <div>
                  <strong>16</strong>
                  <span>GitHub repos</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Research papers</span>
                </div>
                <div>
                  <strong>2026</strong>
                  <span>Java intern</span>
                </div>
              </div>

              <div className="hero-type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
