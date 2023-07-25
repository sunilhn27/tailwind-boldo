import Customer from '@/components/Customer'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import OurBlog from '@/components/OurBlog'
import OurServices from '@/components/OurServices'
import OurServices_2 from '@/components/OurServices_2'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurServices />
      <FAQs />
      <Customer />
      <Testimonials />
      <OurServices_2 />
      <OurBlog />
      <Form />
      <Footer />
    </div>
  )
}
