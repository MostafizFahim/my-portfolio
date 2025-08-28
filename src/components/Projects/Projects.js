import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nextrip from "../../Assets/Projects/nextrip.png";
import cloudRestaurant from "../../Assets/Projects/cloud-restaurant.png";
import hospital from "../../Assets/Projects/hospital.png";
import iot from "../../Assets/Projects/iot.png";
import exam from "../../Assets/Projects/exam.png";
import zombie from "../../Assets/Projects/zombie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on during my studies and
          beyond.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* NexTrip Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextrip}
              isBlog={false}
              title="NexTrip: Hybrid Blockchain Ride-Sharing Platform"
              description="A full-stack decentralized application with React.js frontend and hybrid blockchain backend. Uses Ethereum for public transaction logging and Hyperledger Fabric for private data processing. Includes a cross-platform mobile app built with React Native."
              ghLink="https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project.git"
              demoLink2="https://github.com/MostafizFahim/NexTrip-Ride-Sharing-Dapp-Mobile.git"
              demoLink2Text="Mobile App"
              technologies={[
                "React.js",
                "Node.js",
                "Ethereum",
                "Hyperledger Fabric",
                "React Native",
                "IPFS",
              ]}
            />
          </Col>

          {/* Cloud Restaurant Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudRestaurant}
              isBlog={false}
              title="Cloud Restaurant: Full-Stack Web Application"
              description="A dynamic restaurant management system built with ASP.NET, C#, and MS SQL Server. Features a responsive frontend with Razor pages, normalized database schema, and comprehensive CRUD operations for menu, orders, and user management."
              ghLink="https://github.com/MostafizFahim/Cloud-Restaurant.git"
              technologies={["ASP.NET", "C#", "MS SQL Server", "Razor Pages"]}
            />
          </Col>

          {/* Hospital Management Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Better Life Hospital: Management Systems"
              description="Two full-featured hospital management systems built with different tech stacks. Java version uses JavaFX for UI and MySQL, while PHP version is a web-based solution with PHP, HTML, CSS, and MySQL via phpMyAdmin."
              ghLink="https://github.com/MostafizFahim/Better-Life-Hospital.git"
              demoLink2="https://github.com/MostafizFahim/Hospital-Management-System.git"
              demoLink2Text="PHP Version"
              technologies={["Java", "JavaFX", "PHP", "MySQL", "HTML/CSS"]}
            />
          </Col>

          {/* IoT Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Embedded Systems & IoT Solutions"
              description="Two IoT projects: Automated Toll System using Arduino Uno with RFID sensors, and Smart Patient Health Monitor using ESP32 and Raspberry Pi with multiple sensors for real-time vital signs monitoring."
              ghLink="https://github.com/MostafizFahim/Automated-Toll-Collection-System-Arduino.git"
              technologies={[
                "Arduino",
                "ESP32",
                "Raspberry Pi",
                "RFID",
                "Sensors",
              ]}
            />
          </Col>

          {/* Exam Enrollment Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Exam Enrollment System: Android Application"
              description="A native Android app built with Java in Android Studio to streamline the course exam enrollment process for students. Features intuitive user interfaces and local data persistence for a seamless user experience."
              ghLink="https://github.com/MostafizFahim/Exam-Enrollment-System-Android.git"
              technologies={["Java", "Android SDK", "Android Studio"]}
            />
          </Col>

          {/* Zombie Attack Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zombie}
              isBlog={false}
              title="Zombie Attack: 2D Game"
              description="An interactive 2D game developed using C and the igraphics.h library. Features player movement, scoring system, and enemy AI. Implements core programming concepts including graphics rendering and event handling."
              ghLink="https://github.com/MostafizFahim/Zombie-Attack-i-graphics.git"
              technologies={["C", "igraphics.h", "Game Development"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
