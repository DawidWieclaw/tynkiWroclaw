import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Nasza firma wynokuje prace budowlane na terenie Wrocławia i okolic do 60km. Wykonujemy lekkie tynki gipsowe oraz cementowo-wapienne za pomocą agregatu tynkarskiego na ścianach oraz stropach wewnątrz jaki i zewnątrz budynku. Nie ma potrzeby wykonywania kolejnych warstw gładzi na ścianach i sufitach. Jeśteśmy w stanie zapewnić wykonanie tynków, w zależności od rodzaju i wilgotności podłoża. Nasza oferta to też spoinowanie połączeń płyt gipsowo-kartonowych bez konieczności stosowania taśm zbrojących. Jesteśmy w stanie zapewnić szybkie i sprawne malowanie powierzchni z posród szerokiej palety kolorów.
Posiadamy wieloletnie doświadczenie w branży budowlanej po przez wysoką jakość, profesjonalny sprzęt i wiedzę techniczno - budowlaną , zapewniając firmie duże uznanie klientów.

          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
          Wycena, doractwo teczniczne, dojazd - GRATIS !!!{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
