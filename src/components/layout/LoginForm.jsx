import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function LoginForm() {
  return (
    <>
        <Container>
          <Form className="bg-body-tertiary mt-5 sign-up-form pb-3">
              <h3 className="pt-3 text-center">Log In</h3>

              <div className="form-fields mt-3">

                <Form.Group className="mt-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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

export default LoginForm