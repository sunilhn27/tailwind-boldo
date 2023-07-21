import Image from 'next/image'
import React from 'react'
import Person1 from '@/asserts/images/Person1.png'
import Person2 from '@/asserts/images/Person2.png'
import Person3 from '@/asserts/images/Person3.png'

function Testimonials() {

  const Testimonial = ({ quote, img, name, desgination, classes }) => {
    return (
      <div className={`w-[345px]  ${classes} mt-8 py-10 bg-white rounded-xl`}>
        <h1 className='w-[250px] text-2xl font-sun flex justify-center  mx-auto'>
          {quote}
        </h1>
        <div className='flex justify-start px-10 mt-9'>
          <Image src={img} />
          <div>
            <div className='flex flex-col px-4 '>
              <h1 className="font-semibold">{name}
              </h1>
              <p className='text-gray-500 text-sm' >{desgination}
              </p>
            </div>
          </div>
        </div>

      </div>

    )
  }


  return (
    <section className='bg-[#0A2640] my-32 h-[700px]'>

      <div className='flex  h-[200px] justify-center mr-[30%] items-center pl-32 0'>
        <h1 className='text-white text-5xl font-sun w-[700px]'>
          An enterprise template to ramp up your company website
        </h1>
      </div>

      <div className=' h-[400px] flex justify-center'>
        <div className='grid grid-cols-3 space-x-4'>

          <Testimonial quote={"“Buyer buzz partner network disruptive non-disclosure agreement business”"} img={Person1} name={"Albus Dumbledore"} desgination={"Manager @ Howarts"} classes={"h-[300px]"} />


          <Testimonial quote={"“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"} img={Person2} name={"Albus Dumbledore"} desgination={"Manager @ Slytherin"} classes={"h-[350px]"} />


          <Testimonial quote={"“Release facebook responsive web design business model canvas seed money monetization.”"} img={Person3} name={"Albus Dumbledore"} desgination={"Team Leader @ Gryffindor"} classes={"h-[320px]"} />

        </div>

      </div>
    </section>
  )
}

export default Testimonials