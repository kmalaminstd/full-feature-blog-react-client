import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BlogContext } from '../Context/Blog.context'
import FullBlogLayout from '../components/layout/FullBlogLayout'

function FullBlog() {
    const [targetBlog, setTargetBlog] = useState(null)
    const {postTitle, id} = useParams()
    const {blogs} = useContext(BlogContext)

    useEffect(()=>{
        return (()=>{
            if(blogs){
                setTargetBlog(...blogs.filter(elm => elm.id === id))
            }
        })()
    },[blogs])

    // console.log(targetBlog);
    

  return (
    <>  
        {
            targetBlog && 
            <FullBlogLayout targetBlog={targetBlog} />
        }
    </>
  )
}

export default FullBlog