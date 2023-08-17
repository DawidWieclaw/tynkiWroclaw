import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ImPointRight } from "react-icons/im";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Materials() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
      <span className="purple">Pracujemy tylko na markowych produktach takich jak:</span>
            </h1>
      <ul >
            <li>
            <ImPointRight /> Dolina Nidy
            </li>
            <li>
            <ImPointRight /> Knauf
            </li>
            <li>
            <ImPointRight /> MitMau
            </li>
            <li >
            <ImPointRight /> AlPol
            </li>
        </ul>
      </Container>
    </div>
  );
}

export default Materials;
