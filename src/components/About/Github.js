import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";

function Github() {
  const [selectedContributions, setSelectedContributions] = useState(null);

  // New color combination - deep purple with indigo accents
  const theme = {
    light: ["#faf5ff", "#e9d8fd", "#d6bcfa", "#b794f4", "#805ad5"],
    dark: ["#faf5ff", "#e9d8fd", "#d6bcfa", "#b794f4", "#805ad5"],
  };

  return (
    <Container fluid className="github-section">
      <Row style={{ justifyContent: "center", padding: "20px 0" }}>
        <Col md={12} className="github-header">
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            My Coding <strong className="purple">Journey</strong>
          </h1>
          <p className="github-subtitle">
            Tracking my progress and contributions on GitHub
          </p>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col md={10}>
          <div className="github-calendar-container">
            <GitHubCalendar
              username="mostafizfahim"
              blockSize={14}
              blockMargin={4}
              theme={theme}
              fontSize={14}
              onSelect={(contributions) =>
                setSelectedContributions(contributions)
              }
              style={{ margin: "0 auto" }}
            />
          </div>
        </Col>
      </Row>

      {selectedContributions && (
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={8} className="contribution-details">
            <p className="contribution-text">
              <strong>{selectedContributions.count}</strong> contribution
              {selectedContributions.count !== 1 ? "s" : ""} on{" "}
              {selectedContributions.date}
            </p>
          </Col>
        </Row>
      )}

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col md={10} className="github-stats">
          <div className="stat-card">
            <img
              id="github-streak-stats"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=mostafizfahim&theme=nightowl&hide_border=true&background=FFFFFF00&ring=9370f0&fire=9370f0&currStreakLabel=9370f0`}
              alt="GitHub Streak Stats"
              className="github-stat-img"
            />
          </div>
          <div className="stat-card">
            <img
              id="github-top-langs"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mostafizfahim&layout=compact&theme=nightowl&hide_border=true&bg_color=FFFFFF00&title_color=9370f0&text_color=4a4a4a`}
              alt="GitHub Top Languages"
              className="github-stat-img"
            />
          </div>
          <div className="stat-card">
            <img
              id="github-stats-card"
              src={`https://github-readme-stats.vercel.app/api?username=mostafizfahim&show_icons=true&theme=nightowl&hide_border=true&bg_color=FFFFFF00&title_color=9370f0&icon_color=9370f0&text_color=4a4a4a`}
              alt="GitHub Stats"
              className="github-stat-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Github;
