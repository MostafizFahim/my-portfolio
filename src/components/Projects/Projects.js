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
import buildingPlayground from "../../Assets/Projects/building-playground.png"; // NEW

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I have worked on during my studies and
          research journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* NexTrip Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextrip}
              isBlog={false}
              title="NexTrip: Hybrid Blockchain Ride-Sharing Platform"
              description="Thesis project: a full-stack decentralized ride-sharing system using a hybrid blockchain architecture. The web app is built with React.js, while ride logic is implemented via Ethereum smart contracts for on-chain operations and Hyperledger Fabric for off-chain private processing. Includes a cross-platform mobile app built with React Native, featuring wallet integration, secure authentication, and gas-optimized contract calls."
              ghLink="https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project.git"
              demoLink2="https://github.com/MostafizFahim/NexTrip-Ride-Sharing-Dapp-Mobile.git"
              demoLink2Text="Mobile App"
              technologies={[
                "React.js",
                "React Native (Expo)",
                "Ethereum Smart Contracts",
                "Hyperledger Fabric",
                "Node.js",
              ]}
            />
          </Col>

          {/* Cloud Restaurant Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudRestaurant}
              isBlog={false}
              title="Cloud Restaurant: Full-Stack ASP.NET Application"
              description="A restaurant management system built with ASP.NET, C#, and MS SQL Server. Provides modules for menu, orders, customers, and admin with full CRUD support. Uses Razor pages for a responsive UI and a normalized database schema, ensuring smooth and efficient backend–database integration."
              ghLink="https://github.com/MostafizFahim/Cloud-Restaurant.git"
              technologies={["ASP.NET", "C#", "MS SQL Server", "Razor Pages"]}
            />
          </Col>

          {/* Hospital Management Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management Systems (Java & PHP)"
              description="Two hospital management systems designed for managing patients, appointments, billing, and staff. The desktop version is implemented in Java with a GUI and MySQL backend, while the web version uses PHP, HTML/CSS, and MySQL (managed via phpMyAdmin) to provide browser-based access for hospital staff."
              ghLink="https://github.com/MostafizFahim/Better-Life-Hospital.git"
              demoLink2="https://github.com/MostafizFahim/Hospital-Management-System.git"
              demoLink2Text="PHP Web Version"
              technologies={["Java", "MySQL", "PHP", "HTML/CSS", "phpMyAdmin"]}
            />
          </Col>

          {/* IoT Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="IoT & Embedded Systems Projects"
              description="A collection of embedded systems projects, including an Automated Toll Collection System using Arduino Uno, RFID, and servomotors, and a Smart IoT Healthcare system using ESP32 and Raspberry Pi for real-time ECG, SpO₂, temperature, and humidity monitoring. Integrated Firebase and ThingSpeak dashboards enable remote vital sign analytics."
              ghLink="https://github.com/MostafizFahim/Automated-Toll-Collection-System-Arduino.git"
              demoLink2="https://github.com/MostafizFahim/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection-Using-ESP32.git"
              demoLink2Text="IoT Health Monitor"
              technologies={[
                "Arduino",
                "ESP32",
                "Raspberry Pi",
                "RFID",
                "Sensors (ECG, SpO₂, Temp/Hum)",
                "Firebase",
                "ThingSpeak",
                "MQTT",
              ]}
            />
          </Col>

          {/* Exam Enrollment Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Exam Enrollment System — Android"
              description="A native Android application built with Java to streamline course exam enrollment for students. Implements intuitive screens for course selection and registration workflows, with local data handling for a smooth offline-friendly user experience."
              ghLink="https://github.com/MostafizFahim/Exam-Enrollment-System-Android.git"
              technologies={["Java", "Android Studio", "Android SDK"]}
            />
          </Col>

          {/* 3D Building & Playground Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildingPlayground}
              isBlog={false}
              title="3D Building & Playground — Computer Graphics"
              description="A 3D interactive scene created using Three.js, featuring buildings and playground structures. Includes custom vertex and fragment shaders to experiment with lighting, materials, and real-time rendering for web-based computer graphics."
              ghLink="https://github.com/MostafizFahim/A-building-and-A-playground-Three.js-project.git"
              technologies={[
                "Three.js",
                "JavaScript",
                "Computer Graphics",
                "Custom Shaders",
              ]}
            />
          </Col>

          {/* Zombie Attack Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zombie}
              isBlog={false}
              title="Zombie Attack — 2D Game"
              description="A 2D survival game implemented in C using the igraphics.h library. Features player movement, enemy spawning, scoring, and basic game mechanics that showcase graphics rendering, event handling, and fundamental game development concepts."
              ghLink="https://github.com/MostafizFahim/Zombie-Attack-i-graphics.git"
              technologies={["C", "igraphics.h", "2D Game Development"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
