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
              Education, experience, certifications, and activities
            </p>
          </Col>
        </Row>

        {/* Education Section */}
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
                  <span className="info-date">Dec 2021 – Dec 2025</span>
                </div>
                <p className="info-meta">
                  <em>CGPA: 3.10/4.00</em>
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">BAF Shaheen College</h5>
                  <span className="info-date">Dhaka, Bangladesh</span>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <p className="info-detail">
                    Higher Secondary Certificate (HSC), Science
                  </p>
                  <span className="info-date">2018 – 2020</span>
                </div>
                <p className="info-meta">
                  <em>GPA: 5.00/5.00</em>
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    Rani Bilashmony Govt. Boys&apos; High School
                  </h5>
                  <span className="info-date">Gazipur, Bangladesh</span>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <p className="info-detail">
                    Secondary School Certificate (SSC), Science
                  </p>
                  <span className="info-date">2016 – 2018</span>
                </div>
                <p className="info-meta">
                  <em>GPA: 5.00/5.00 (Scholarship)</em>
                </p>
                <div className="d-flex justify-content-between flex-wrap mt-2">
                  <p className="info-detail">Junior School Certificate (JSC)</p>
                  <span className="info-date">2016</span>
                </div>
                <p className="info-meta">
                  <em>GPA: 5.00/5.00 (Scholarship)</em>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Experience</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    Peer Tutor &amp; Academic Assistant
                  </h5>
                  <span className="info-date">2021–2025</span>
                </div>
                <p className="info-institution">Department of CSE, AUST</p>
                <ul className="info-details">
                  <li>
                    Tutored students in{" "}
                    <strong>Data Structures, Algorithms, and Java</strong>.
                  </li>
                  <li>
                    Helped students debug code and strengthen core programming
                    and problem-solving concepts.
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">IT Support Volunteer</h5>
                  <span className="info-date">2022–2023</span>
                </div>
                <p className="info-institution">AUST Computer Club</p>
                <ul className="info-details">
                  <li>
                    Provided tech support during university events, workshops,
                    and seminars.
                  </li>
                  <li>
                    Configured computers, networking devices, and AV systems for
                    smooth event operation.
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    Freelance Web Developer &amp; Networking Technician
                  </h5>
                  <span className="info-date">2023 – Present</span>
                </div>
                <p className="info-institution">Freelance / Client Projects</p>
                <ul className="info-details">
                  <li>
                    Developed custom <strong>PHP web applications</strong> for
                    local businesses.
                  </li>
                  <li>
                    Designed and documented <strong>network topologies</strong>{" "}
                    using Cisco Packet Tracer.
                  </li>
                  <li>
                    Provided basic IT consultation and troubleshooting for
                    community clients.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Certifications & Training Section */}
        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Certifications &amp; Training</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">Web Development Bootcamp</h5>
                  <span className="info-date">2025</span>
                </div>
                <p className="info-institution">FreeCodeCamp &amp; Scrimba</p>
                <p className="info-meta">
                  <em>JavaScript, React.js, modern frontend development.</em>
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">Advanced Graphics Design</h5>
                  <span className="info-date">2016</span>
                </div>
                <p className="info-institution">
                  Universe Computer Training Centre, Gazipur
                </p>
                <p className="info-meta">
                  <em>Adobe Photoshop, Adobe Illustrator.</em>
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
                  Universe Computer Training Centre, Gazipur
                </p>
                <p className="info-meta">
                  <em>MS Word, MS Excel, MS PowerPoint, touch typing.</em>
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    AWS Cloud Foundations (Training)
                  </h5>
                  <span className="info-date">2024</span>
                </div>
                <p className="info-institution">Amazon Web Services</p>
                <p className="info-meta">
                  <em>Cloud fundamentals, AWS EC2, S3, IAM basics.</em>
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">
                    Cisco Networking Essentials (Training)
                  </h5>
                  <span className="info-date">2023</span>
                </div>
                <p className="info-institution">Cisco Networking Academy</p>
                <p className="info-meta">
                  <em>
                    Networking basics, routing &amp; switching, subnetting.
                  </em>
                </p>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5 className="info-item-title">MATLAB Onramp</h5>
                  <span className="info-date">2024</span>
                </div>
                <p className="info-institution">MathWorks</p>
                <p className="info-meta">
                  <em>MATLAB basics, scripting, and data visualization.</em>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Activities Section */}
        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Activities</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <ul className="info-details">
                  <li>
                    Active member of the <strong>AUST Computer Club</strong>;
                    participated in workshops and tech seminars.
                  </li>
                  <li>
                    Volunteered in university tech events and programming
                    competitions.
                  </li>
                  <li>
                    Regular participant in inter-department football
                    tournaments.
                  </li>
                  <li>
                    Contributed to open-source projects on GitHub in spare time.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Information Section */}
        <Row className="info-section">
          <Col md={12}>
            <h2 className="info-section-title">
              <strong className="purple">Additional Information</strong>
            </h2>

            <Card className="info-card">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h6 className="info-subtitle">Languages:</h6>
                    <ul className="info-details">
                      <li>Bangla (Native)</li>
                      <li>English (Professional)</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h6 className="info-subtitle">Interests:</h6>
                    <ul className="info-details">
                      <li>Open-source</li>
                      <li>Hackathons</li>
                      <li>Robotics</li>
                      <li>Football</li>
                      <li>Cricket</li>
                    </ul>
                  </Col>
                </Row>
                {/* <div className="mt-3">
                  <h6 className="info-subtitle">References:</h6>
                  <p className="info-meta">Available upon request</p>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MoreInfo;
