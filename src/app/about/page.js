import HeroSection from '@/components/About/HeroSection'
import OutStory from '@/components/About/OutStory'
import Value from '@/components/About/Value'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <section>
      <HeroSection />
      <Value />
      <OutStory />
    </section>)
}

export default page