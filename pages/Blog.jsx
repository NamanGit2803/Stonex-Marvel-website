import React from 'react'
import OtherHeroSection from '../components/OtherHeroSection'
import BlogSection from '../components/BlogSection'

const Blog = () => {
  return (
    <div>
        <OtherHeroSection/>

        <BlogSection title={'Our Latest Blog Post'}/>

        <BlogSection title={'Our Trending Blog Posts'}/>
        
    </div>
  )
}

export default Blog