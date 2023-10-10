import React from 'react'
import HomeBanner from '../components/layout/HomeBanner'
import PrimaryPost from '../components/layout/PrimaryPost'
import NewsLetter from '../components/layout/NewsLetter'
import RecentArticle from '../components/layout/RecentArticle'

function Homepage() {
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