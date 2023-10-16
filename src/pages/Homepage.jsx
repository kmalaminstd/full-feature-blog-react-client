import React, { useContext } from 'react'
import HomeBanner from '../components/layout/HomeBanner'
import PrimaryPost from '../components/layout/PrimaryPost'
import NewsLetter from '../components/layout/NewsLetter'
import RecentArticle from '../components/layout/RecentArticle'
import { BlogContext } from '../Context/Blog.context'

function Homepage() {
  const {blogs} = useContext(BlogContext)
  return (
    <>
        <HomeBanner />
       
        <PrimaryPost />
        <RecentArticle />
        <NewsLetter />
    </>
  )
}

export default Homepage