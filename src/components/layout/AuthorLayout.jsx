import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { AuthorImage } from '../../assets/images'
import { Link } from 'react-router-dom'
import { FaFacebookF} from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

function AuthorLayout() {
  return (
    <>
        <Container className="mt-5">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <h4 className="text-center">Admin Of this Blog</h4>
                    <Row className="justify-content-md-center">
                        <Col lg={2} sm={12}>
                            <Image style={{
                                height: "50px",
                                width: "50px"
                            }} src={AuthorImage} roundedCircle />
                        </Col>
                        <Col lg={4} sm={12} >
                            <div className="d-flex align-items-center gap-1">

                                <FaFacebookF /> <Link style={{ textDecoration: "none", fontWeight: "bold"}} to="https://www.facebook.com/kmalaminwd">K.M. AL-AMIN</Link>
                            </div>
                            <div className="d-flex align-items-center gap-1">

                                <BsGithub /> <Link style={{ textDecoration: "none", fontWeight: "bold"}} to="https://www.github.com/kmalaminstd">kmalaminstd</Link>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61553150333761&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1276446316385970" width="100%" height="130" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AuthorLayout