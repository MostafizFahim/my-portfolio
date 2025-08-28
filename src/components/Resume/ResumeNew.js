import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // PDF path - assuming it's in the public folder
  const pdfPath = process.env.PUBLIC_URL + "/Mostafiz_Fahim_CV.pdf";
  const newDriveLink =
    "https://drive.google.com/file/d/1fUXSxAXqNtKHuPcTV3bH93hYcSj46uJd/view?usp=sharing";

  useEffect(() => {
    setWidth(window.innerWidth);

    // Update width on window resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Action Buttons */}
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
            &nbsp;Download Full CV
          </Button>

          {/* Google Drive CV View Button */}
          <Button
            variant="outline-light"
            href={newDriveLink}
            target="_blank"
            className="styled-btn"
          >
            <AiOutlineDownload />
            &nbsp;View Resume on Google Drive
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
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

        {/* Another Download Button */}
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
            &nbsp;Download Full CV
          </Button>

          {/* Google Drive CV View Button */}
          <Button
            variant="outline-light"
            href={newDriveLink}
            target="_blank"
            className="styled-btn"
          >
            <AiOutlineDownload />
            &nbsp;View Resume on Google Drive
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
