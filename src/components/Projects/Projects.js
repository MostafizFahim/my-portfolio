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
import buildingPlayground from "../../Assets/Projects/building-playground.png";
import bankingDashboard from "../../Assets/Projects/bankingDashboard.png";
import keystone from "../../Assets/Projects/keystone.png";
import aiKnowledgeBaseDashboard from "../../Assets/Projects/ai-knowledge-base-dashboard.svg";
import projectImg from "../../Assets/Projects/project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Selected work from my CV and GitHub, including deployed full-stack,
          AI, banking, blockchain, mobile, and embedded systems projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiKnowledgeBaseDashboard}
              isBlog={false}
              title="AI Knowledge Base Assistant"
              description="A deployed document Q&A platform with secure auth, PDF/CSV uploads, chat history, and Gemini-powered answers. Uses lightweight RAG with document chunking, keyword retrieval, and context-aware prompt construction."
              ghLink="https://github.com/MostafizFahim/ai-knowledge-base-assistant"
              demoLink="https://ai-knowledge-base-assistant-nu.vercel.app"
              demoLink2="https://ai-knowledge-base-assistant-production.up.railway.app/health"
              demoLink2Text="API Health"
              technologies={[
                "ASP.NET Core",
                "React",
                "TypeScript",
                "Gemini API",
                "JWT",
                "SQLite",
                "RAG",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankingDashboard}
              isBlog={false}
              title="Banking Microservices Application"
              description="A deployed banking app with account management, deposits, withdrawals, transaction history, CSV export, and analytics dashboards. Supports JWT authentication and role-based access for customer and admin workflows."
              ghLink="https://github.com/MostafizFahim/banking-microservices"
              demoLink="https://banking-microservices-eta.vercel.app/login"
              demoLink2="https://banking-api-production-247d.up.railway.app"
              demoLink2Text="Backend API"
              technologies={[
                "Java 21",
                "Spring Boot",
                "Spring Security",
                "Angular 21",
                "TypeScript",
                "PostgreSQL",
                "JWT",
                "Chart.js",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextrip}
              isBlog={false}
              title="NexTrip: Hybrid Blockchain Ride-Sharing Platform"
              description="Thesis project for a decentralized ride-sharing platform with web, mobile, and blockchain layers. Combines Ethereum smart contracts, Hyperledger Fabric, and privacy-preserving storage concepts."
              ghLink="https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project.git"
              demoLink2="https://github.com/MostafizFahim/NexTrip-Ride-Sharing-Dapp-Mobile.git"
              demoLink2Text="Mobile App"
              technologies={[
                "React.js",
                "React Native",
                "Ethereum",
                "Hyperledger Fabric",
                "Node.js",
                "IPFS",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudRestaurant}
              isBlog={false}
              title="Cloud Restaurant Management System"
              description="Restaurant management software built with ASP.NET Core, C#, MS SQL Server, Razor Pages, and admin dashboard features. Covers menu, order, customer, and admin workflows with CRUD operations and a normalized database schema."
              ghLink="https://github.com/MostafizFahim/Cloud-Restaurant.git"
              technologies={["ASP.NET Core", "C#", "MS SQL Server", "Razor Pages"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keystone}
              isBlog={false}
              title="Keystone Education Consultancy"
              description="A professional Next.js website for a Bangladesh-based education consultancy. It presents study abroad services, destination pages, a 6-step process guide, student success metrics, and contact details in a responsive experience."
              ghLink="https://github.com/MostafizFahim/keystone-education"
              demoLink="https://keystone-education.vercel.app/"
              technologies={["Next.js", "React", "JavaScript", "Tailwind CSS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              isBlog={false}
              title="Shopping App - Kotlin & Firebase"
              description="Android shopping application built with Kotlin and Firebase. It expands my mobile development work beyond Java Android projects into modern Kotlin-based app development and cloud-backed data workflows."
              ghLink="https://github.com/MostafizFahim/Shopping-App-Android-Studio-Kotlin-Firebase"
              technologies={["Kotlin", "Android Studio", "Firebase", "Mobile App"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management Systems"
              description="Two hospital management systems for patients, appointments, billing, and staff. The desktop version uses Java and MySQL, while the web version uses PHP, HTML/CSS, and MySQL through phpMyAdmin."
              ghLink="https://github.com/MostafizFahim/Better-Life-Hospital.git"
              demoLink2="https://github.com/MostafizFahim/Hospital-Management-System.git"
              demoLink2Text="PHP Web Version"
              technologies={["Java", "MySQL", "PHP", "HTML/CSS", "phpMyAdmin"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="IoT & Embedded Systems Projects"
              description="Embedded systems work including an automated toll collection system using Arduino Uno, RFID, and servomotors, plus a smart IoT healthcare system using ESP32 and Raspberry Pi for ECG, SpO2, temperature, humidity, and remote monitoring dashboards."
              ghLink="https://github.com/MostafizFahim/Automated-Toll-Collection-System-Arduino.git"
              demoLink2="https://github.com/MostafizFahim/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection-Using-ESP32.git"
              demoLink2Text="IoT Health Monitor"
              technologies={[
                "Arduino",
                "ESP32",
                "Raspberry Pi",
                "RFID",
                "Sensors",
                "Firebase",
                "ThingSpeak",
                "MQTT",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Exam Enrollment System - Android"
              description="A native Android application built with Java to streamline course exam enrollment for students. It implements clear course selection and registration workflows with local data handling."
              ghLink="https://github.com/MostafizFahim/Exam-Enrollment-System-Android.git"
              technologies={["Java", "Android Studio", "Android SDK"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildingPlayground}
              isBlog={false}
              title="3D Building & Playground - Computer Graphics"
              description="A Three.js interactive graphics scene featuring buildings and playground structures. Includes custom vertex and fragment shader experimentation for lighting, materials, and real-time rendering."
              ghLink="https://github.com/MostafizFahim/A-building-and-A-playground-Three.js-project.git"
              technologies={["Three.js", "JavaScript", "Computer Graphics", "Shaders"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zombie}
              isBlog={false}
              title="Zombie Attack - 2D Game"
              description="A 2D survival game implemented in C using the igraphics.h library. Features player movement, enemy spawning, scoring, event handling, and basic graphics rendering."
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
