import Customer from '@/components/Customer'
import FAQs from '@/components/FAQs'
import HeroSection from '@/components/HeroSection'
import LogoWall from '@/components/LogoWall'
import Navbar from '@/components/Navbar'
import OurServices from '@/components/OurServices'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurServices />
      <FAQs/>
      <Customer/>
    </div>
  )
}
