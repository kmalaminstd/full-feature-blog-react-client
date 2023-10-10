import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function BlogPost() {
  return (
    <>
        <div className="blogPost d-flex justify-content-center mt-3">
            <Card style={{width: "700px"}} className="p-3">
                <Row>
                    <Col md={4} style={{height: '200px'}}>
                        <Card.Img src="./image/imgone.png" style={{height: "100%", objectFit: "cover"}} />
                    </Col>
                    <Col>
                        <Card.Title className="mb-0">
                            This is card title for my post.
                        </Card.Title>
                        <p className="blogInfo"><span>By <b>Admin</b></span> <span>at 28 jan, 2023</span></p>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta numquam quibusdam, adipisci suscipit debitis impedit cumque reiciendis maiores vero laborum quos nisi vitae ab. Nisi fuga quod omnis eumd .....
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
        </div>
    </>
  )
}

export default BlogPost