import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import {MdDateRange} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillTag} from 'react-icons/ai'
import CommentBox from './CommentBox';
import ShowComment from './ShowComment';

function FullBlogLayout({targetBlog}) {
    // console.log(targetBlog.id);

    

  return (
    <>
        <Container className="mt-5">
            <Row>

                <Col lg={12} md={12}>
                    <h2 style={{
                        fontWeight: "bold",
                    }}>{targetBlog.postTitle}</h2>
                </Col>

                <Col>
                    <p className="d-flex gap-3"> <span className="d-flex align-items-center gap-2"> <FaUserAlt /> {targetBlog.superUser} </span> <span className="d-flex align-items-center gap-2"><MdDateRange /> {targetBlog.createdAt.toDate().toDateString()}</span> <span className="d-flex align-items-center gap-2"><AiFillTag /> {targetBlog.postCategory}</span></p>
                </Col>

                    <hr />

                <Col lg={12} md={12} className="mt-5" style={{maxWidth: "100%"}}>
                    <Image src={targetBlog.featureImg} fluid style={{maxHeight: "400px", objectFit: "cover", width: "100%"}} />
                </Col>

                <Col lg={12} md={12} className="mt-2">
                    <div dangerouslySetInnerHTML={{__html: targetBlog.content}}>

                    </div>
                </Col>

                <Col lg={12} md={12} className="mt-3">
                    <CommentBox id={targetBlog.id} />
                </Col>

                <Col lg={12} md={12}>
                    
                    <ShowComment targetBlog={targetBlog} />
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FullBlogLayout