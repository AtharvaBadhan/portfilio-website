import React from "react";
import { Form, Button } from "react-bootstrap";
import "./contact.css"

function ContactMe() {
  return (
    <div className="m-5 d-flex flex-column align-items-center">
      <h2>Contact Me</h2>
      <Form
        className="m-4 d-flex flex-column align-items-center custom-bg1 rounded-5"
        style={{ width: "50%" }}
      >
        <Form.Control
          type="text"
          placeholder="Enter your name"
          style={{ width: "40%" }}
          className="my-4"
        />

        <Form.Control
          type="email"
          placeholder="Enter your email"
          style={{ width: "40%" }}
          className="mb-4"
        />

        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Tell me what's on your mind"
          style={{ width: "40%" }}
          className="mb-4"
        />

        <Button variant="secondary" type="submit" className="custom-bg mb-4">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactMe;
