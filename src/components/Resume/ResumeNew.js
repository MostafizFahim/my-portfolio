import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { experienceData } from "../../data/experience";
import { educationData } from "../../data/education";

function ResumeNew() {
  const pdfPath = "/Mostafiz_Fahim_CV.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            download="Mostafiz_Fahim_CV.pdf"
            className="styled-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download Official CV (PDF)
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", padding: "0 15px" }}>
          <Col md={9}>
            <Card
              style={{
                backgroundColor: "#121215",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#e4e4e7",
                borderRadius: "12px",
                padding: "30px",
                textAlign: "left",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "20px", marginBottom: "25px" }}>
                <h2 style={{ color: "#ffffff", fontWeight: 700, margin: 0 }}>Mostafizur Rahman Fahim</h2>
                <p style={{ color: "#06b6d4", fontSize: "1.1em", marginTop: "5px", marginBottom: "10px" }}>
                  Functional Engineer | Java & Spring Boot | Enterprise Banking Systems
                </p>
                <p style={{ color: "#a1a1aa", fontSize: "0.9em", margin: 0 }}>
                  Email: mostafizfahim@gmail.com | Location: Dhaka, Bangladesh | GitHub: github.com/MostafizFahim
                </p>
              </div>

              {/* Experience */}
              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ color: "#22d3ee", borderBottom: "1px solid rgba(6, 182, 212, 0.2)", paddingBottom: "6px" }}>
                  Professional Experience
                </h4>
                {experienceData.roles.map((role, idx) => (
                  <div key={idx} style={{ marginTop: "15px" }}>
                    <div className="d-flex justify-content-between flex-wrap">
                      <strong style={{ color: "#ffffff", fontSize: "1.05em" }}>{role.title}</strong>
                      <span style={{ color: "#a1a1aa" }}>{role.period}</span>
                    </div>
                    <div style={{ color: "#06b6d4", fontSize: "0.95em", marginBottom: "8px" }}>
                      {experienceData.company} — {experienceData.location}
                    </div>
                    <ul style={{ color: "#d4d4d8", paddingLeft: "20px", fontSize: "0.92em" }}>
                      {role.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} style={{ marginBottom: "4px" }}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ color: "#22d3ee", borderBottom: "1px solid rgba(6, 182, 212, 0.2)", paddingBottom: "6px" }}>
                  Education
                </h4>
                <div style={{ marginTop: "15px" }}>
                  <div className="d-flex justify-content-between flex-wrap">
                    <strong style={{ color: "#ffffff", fontSize: "1.05em" }}>{educationData.degree}</strong>
                    <span style={{ color: "#a1a1aa" }}>{educationData.period}</span>
                  </div>
                  <div style={{ color: "#06b6d4", fontSize: "0.95em" }}>
                    {educationData.institution} — CGPA: {educationData.cgpa}
                  </div>
                  <p style={{ color: "#a1a1aa", fontSize: "0.9em", marginTop: "6px" }}>
                    <strong>Thesis:</strong> {educationData.thesis.title}
                  </p>
                </div>
              </div>

              {/* Core Technologies */}
              <div>
                <h4 style={{ color: "#22d3ee", borderBottom: "1px solid rgba(6, 182, 212, 0.2)", paddingBottom: "6px" }}>
                  Technical Competencies
                </h4>
                <p style={{ color: "#d4d4d8", fontSize: "0.95em", marginTop: "10px", lineHeight: "1.6" }}>
                  <strong>Languages & Frameworks:</strong> Java (17/21), Spring Boot, Spring MVC, C#, ASP.NET Core, Python, TypeScript, Angular, React.<br />
                  <strong>Databases & Persistence:</strong> MySQL, MS SQL Server, PostgreSQL, SQLite, JPA / Hibernate, EF Core.<br />
                  <strong>Core Specializations:</strong> Enterprise Banking Software, REST APIs, Role-Based Access Control, Deep Learning (CNN, ViT), Decentralized Architectures (Ethereum, IPFS).
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            download="Mostafiz_Fahim_CV.pdf"
            className="styled-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download Official CV (PDF)
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
