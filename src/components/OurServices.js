import Image from 'next/image'
import React from 'react'
import SericesImg1 from '@/asserts/images/ServicesImg1.png'
import SericesImg2 from '@/asserts/images/ServicesImg2.png'
import SericesImg3 from '@/asserts/images/ServicesImg3.png'

function OurServices() {

  const Cards = ({ image, title, subtitle, para }) => {
    return (
      <div className='flex flex-col  w-[300px] h-[500px] mx-16'>
        <div>
          <Image src={image} width={300} height={500} className='rounded-lg mb-4'></Image>
          <div>
            <h1 className='font-bold mb-4'>
              {title}
            </h1>
            <h3 className='text-gray-400 mb-6 '>
              {subtitle}
            </h3>
            <p className='font-bold mb-2'>
              {para}
              <hr />
            </p>
          </div>
        </div>
      </div>)
  }

  return (
    <section className='my-6'>

      <div className='flex flex-col justify-center items-center my-12'>
        <h5 className='text-2xl text-gray-400 mb-2'>
          Our Services
        </h5>
        <h1 className='font-sun w-[800px]  text-5xl text-center  leading-snug font-semibold'>
          Handshake infographic mass market crowdfunding iteration.
        </h1>
      </div>

      <div className='flex justify-center '>
        <div className='grid grid-cols-3 justify-evenly'>

          <Cards image={SericesImg1} title={" Cool feature title"} subtitle={"Learning curve network effects return on investment."} para={"Explore page"} />

          <Cards image={SericesImg2} title={"Even cooler feature"} subtitle={"Learning curve network effects return on investment."} para={"Explore page"} />

          <Cards image={SericesImg3} title={"Cool feature title"} subtitle={"Learning curve network effects return on investment."} para={"Explore page"} />

        </div>
      </div>

    </section >
  )
}

export default OurServices