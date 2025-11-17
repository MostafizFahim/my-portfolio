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
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Technology Badges */}
        {props.technologies && (
          <div className="tech-badges mb-3">
            {props.technologies.map((tech, index) => (
              <Badge
                key={index}
                bg="secondary"
                pill
                className="me-1 mb-1 tech-badge"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* GitHub Main Repo */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Optional Second GitHub Repo */}
        {props.ghLink2 && (
          <Button
            variant="outline-primary"
            href={props.ghLink2}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp; {props.ghLink2Text || "GitHub Repo 2"}
          </Button>
        )}

        {/* Demo Link */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {props.demoLinkText || "Demo"}
          </Button>
        )}

        {/* Second Demo Link (Custom Text) */}
        {props.demoLink2 && (
          <Button
            variant="outline-primary"
            href={props.demoLink2}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {props.demoLink2Text || "Demo 2"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
