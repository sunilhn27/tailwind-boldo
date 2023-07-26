import Image from 'next/image'
import React from 'react'
import Img from '@/asserts/images/Image_1.png'
import DownArrow from '@/asserts/images/chevron-down.png'

function OurServices_2() {

  return (
    <section className=''>
      <div className='flex justify-center'>
        <div>
          <Image src={Img} height={400} width={1350}  />
        </div>
      </div>


      <div className='my-10 font-light flex justify-evenly'>
        <div className='flex  text-5xl w-[550px]'>
          <h1>
            We connect our customers with the best, and help them keep up-and stay open.
          </h1>
        </div>

        <div className='flex flex-col  space-y-8'>

          <div className='flex space-x-4'>

            <h1 className='font-sun text-2xl '>
              We connect our customers with the best?
            </h1>
            <Image src={DownArrow} className='rounded-lg'></Image>
          </div>
          <hr />

          <div className='flex space-x-4 '>
            <h1 className='font-sun text-2xl '>
              We connect our customers with the best?
            </h1>
            <Image src={DownArrow} className='rounded-lg'></Image>

          </div>
          <hr />

        </div>

      </div>
    </section>
  )
}

export default OurServices_2