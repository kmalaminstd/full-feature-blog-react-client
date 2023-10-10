import React from 'react'
import { Card, Container, Row, Col, ListGroup, CardText, Button } from 'react-bootstrap'

function RecentArticle() {
  return (
    <>
        <div className="recent-article mt-5">
            <Container>
                <Card className="p-2">
                    <Card.Header className="bg-body-transparent">
                        <Card.Title>
                            <b>Recent posts</b>
                        </Card.Title>
                    </Card.Header>

                    <Card className="p-2" style={{border: "none"}}>
                        <Row>

                            <Col md={6} sm={12}>
                                <Card.Img src="image/imgtwo.jpg" />
                            </Col>

                            <Col md={6} sm={12}>
                                <ListGroup horizontal style={{justifyContent: "space-around"}} className="border-bottom">
                                    <ListGroup.Item> Admin </ListGroup.Item>
                                    <ListGroup.Item> 10 Jan, 2020 </ListGroup.Item>
                                    <ListGroup.Item> Tag: Health </ListGroup.Item>
                                </ListGroup>

                                <Card.Body>
                                    <Card.Title style={{fontSize: "25px"}}>
                                        <b>My First Blog for this site</b>
                                    </Card.Title>
                                    <CardText>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus suscipit optio fugiat officia sequi nisi quod rerum error provident ea praesentium, nulla ducimus totam quasi obcaecati ipsa laboriosam dolorum quos sapiente dicta animi saepe pariatur ab. Aut aspernatur distinctio sit velit, voluptate nisi quas. Maxime odio deserunt sequi! Enim!
                                    </CardText>

                                    <Button variant="primary">Read Full Text</Button>
                                </Card.Body>
                            </Col>

                        </Row>
                    </Card>
                </Card>
            </Container>
        </div>
    </>
  )
}

export default RecentArticle