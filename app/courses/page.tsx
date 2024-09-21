
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const CoursesPage = () => {
  return (
    <section className='bg-star-bg px-2 md:px-10'>
        <Navbar />
        <Courses />
        <Footer />
    </section>
  )
}

export default CoursesPage