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
              <b className="purple">AUST</b> with a strong interest in building
              real-world systems across web, blockchain, ML, IoT, and cloud. 🚀
              <br />
              <br />I work mainly with{" "}
              <i>
                <b className="purple">
                  C, C++, Java, Python, C#, JavaScript, PHP, SQL, and Solidity
                </b>
              </i>{" "}
              and enjoy turning ideas into production-ready applications.
              <br />
              <br />
              My key areas of interest are{" "}
              <i>
                <b className="purple">
                  Full-Stack Web Applications, Blockchain-Based Platforms,
                  Machine Learning Solutions,
                </b>{" "}
                and{" "}
                <b className="purple">
                  IoT Systems with ESP32 &amp; Raspberry Pi
                </b>
                .
              </i>
              <br />
              <br />I regularly use modern technologies like{" "}
              <b className="purple">
                React.js, ASP.NET, Node.js, PHP + MySQL, TensorFlow, PyTorch,
                scikit-learn, AWS, Docker, Firebase, and ThingSpeak
              </b>
              , along with blockchain stacks such as{" "}
              <i>
                <b className="purple">
                  Ethereum, Geth, IPFS, and Hyperledger Fabric
                </b>
              </i>{" "}
              to build scalable and research-driven solutions.
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
