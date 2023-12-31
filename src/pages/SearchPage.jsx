import React, { useContext, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BlogContext } from '../Context/Blog.context'
import { useNavigate, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'

function SearchPage() {
  const {searchBlog} = useContext(BlogContext)
  const navigate = useNavigate()

  useEffect(()=>{
    document.title = "KM's Blog || Search page"
  },[])

  const getFullPost = (blog)=>{
    navigate(`/blog-post/${blog.postTitle}/${blog.id}`)
  }

  const {text} = useParams()

  // console.log(text);

  return (
    <>
      <Container>

        <h2>Search result for <b><i>{text}</i></b> </h2>

        {
          typeof searchBlog === 'object' ?
            (<div className="blogPost d-flex justify-content-center mt-3">
            <Card style={{width: "700px"}} className="p-3" onClick={()=>getFullPost(searchBlog)}>
                <Row>
                    <Col md={4} style={{height: '200px'}}>
                        <Card.Img src={searchBlog.featureImg} style={{height: "100%", objectFit: "cover"}} />
                    </Col>
                    <Col>
                        <Card.Title className="mb-0">
                            {searchBlog.postTitle}
                        </Card.Title>
                        <p className="blogInfo"><span>By <b>{searchBlog.superUser}</b></span> <span>at {searchBlog.createdAt.toDate().toDateString()}</span></p>
                        <div style={{
                            height: "130px",
                            overflow: "hidden"
                        }}>
                            <Card.Text dangerouslySetInnerHTML={{__html: searchBlog.content}}>
                            </Card.Text>
                        </div>
                            
                    </Col>
                </Row>
            </Card>
            </div>)  :
            (<div>
              <h2> {searchBlog} </h2>
            </div>)
        }
      </Container>
    </>
  )
}

export default SearchPage