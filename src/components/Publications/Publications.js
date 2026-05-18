import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaFilePdf, FaCertificate } from "react-icons/fa";
import Particle from "../Particle";

function Publications() {
  const publications = [
    {
      id: 1,
      title:
        "Predicting Agricultural Land Suitability and Soil Quality: A Deep Learning Approach for Precision Agriculture",
      author: "2nd Author",
      journal: "Springer Conference",
      paperLink: "https://link.springer.com/chapter/10.1007/978-3-032-15764-5_39",
      highlights: [
        "Developed a deep learning-based approach for agricultural land suitability and soil quality prediction.",
        "Focused on AI-driven decision support for precision agriculture and resource optimization.",
      ],
      type: "conference",
      tags: ["Deep Learning", "Agriculture", "Soil Quality"],
    },
    {
      id: 2,
      title:
        "NexTrip: A Semi-Public Blockchain Architecture for Privacy-Preserving Ride-Sharing with RAFT Consensus and IPFS-Enabled Data Storage",
      author: "2nd Author",
      journal: "IEEE ICCIT 2025",
      paperLink: "https://ieeexplore.ieee.org/document/11491718",
      highlights: [
        "Proposed a privacy-preserving semi-public blockchain ride-sharing architecture.",
        "Used RAFT consensus and IPFS-enabled storage for secure distributed trip data.",
      ],
      type: "conference",
      tags: ["Blockchain", "RAFT Consensus", "IPFS", "Ride-Sharing"],
    },
    {
      id: 3,
      title: "Machine Learning for Monkeypox Prediction",
      author: "2nd Author",
      journal: "IEEE QPAIN 2025",
      paperLink: "https://ieeexplore.ieee.org/document/11171682",
      certificate:
        "https://drive.google.com/file/d/1yzk9d6_dsczP13RRMmGaU3bL74Xs-bIQ/view",
      highlights: [
        "Compared CNN, SVM, and Decision Tree models for disease prediction.",
        "Contributed to feature engineering and experimental design for proactive disease surveillance.",
      ],
      type: "conference",
      tags: ["Machine Learning", "CNN", "SVM", "Healthcare AI"],
    },
    {
      id: 4,
      title: "Design of Blockchain Ride-Sharing with IPFS",
      author: "2nd Author",
      journal: "IJAIT Journal",
      paperLink: "https://www.researchgate.net/publication/395545438",
      highlights: [
        "Designed a scalable ride-sharing system architecture using IPFS and RAFT consensus.",
        "Addressed decentralized privacy, storage, and transaction design challenges.",
      ],
      type: "journal",
      tags: ["Blockchain", "IPFS", "RAFT", "DApp"],
    },
  ];

  return (
    <Container fluid className="publication-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="publication-header">
            <h1 className="project-heading">
              My <strong className="purple">Research Publications</strong>
            </h1>
            <p className="publication-subtitle">
              Contributions to blockchain systems, machine learning, and applied
              AI research
            </p>
            <a
              className="paper-link research-profile-link"
              href="https://www.researchgate.net/profile/Mostafiz-Fahim/research"
              target="_blank"
              rel="noopener noreferrer"
            >
              View ResearchGate Profile
            </a>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            {publications.map((pub) => (
              <Card key={pub.id} className="publication-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                    <Badge
                      bg={pub.type === "journal" ? "primary" : "info"}
                      className="publication-type-badge"
                    >
                      {pub.type === "journal"
                        ? "Journal Paper"
                        : "Conference Paper"}
                    </Badge>

                    <div className="d-flex flex-wrap gap-3 publication-links">
                      {pub.paperLink && (
                        <a
                          href={pub.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="paper-link"
                        >
                          <FaFilePdf className="me-1" />
                          View Paper
                        </a>
                      )}
                      {pub.certificate && (
                        <a
                          href={pub.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-link"
                        >
                          <FaCertificate className="me-1" />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>

                  <Card.Title className="publication-title">
                    {pub.title}
                  </Card.Title>

                  <div className="publication-meta mb-3">
                    <span className="publication-author">{pub.author}</span> |{" "}
                    <span className="publication-journal">{pub.journal}</span>
                  </div>

                  {pub.tags && pub.tags.length > 0 && (
                    <div className="publication-tags mb-3">
                      {pub.tags.map((tag, index) => (
                        <span key={index} className="publication-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {pub.highlights && pub.highlights.length > 0 && (
                    <div className="publication-highlights">
                      <h6 className="highlight-title">Key Contributions:</h6>
                      <ul>
                        {pub.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
