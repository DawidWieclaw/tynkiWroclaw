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

function Contact() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
      <span className="purple">Kontakt</span>
            </h1>
            Kontakt z biurem od godziny 9:00 do 20:00 w dniach od poniedziałku do soboty. 
Nasza firma wynokuje prace budowlane na terenie Wrocławia i okolic do 60km.
<br></br>
<br></br>
      <ul >
            <li>
            <span className="purple"><h1 style={{ fontSize: "1.5em", paddingBottom: "20px"}}> ZBIGNIEW BŁASZCZYK </h1> </span>
            </li>
            <li>
            Kiełczów 
            </li>
            <li>
            ul. Cyprysowa 4 B 
            </li>
            <li >
            tel: 791 259 095 
            </li>
            <li>
            REGON: 931 065 409 
            </li>
            <li>
            NIP: 898 120 18 47
            </li>
            <li>
            </li>
            <li>
            <span className="purple"><h1 style={{ fontSize: "1.5em", paddingBottom: "20px"}}> ZBIGNIEW ADAMCZYK  </h1> </span>
            </li>
            <li>
            WROCŁAW 
            </li>
            <li>
            ul. Grabiszyńska 8/22 
            </li>
            <li >
            tel: 691 671 403  
            </li>
            <li>
            REGON: 021 428 180 
            </li>
            <li>
            NIP: 788 121 35 14
            </li>
        </ul>
      </Container>
    </div>
  );
}

export default Contact;
