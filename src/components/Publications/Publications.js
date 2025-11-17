import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaFilePdf, FaCertificate } from "react-icons/fa";
import Particle from "../Particle";

function Publications() {
  const publications = [
    {
      id: 1,
      title:
        "Design and Development of a Privacy-Preserving Semi-Public Blockchain-Based Ride-Sharing System Using RAFT Consensus and IPFS Storage",
      author: "2nd Author",
      journal:
        "International Journal of Advanced Information Technology (IJAIT)",
      paperLink:
        "https://www.researchgate.net/publication/395545438_DESIGN_AND_DEVELOPMENT_OF_A_PRIVACY-PRESERVING_SEMI-PUBLIC_BLOCKCHAIN-BASED_RIDE-SHARING_SYSTEM_USING_RAFT_CONSENSUS_WITH_IPFS-ENABLED_SECURE_DISTRIBUTED_STORAGE",
      highlights: [
        "Proposed a hybrid blockchain architecture integrating RAFT consensus for semi-public ride-sharing networks.",
        "Used IPFS-based secure distributed storage to manage trip, user, and transaction data in a privacy-preserving way.",
        "Addressed key DApp challenges including high gas fees, privacy, and decentralized data sharing efficiency.",
      ],
      type: "journal",
      tags: ["Blockchain", "RAFT Consensus", "IPFS", "Ride-Sharing"],
    },
    {
      id: 2,
      title:
        "A Privacy-Preserving Semi-Public Blockchain Ride-Sharing Platform with IPFS Storage",
      author: "2nd Author",
      journal: "2025 IEEE QPAIN Conference",
      paperLink: "https://ieeexplore.ieee.org/document/11171631",
      certificate:
        "https://drive.google.com/file/d/1UFEXol0cDzxzOc5FATqNMQHQaW6SVDrd/view",
      highlights: [
        "Presented the NexTrip architecture focusing on smart contract–based ride matching and secure payment settlement.",
        "Demonstrated how IPFS-backed storage and semi-public blockchain design improve privacy for riders and drivers.",
      ],
      type: "conference",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "IPFS"],
    },
    {
      id: 3,
      title:
        "From Data to Diagnosis: ML for Monkeypox Prediction and Surveillance",
      author: "2nd Author",
      journal: "2025 IEEE QPAIN Conference",
      paperLink: "https://ieeexplore.ieee.org/document/11171682",
      certificate:
        "https://drive.google.com/file/d/1yzk9d6_dsczP13RRMmGaU3bL74Xs-bIQ/view",
      highlights: [
        "Evaluated multiple ML models such as CNN, SVM, and decision trees for clinical Monkeypox prediction.",
        "Contributed to feature engineering and experimental design for proactive disease surveillance.",
      ],
      type: "conference",
      tags: ["Machine Learning", "CNN", "SVM", "Healthcare AI"],
    },
    {
      id: 4,
      title: "Predicting Agricultural Land Suitability Using Deep Learning",
      author: "2nd Author",
      journal: "BIM 2025 Conference",
      highlights: [
        "Designed a deep learning model that combines soil, climate, and geospatial features for land suitability prediction.",
        "Showcased the use of AI-driven decision support for precision agriculture and resource optimization.",
      ],
      type: "conference",
      tags: ["Deep Learning", "Agriculture", "Geospatial Data"],
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
