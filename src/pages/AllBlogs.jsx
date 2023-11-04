import React, { useContext, useEffect, useState } from 'react'
import BlogPost from '../components/layout/BlogPost'
import { Container } from 'react-bootstrap'
import { BlogContext } from '../Context/Blog.context'
import { ClockLoader } from 'react-spinners'
import duplicateArray from '../utils/duplicateArray'

function AllBlogs() {
  const [categories, setCategories] = useState(null)
  const [filterBlogs, setFilterBlogs] = useState(null)
  const {blogs} = useContext(BlogContext)

  const filterBlog = (tagName)=>{
    setFilterBlogs(blogs.filter((elm)=> elm.postCategory === tagName))
  }

  useEffect(()=>{
    if(blogs){
      setFilterBlogs(blogs)
      setCategories(blogs.map((blog) => blog.postCategory))
    }

  },[blogs])


  return (
    <>

      <Container>
        <div style={{
          margin: "20px 0 40px 0",
          fontSize: "20px"
        }}>
          <p> <span style={{
            fontWeight: "bold",
            marginRight: "10px"
          }}>Tags:</span>
            {
              categories && 
              duplicateArray(categories).map((elm, i)=> <span key={i} onClick={()=>filterBlog(elm)} className="tagCat" style={{
                cursor: "pointer",
                color: "blue",
              }}> {elm} ,</span>)
            }
          </p>
        </div>
      </Container>

      <Container>
        {
          
          filterBlogs ?
          filterBlogs.map( blog=> <BlogPost key={blog.id} blog={blog} />)
          : 
          <div style={{width: "100%"}} className="mt-5 d-flex align-items-center justify-content-center">
            <ClockLoader color="#36d7b7" />

          </div>
          
        }
      </Container>

    </>
  )
}

export default AllBlogs