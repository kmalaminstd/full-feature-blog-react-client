import React, { useContext } from 'react'
import { Card, Container, Row, Col, ListGroup, CardText, Button } from 'react-bootstrap'
import { BlogContext } from '../../Context/Blog.context'
import { useNavigate } from 'react-router-dom'
import { BounceLoader, GridLoader } from 'react-spinners'

function RecentArticle() {

    const {blogs} = useContext(BlogContext)
    const navigate = useNavigate()
    // console.log(blogs);

    const getFullPost = ()=>{
        navigate(`/blog-post/${blogs[blogs.length-1].postTitle}/${blogs[blogs.length-1].id}`)
    }

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

                    {
                        blogs ? 
                        <Card className="p-2" style={{border: "none"}}>
                            <Row>

                                <Col md={6} sm={12}>
                                    <Card.Img src={blogs && blogs[blogs.length-1]?.featureImg} />
                                </Col>

                                <Col md={6} sm={12}>
                                    <ListGroup horizontal style={{justifyContent: "space-around"}} className="border-bottom">
                                        <ListGroup.Item> {blogs && blogs[blogs.length-1].superUser} </ListGroup.Item>
                                        <ListGroup.Item> {blogs && blogs[blogs.length-1].createdAt.toDate().toDateString()} </ListGroup.Item>
                                        <ListGroup.Item style={{textTransform: "capitalize"}}> Tag: {blogs && blogs[blogs.length-1].postCategory} </ListGroup.Item>
                                    </ListGroup>

                                    <Card.Body>
                                        <Card.Title style={{fontSize: "25px"}}>
                                            <b>{ blogs && blogs[blogs.length-1].postTitle}</b>
                                        </Card.Title>
                                        <div style={{height: "190px", overflow: "hidden"}}>
                                            {
                                                blogs &&
                                                <div dangerouslySetInnerHTML={{__html: blogs[0].content}}>
                                                </div> 

                                            }

                                        </div>

                                        <Button variant="primary" onClick={getFullPost}>Read Full Text</Button>
                                    </Card.Body>
                                </Col>

                            </Row>
                        </Card> : <BounceLoader style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)"
                                                }} color="#36d7b7" />
                    }
                </Card>

            </Container>
        </div>
    </>
    
  )
}

export default RecentArticle