import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import IMG from '../../Images/IMG_6218.jpeg';
import './information.css';

const ImageInfo = () => {
  return (
    
    <div style={{ marginTop: "100px" }}>
      <Row className="d-flex flex-row-reverse justify-content-center align-items-center mb-4">
        <Col md={3}>
          <img src={IMG} alt="Image" className="img-fluid rounded" />
        </Col>
        <Col md={5} className="m-4">
          <h2>Information Title</h2>
          <p className="text-start">
            I'm Atharva Badhan, a software developer with a passion for turning
            ideas into code. I specialize in web development, I specialize in front-end development,
             and I'm dedicated
            to crafting elegant, user-centric solutions. With a solid background
            in BE Computer Engineering,
            I've spent 3 years immersed in the world of web development and coding.
            My journey as a developer has been a relentless pursuit of excellence, 
            and this portfolio is a testament to that endeavor.
            Explore my work and let's create something amazing together.
          </p>
        </Col>
      </Row>
      <div className="">
      <button type="button" class="custom-bg btn btn-custom btn-lg mt-5 fs-4 shadow-lg">Hire Me</button>
    </div>
    </div>
    
  );
};

export default ImageInfo;
