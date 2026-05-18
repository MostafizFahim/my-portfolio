import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function MoreInfo() {
  return (
    <Container fluid className="more-info-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="more-info-header">
            <h1 className="project-heading">
              Additional <strong className="purple">Information</strong>
            </h1>
            <p className="more-info-subtitle">
              Education, experience, certifications, activities, and interests
            </p>
          </Col>
        </Row>

        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Experience</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">Java Developer Intern</h5>
                  <span className="info-date">Feb 2026 - Present</span>
                </div>
                <p className="info-institution">
                  Sonali Intellect Limited, Dhaka, Bangladesh
                </p>
                <ul className="info-details">
                  <li>
                    Developing backend services with Java 17, Spring Boot, REST
                    APIs, and relational databases.
                  </li>
                  <li>
                    Contributing to enterprise banking applications with
                    Angular, TypeScript, JWT authentication, and secure API
                    integration.
                  </li>
                  <li>
                    Working with MySQL and MS SQL Server for data modeling,
                    query handling, and transaction-based features.
                  </li>
                  <li>
                    Built a JSP/Servlet Task Management System using MVC,
                    authentication, validation, and database operations.
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    AI Knowledge Base Assistant
                  </h5>
                  <span className="info-date">2026</span>
                </div>
                <p className="info-institution">
                  Full-stack AI project - ASP.NET Core, React, Gemini API
                </p>
                <ul className="info-details">
                  <li>
                    Built a deployed document Q&A system with ASP.NET Core Web
                    API, React, TypeScript, SQLite, JWT, and Gemini API.
                  </li>
                  <li>
                    Implemented lightweight RAG with document chunking,
                    keyword-based retrieval, prompt construction, and
                    context-aware answers.
                  </li>
                  <li>
                    Developed secure APIs for authentication, document
                    management, AI chat, chat history, and Swagger testing.
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    Banking Microservices Application
                  </h5>
                  <span className="info-date">2026</span>
                </div>
                <p className="info-institution">
                  Full-stack banking project - Spring Boot, Angular, PostgreSQL
                </p>
                <ul className="info-details">
                  <li>
                    Developed account management, deposits, withdrawals,
                    transaction history, admin controls, and CUSTOMER/ADMIN
                    role-based access.
                  </li>
                  <li>
                    Added Angular guards, an HTTP interceptor, CSV export, toast
                    notifications, and Chart.js analytics dashboards.
                  </li>
                  <li>
                    Deployed the frontend on Vercel and backend on Railway with
                    production PostgreSQL.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Education</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    Ahsanullah University of Science and Technology (AUST)
                  </h5>
                  <span className="info-date">Dhaka, Bangladesh</span>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <p className="info-detail">
                    Bachelor of Science in Computer Science and Engineering
                  </p>
                  <span className="info-date">Dec 2021 - Dec 2025</span>
                </div>
                <p className="info-meta">
                  <em>CGPA: 3.105 / 4.00</em>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Certifications</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">Web Development Bootcamp</h5>
                  <span className="info-date">2025</span>
                </div>
                <p className="info-institution">FreeCodeCamp & Scrimba</p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">Advanced Graphics Design</h5>
                  <span className="info-date">2016</span>
                </div>
                <p className="info-institution">
                  Universe Computer Training Centre
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">Office Productivity Suite</h5>
                  <span className="info-date">2014</span>
                </div>
                <p className="info-institution">
                  Universe Computer Training Centre
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Beyond Code</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h6 className="info-subtitle">Activities</h6>
                    <ul className="info-details">
                      <li>AUST Computer Club member</li>
                      <li>Open-source contributor</li>
                      <li>Tech event volunteer</li>
                      <li>
                        Inter Software Company Football Tournament participant
                        representing Sonali Intellect
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h6 className="info-subtitle">Interests</h6>
                    <ul className="info-details">
                      <li>Robotics</li>
                      <li>Hackathons</li>
                      <li>Football</li>
                      <li>Competitive programming</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MoreInfo;
