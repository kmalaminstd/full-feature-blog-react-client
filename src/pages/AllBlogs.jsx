import React, { useContext } from 'react'
import BlogPost from '../components/layout/BlogPost'
import { Container } from 'react-bootstrap'
import { BlogContext } from '../Context/Blog.context'
import { ClockLoader } from 'react-spinners'

function AllBlogs() {

  const {blogs} = useContext(BlogContext)
  // console.log(blogs);

  return (
    <>

      <Container>
        {
          
          blogs ?
          blogs.map( blog=> <BlogPost key={blog.id} blog={blog} />)
          : 
          <div style={{width: "100%"}} className="mt-5 d-flex align-items-center justify-content-center">
            <ClockLoader color="#36d7b7" />

          </div>
          
        }
        {/* <BlogPost />
        <BlogPost />
        <BlogPost /> */}
      </Container>

    </>
  )
}

export default AllBlogs