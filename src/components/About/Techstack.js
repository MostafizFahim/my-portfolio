import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiPhp,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiCplusplus,
  SiCsharp,
  SiSolidity,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiSqlite,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C">
        <FaC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Solidity">
        <SiSolidity />
      </Col>

      {/* Web & Mobile Development */}
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="ASP.NET">
        <CiGlobe />
      </Col>

      {/* AI/ML & Data Science */}
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NumPy">
        <SiNumpy />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MS SQL Server">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQLite">
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
