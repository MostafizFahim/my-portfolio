import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

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
