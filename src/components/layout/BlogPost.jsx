import DOMPurify from 'dompurify';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function BlogPost({blog}) {


    const sliced = blog.content.slice(1, 200)
    const navigate = useNavigate()

    const getFullPost = (blog)=>{
        navigate(`/blog-post/${blog.postTitle}/${blog.id}`)
    }
  return (
    <>
        <div className="blogPost d-flex justify-content-center mt-3">
            <Card style={{width: "700px"}} className="p-3" onClick={()=>getFullPost(blog)}>
                <Row>
                    <Col md={4} style={{height: '200px'}}>
                        <Card.Img src={blog.featureImg} style={{height: "100%", objectFit: "cover"}} />
                    </Col>
                    <Col>
                        <Card.Title className="mb-0">
                            {blog.postTitle}
                        </Card.Title>
                        <p className="blogInfo"><span>By <b>{blog.superUser}</b></span> <span>at {blog.createdAt.toDate().toDateString()}</span></p>
                        <div style={{
                            height: "130px",
                            overflow: "hidden"
                        }}>
                            <Card.Text dangerouslySetInnerHTML={{__html: blog.content}}>
                            </Card.Text>
                        </div>
                            
                    </Col>
                </Row>
            </Card>
        </div>
    </>
  )
}

export default BlogPost