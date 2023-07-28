import Customer from '@/components/Customer'
import FAQs from '@/components/FAQs'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import OurBlog from '@/components/OurBlog'
import OurServices from '@/components/OurServices'
import OurServices_2 from '@/components/OurServices_2'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <FAQs />
      <Customer />
      <Testimonials />
      <OurServices_2 />
      <OurBlog />
      <Form />
    </div>
  )
}
