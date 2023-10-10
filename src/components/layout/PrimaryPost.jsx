import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'

function PrimaryPost() {
  return (
    <>
        <Container fluid className="mt-5">
            <Row>
                <Col lg={6} md={6} sm={12}>

                    <Card className="text-white primary-card-one" style={{maxWidth: "100%", height:"400px"}}>
                        <Card.Img src="image/imgone.png" style={{maxWidth: "100%", height: "100%", objectFit: "cover"}} />
                        
                            <Card.ImgOverlay>
                                <Card.Title>
                                    This is the first Title
                                </Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam esse dolore harum magni adipisci? Ex nulla quidem officia ad!
                                </Card.Text>
                            </Card.ImgOverlay>
                        
                    </Card>

                </Col>
                <Col lg={6} md={6} sm={12}>
                    <CardGroup>

                        <Row>

                            <Col md={12}>

                                <Row>

                                    <Col md={6} sm={12}>
                                        <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src="image/imgtwo.jpg" />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Card Title
                                                </Card.Title>
                                                <Card.Text>
                                                    Card Text
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>

                                    <Col md={6} sm={12}>

                                    <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src="image/imgtwo.jpg" />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Card Title
                                                </Card.Title>
                                                <Card.Text>
                                                    Card Text
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>

                                    </Col>

                                </Row>

                            </Col>

                            <Col md={12}>
                                <Row>

                                    <Col md={6} sm={12}>
                                    <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src="image/imgtwo.jpg" />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Card Title
                                                </Card.Title>
                                                <Card.Text>
                                                    Card Text
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>

                                    <Col md={6} sm={12}>
                                    <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src="image/imgtwo.jpg" />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Card Title
                                                </Card.Title>
                                                <Card.Text>
                                                    Card Text
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>

                                </Row>
                            </Col>

                        </Row>

                    </CardGroup>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PrimaryPost