import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Technology badges */}
        {props.technologies && (
          <div className="tech-badges mb-3">
            {props.technologies.map((tech, index) => (
              <Badge key={index} bg="secondary" className="me-1 mb-1">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* Second demo link for projects with multiple repos */}
        {props.demoLink2 && (
          <Button
            variant="outline-primary"
            href={props.demoLink2}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp;
            {props.demoLink2Text || "Repo 2"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
