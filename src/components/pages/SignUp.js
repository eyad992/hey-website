import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import '../styles/Signup.scss';




export default function SignUp() {
  return (
    <>
      <div className="local-bootstrap">
      <div className="container">
      <h1 className="title mb-3 mt-5">Contact Us</h1>
     {/* <Form className="ml-5">
      <Form.Control type="text" placeholder="Normal text" />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form> */}
    <Form>
    <FloatingLabel
        controlId="floatingTextarea"
        label="Name"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Subject"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
          className="mb-3"
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" className="mb-5">
        Submit
      </Button>
      </Form>
    </div>
    </div>
  
    <Footer />
    </>
  );
}