import React, { useRef } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import '../styles/Signup.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SignUp() {

  const form = useRef();
  const notify = () => toast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qw0ehq6', 'template_m0983mh', form.current, 'K6tmDXCLLT2RZvTdv')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          toast.success('Message Sent Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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
        <Form.Control as="textarea" name="user_name" placeholder="placeholder"
/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        name="user_email"
      >
        <Form.Control type="email" name="user_email" placeholder="placeholder"
/>
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
          placeholder="placeholder"
          name="message"
          style={{ height: '200px' }}
          className="mb-3"
        />
      </FloatingLabel>
      <Button onClick={notify} variant="primary" type="submit" value="send" className="mb-5">
        Submit
      </Button>
      </Form>

    </div>
    </div>
    <ToastContainer closeButton={false} />

    <Footer />
    </>
  );
}