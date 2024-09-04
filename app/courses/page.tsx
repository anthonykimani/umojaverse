
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const CoursesPage = () => {
  return (
    <section className='bg-star-bg'>
        <Navbar />
        <Courses />
        <Footer />
    </section>
  )
}

export default CoursesPage