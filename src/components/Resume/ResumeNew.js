import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageNumber] = useState(1);
  const pdfPath = process.env.PUBLIC_URL + "/Mostafiz_Fahim_CV.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            download
            className="styled-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download Latest CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdfPath}
            loading={<div style={{ color: "white" }}>Loading resume...</div>}
            error={<div style={{ color: "white" }}>Failed to load resume.</div>}
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.0 : 0.6}
              width={width > 786 ? width * 0.6 : width * 0.9}
            />
          </Document>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            download
            className="styled-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download Latest CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
