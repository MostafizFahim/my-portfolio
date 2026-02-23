import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiEthereum, SiHyperledger, SiIpfs } from "react-icons/si";
import { FaGlobe, FaAtom } from "react-icons/fa";

function Blockchain() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Ethereum">
        <SiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Hyperledger Fabric">
        <SiHyperledger />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="IPFS">
        <SiIpfs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Web3.js">
        <FaGlobe />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cosmos SDK">
        <FaAtom />
      </Col>
    </Row>
  );
}

export default Blockchain;
