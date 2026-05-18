import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Computer Science and Engineering graduate from{" "}
              <b className="purple">AUST</b> and currently a{" "}
              <b className="purple">Java Developer Intern at Sonali Intellect Limited</b>.
              <br />
              <br />I work across{" "}
              <i>
                <b className="purple">
                  Java, Spring Boot, ASP.NET Core, C#, TypeScript, React,
                  Angular, SQL, and cloud deployments
                </b>
              </i>{" "}
              to build practical applications with clean API design and secure
              authentication.
              <br />
              <br />
              My recent work includes a deployed{" "}
              <b className="purple">AI Knowledge Base Assistant</b> with Gemini
              API, JWT, SQLite, document chunking, and lightweight RAG, plus a{" "}
              <b className="purple">banking application</b> with Spring Boot,
              Angular, RBAC, PostgreSQL, charts, and CSV export.
              <br />
              <br />I also continue research and project work in{" "}
              <i>
                <b className="purple">
                  blockchain systems, IPFS-backed storage, machine learning,
                  IoT, and applied AI
                </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MostafizFahim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/mostafizurrrahman.mrf/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mostafiz-fahim-a430b1230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mostafiz_fahim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
