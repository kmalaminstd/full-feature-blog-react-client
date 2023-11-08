import React, { lazy, useContext, useEffect } from 'react'
import HomeBanner from '../components/layout/HomeBanner'
// import PrimaryPost from '../components/layout/PrimaryPost'
const PrimaryPost = lazy(()=> import('../components/layout/PrimaryPost'))
import NewsLetter from '../components/layout/NewsLetter'
import RecentArticle from '../components/layout/RecentArticle'
import { BlogContext } from '../Context/Blog.context'
const AuthorLayout = lazy(()=> import('../components/layout/AuthorLayout'))

function Homepage() {
  const {blogs} = useContext(BlogContext)
  useEffect(()=>{
    document.title = "KM's blog"
  },[])
  return (
    <>
        <HomeBanner />
       
        <PrimaryPost />
        <RecentArticle />
        <NewsLetter />
        <AuthorLayout />

    </>
  )
}

export default Homepage