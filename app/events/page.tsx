import Events from '@/components/Events'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import React from 'react'

const EventsPage = () => {
  return (
    <section className='bg-star-bg px-2 md:px-10'>
        <Navbar />
        <Events />
        <Footer />
    </section>
  )
}

export default EventsPage