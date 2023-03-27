import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../../assets/logo2.jpg"
import backImg from "../../assets/background.jpg"
import "./SignIn.scss"
const SignIn = () => {
  return (
    <div className="signIn" style={{backgroundImage : `url(${backImg})`}}>
<div className="container" >
        <div className='form-container' >
        <Form className='form'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
        </div>

    </div>
    </div>
    
    
  )
}

export default SignIn