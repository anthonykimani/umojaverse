import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const BlogsPage = () => {
  return (
    <section className='bg-star-bg px-2 md:px-10'>
        <Navbar />
        <Blogs />
        <Footer />
    </section>
  )
}

export default BlogsPage