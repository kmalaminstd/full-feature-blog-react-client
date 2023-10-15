import React, { useContext } from 'react'
import BlogPost from '../components/layout/BlogPost'
import { Container } from 'react-bootstrap'
import { BlogContext } from '../Context/Blog.context'

function AllBlogs() {

  const {blogs} = useContext(BlogContext)
  console.log(blogs);

  return (
    <>

      <Container>
        {
          blogs && 
          blogs.map( blog=> <BlogPost key={blog.id} blog={blog} />)
        }
        {/* <BlogPost />
        <BlogPost />
        <BlogPost /> */}
      </Container>

    </>
  )
}

export default AllBlogs