import HeroSection from '@/components/About/HeroSection'
import OurNumbers from '@/components/About/OurNumbers'
import OurTeam from '@/components/About/OurTeam'
import OurValues from '@/components/About/OurValues'
import OutStory from '@/components/About/OurStory'
import Value from '@/components/About/Value'
import Form from '@/components/Form'
import React from 'react'

function page() {
  return (
    <section>
      <HeroSection />
      <Value />
      <OutStory />
      <OurNumbers />
      <OurTeam />
      <OurValues />
      <Form />
    </section>)
}

export default page