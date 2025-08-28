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
              I'm a passionate software developer with expertise in full-stack
              development and blockchain technologies. I enjoy creating
              innovative solutions to complex problems. 🤖
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, Java, and Solidity.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">Web Applications, Blockchain Systems </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Cloud Technologies and IoT.</b>
              </i>
              <br />
              <br />I leverage modern technologies like{" "}
              <b className="purple">React.js, Node.js,</b> and
              <i>
                <b className="purple"> Blockchain frameworks</b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> Ethereum and Hyperledger Fabric</b>
              </i>
              &nbsp; to build scalable solutions.
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/mostafizurrrahman.mrf/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mostafiz-fahim-a430b1230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
