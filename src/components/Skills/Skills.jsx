import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const skillsData = [
 
  { image: "mysql.png", name: "MySQL" },
  { image: "js.png", name: "JavaScript" },
  { image: "git.png", name: "Git" },
  { image: "github.png", name: "Github" },
  { image: "react.jpg", name: "React" },
  { image: "css.png", name: "CSS" },
  { image: "html.png", name: "HTML" },
  

];

function Skills() {
  return (
    <Container>
      <div id="skills">
        <h1 id="subtitle">Skills</h1>
        <Row xs={1} md={3} lg={4} className="g-4">
          {skillsData.map((skill, index) => (
            <Col key={index}>
              <Card className="skill-card">
                <Card.Body>
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Skills;
