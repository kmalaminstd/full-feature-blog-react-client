import React from 'react'
import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap'

function NewsLetter() {
  return (

    <div className="newsletter d-flex justify-content-center" style={{width: "100%"}}>

        <Card style={{width: "700px"}} className="bg-body-tertiary mt-5 py-3">
            <Card.Title className="text-center border-bottom pb-2">
                Notified with us!
            </Card.Title>

            <Container>
                <InputGroup>
                    <Form.Control placeholder="Your Email Address" aria-label="Your email Address" type="email" aria-describedby='basic addon2' />
                    <Button variant='outline-secondary' id="addon-button2" >
                        Subscribe
                    </Button>
                </InputGroup>
            </Container>
        </Card>

    </div>
  )
}

export default NewsLetter