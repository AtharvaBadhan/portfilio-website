import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
    
      <Row>
        <Col>
        <div className=''>
          <h1 className='font-bold text-center mb-4'>Hello and welcome to my portfolio page!</h1>
          <div className=' d-flex justify-content-center'>
          <p className='fs-4' style={{width :'70%'}}>
          I'm a React.js developer and UI/UX designer, 
          and I specialize in creating websites and web applications that are not only functional but also look great and work well on all devices. 
          I write clean code, and I have a keen eye for design, 
          which allows me to create user-friendly and responsive designs. 
          I'm eager to take on freelance projects and work with you to bring your digital ideas to life. 
          Let's chat and see how I can help you!
          </p>
          </div>
          </div>
          <div className='d-flex justify-content-evenly p-4 m-4'>
          <Button className='fs-5 custom-bg p-3' variant="secondary" href="/schedule-a-call">
            Schedule A Call
          </Button>{' '}
          <Button className='fs-5 custom-bg p-3' variant="secondary" href="/contact-me">
            Contact Me
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
