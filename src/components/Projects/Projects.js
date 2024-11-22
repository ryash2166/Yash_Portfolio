import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plant from "../../Assets/Projects/plant-garden-01.webp";
import vuexy from "../../Assets/Projects/vuexy.webp";
import ninico from "../../Assets/Projects/Ninico.png";
import food from "../../Assets/Projects/Food-Del.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food-Del Platform"
              description="A delivery website to order food and hangout with friends build with react.js, Node.js, MongoDB and Stripe. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ryash2166/Yash_Food-Del"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Plant Garden"
              description="I worked on eMart Plant Garden, an online platform for purchasing a variety of plants. The website is designed to provide a seamless shopping experience for plant enthusiasts, offering features like plant categorization, detailed product descriptions, and a user-friendly interface. Customers can explore a wide range of plants, from indoor greenery to outdoor garden essentials, with secure checkout options and responsive design for all devices"
              ghLink="https://github.com/ryash2166/Yash_Emart_Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninico}
              isBlog={false}
              title="Ninico E-Commerce"
              description="I developed Ninico, an e-commerce platform specializing in wooden products, using React and Redux. This online shop provides a seamless user experience with features like product browsing, filtering, and a dynamic shopping cart. Redux ensures efficient state management, enabling smooth interactions and real-time updates. The platform is designed to be visually appealing and user-friendly, catering to customers seeking high-quality wooden items."
              ghLink="https://github.com/ryash2166/Yash_Wooden"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vuexy}
              isBlog={false}
              title="Vuexy Dashboard"
              description="I have experience creating web dashboards, including working on the Vuexy Dashboard. I used HTML and CSS to design and customize its user interface, ensuring a clean and responsive layout that aligns with modern design principles. My focus was on maintaining usability while implementing visually appealing styles for an enhanced user experience."
              ghLink="https://github.com/ryash2166/Yash_Vuexy"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
