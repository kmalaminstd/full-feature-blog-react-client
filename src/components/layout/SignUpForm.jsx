import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

function SignUpForm() {
  return (
    <>
        <Container>
          <Form className="bg-body-tertiary mt-5 sign-up-form pb-3">
              <h3 className="pt-3 text-center">Sign Up</h3>

              <div className="form-fields mt-3">

                <Form.Group className="mt-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" placeholder="Write Username" />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Your Photo:</Form.Label>
                  <Form.Control type="file" accept="*/image" placeholder="Write Username" />
                </Form.Group>

                <Button className="mt-4" variant="warning" style={{width: "100%"}}>
                  Submit
                </Button>

              </div>
          </Form>
        </Container>
    </>
  )
}

export default SignUpForm