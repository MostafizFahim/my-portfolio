import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaFilePdf, FaCertificate } from "react-icons/fa";
import Particle from "../Particle";

function Publications() {
  const publications = [
    {
      id: 1,
      title:
        "Design and Development of a Privacy-Preserving Semi-Public Blockchain-Based Ride-Sharing System using RAFT consensus with IPFS-Enabled Secure Distributed Storage",
      author: "2nd Author",
      journal:
        "International Journal of Advanced Information Technology (IJAIT)",
      highlights: [
        "Architected a hybrid blockchain solution for ride-sharing, implementing a RAFT consensus mechanism for the private network to ensure fault tolerance and leader election.",
        "Integrated IPFS for decentralized file storage to securely manage user data and transaction records, enhancing privacy and scalability beyond traditional databases.",
        "The proposed system addressed key challenges in DApps: mitigating high gas fees, ensuring data privacy, and maintaining transaction efficiency.",
      ],
      type: "journal",
      tags: ["Blockchain", "RAFT Consensus", "IPFS", "DApp"],
    },
    {
      id: 2,
      title:
        "A Privacy-Preserving Semi-Public Blockchain-Based Ride-Sharing Platform with Secure Distributed Data Storage Using IPFS",
      author: "2nd Author",
      journal: "2025 IEEE QPAIN Conference",
      certificate:
        "https://drive.google.com/file/d/1UFEXol0cDzxzOc5FATqNMQHQaW6SVDrd/view",
      highlights: [
        "Presented the core blockchain architecture of the NexTrip project, focusing on the smart contract design for ride matching and payment settlement on the Ethereum testnet.",
      ],
      type: "conference",
      tags: ["Blockchain", "Ethereum", "Smart Contracts"],
    },
    {
      id: 3,
      title:
        "From Data to Diagnosis: Leveraging Machine Learning for Intelligent Monkeypox Prediction and Surveillance",
      author: "2nd Author",
      journal: "2025 IEEE QPAIN Conference",
      certificate:
        "https://drive.google.com/file/d/1yzk9d6_dsczP13RRMmGaU3bL74Xs-bIQ/view",
      highlights: [
        "Developed and compared multiple machine learning models (e.g., CNN, SVM) on clinical datasets for early detection of Monkeypox, achieving high predictive accuracy.",
        "Contributed to feature engineering and analysis, demonstrating the application of AI for proactive public health surveillance.",
      ],
      type: "conference",
      tags: ["Machine Learning", "CNN", "SVM", "Healthcare"],
    },
    {
      id: 4,
      title:
        "NexTrip: A Semi-Public Blockchain Architecture for Privacy-Preserving Ride-Sharing with RAFT Consensus and IPFS-Enabled Data Storage",
      author: "2nd Author",
      journal:
        "International Conference on Multidisciplinary Computer Science, Electrical, Business & Literature (ICMCEL)",
      highlights: [],
      type: "conference",
      tags: ["Blockchain", "Privacy", "RAFT", "IPFS"],
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
              Contributions to blockchain technology and machine learning
              research
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
