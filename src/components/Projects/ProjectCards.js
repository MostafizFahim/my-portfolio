import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Project Thumbnail */}
      <Card.Img variant="top" src={props.imgPath} alt="project-img" />

      <Card.Body>
        {/* Title */}
        <Card.Title>{props.title}</Card.Title>

        {/* Description */}
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>

        {/* Technology Badges */}
        {props.technologies && (
          <div className="tech-badges">
            {props.technologies.map((tech, index) => (
              <Badge
                key={index}
                bg="secondary"
                className="tech-badge"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="project-actions">
          {/* GitHub Main Repo */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> GitHub
            </Button>
          )}

          {/* Optional Second GitHub Repo */}
          {props.ghLink2 && (
            <Button variant="outline-primary" href={props.ghLink2} target="_blank">
              <BsGithub /> {props.ghLink2Text || "GitHub Repo 2"}
            </Button>
          )}

          {/* Demo Link */}
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> {props.demoLinkText || "Demo"}
            </Button>
          )}

          {/* Second Demo Link (Custom Text) */}
          {props.demoLink2 && (
            <Button variant="outline-primary" href={props.demoLink2} target="_blank">
              <CgWebsite /> {props.demoLink2Text || "Demo 2"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
