import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const BlogsPage = () => {
  return (
    <section>
        <Navbar />
        <Blogs />
        <Footer />
    </section>
  )
}

export default BlogsPage