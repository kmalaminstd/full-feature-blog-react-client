import React from 'react'
import BlogPost from '../components/layout/BlogPost'
import { Container } from 'react-bootstrap'

function AllBlogs() {
  return (
    <>

      <Container>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Container>

    </>
  )
}

export default AllBlogs