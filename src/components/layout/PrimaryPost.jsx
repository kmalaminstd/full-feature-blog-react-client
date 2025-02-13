import React, { useContext } from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import { BlogContext } from '../../Context/Blog.context'
import { useNavigate } from 'react-router-dom';
import { educationCard, lifehackCard, moreCard, programCard } from '../../assets/images';
import { BounceLoader } from 'react-spinners';

function PrimaryPost() {

    const {blogs} = useContext(BlogContext)
    // console.log(blogs);
    const navigate = useNavigate()

    const getFullBlog = (blog)=>{
        navigate(`/blog-post/${blog.postTitle}/${blog.id}`)
    }

  return (


    <>
        <Container fluid className="mt-5">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    {
                        blogs ?
                            <Card className="text-white primary-card-one" style={{maxWidth: "100%", height:"400px" , position: "relative"}} onClick={()=>getFullBlog(blogs[0])}>
                                <Card.Img src={blogs[0].featureImg} style={{maxWidth: "100%", height: "100%", objectFit: "cover"}} />
                                
                                    <Card.ImgOverlay>
                                        <Card.Title>
                                            {blogs[0].postTitle}
                                        </Card.Title>
                                        <Card.Text>
                                            This is the trending or top post of the blog. Try something more like it. You can read more like it from our blog site.
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                
                            </Card> :  <BounceLoader style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)"
                                                }} color="#36d7b7" />
                    }

                </Col>
                <Col lg={6} md={6} sm={12}>
                    <CardGroup>

                        <Row>

                            <Col md={12}>

                                <Row>

                                    <Col md={6} sm={12}>
                                        <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src={educationCard} />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Education
                                                </Card.Title>
                                                <Card.Text>
                                                    Get Educational Post or Blog
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>

                                    <Col md={6} sm={12}>

                                    <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src={lifehackCard} />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Life Hacks
                                                </Card.Title>
                                                <Card.Text>
                                                    Get Life Hack Post or Blog
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
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src={programCard} />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    Programming or Coding
                                                </Card.Title>
                                                <Card.Text>
                                                    Get Coding solution or programming tips and posts
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>

                                    <Col md={6} sm={12}>
                                    <Card style={{maxWidth: "100%", height: "200px"}} className="primary-post-two">
                                            <Card.Img style={{height: "100%", objectFit: "cover"}} src={moreCard} />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    More
                                                </Card.Title>
                                                <Card.Text>
                                                    Get more post like these
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