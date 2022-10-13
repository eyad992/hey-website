import React, { useRef } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import '../styles/Signup.scss';



export default function SignUp() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yyixitl', 'template_8vmnaai', form.current, 'RtOToXRoabFp5N8F9')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div className="local-bootstrap">
      <div className="container">
      <h1 className="title mb-3 mt-5">Contact Us</h1>
    <Form ref={form} onSubmit={sendEmail}>
    <FloatingLabel
        controlId="floatingTextarea"
        label="Name"
        className="mb-3"
      >
        <Form.Control as="textarea" name="user_name" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        name="user_email"
      >
        <Form.Control type="email" name="user_email"/>
      </FloatingLabel>
      {/* <FloatingLabel
        controlId="floatingTextarea"
        label="Subject"
        className="mb-3"
      >
        <Form.Control as="textarea" name="user_email" />
      </FloatingLabel> */}
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name="message"
          style={{ height: '200px' }}
          className="mb-3"
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" value="send" className="mb-5">
        Submit
      </Button>
      </Form>
    </div>
    </div>
  
    <Footer />
    </>
  );
}