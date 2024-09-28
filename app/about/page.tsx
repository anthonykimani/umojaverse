import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const AboutPage = () => {
  return (
    <section className='bg-star-bg px-2 md:px-10'>
    <Navbar />
    <About />
    <Footer />
</section>
  )
}

export default AboutPage