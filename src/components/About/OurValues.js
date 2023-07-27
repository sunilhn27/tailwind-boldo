import Image from 'next/image'
import React from 'react'
import img2 from '@/asserts/images/Rectangle 1270.png'
import img3 from '@/asserts/images/Rectangle_1.png'

function OurValues() {

  const Values = ({ img, title, para }) => {
    return (
      <div className='flex space-x-12 mb-12 font-sun' >
        <Image src={img} height={180} className='h-[140px]' width={150}/>
        <div className='flex flex-col space-y-4 w-[500px]'>
          <h1 className='text-3xl'>{title}</h1>
          <p className='text-gray-400'>{para}</p>
        </div>
      </div>
    )
  }

  return (
    <section className='w-full h-[1000px] bg-[#0A2640]'>

      <div className='text-white py-16 '>
        <div className='w-[720px] mx-auto font-sun  space-y-4'>
          <h4 className='text-gray-300'>Our Values</h4>
          <h1 className='text-5xl'>Things in we believe</h1>
          <p className='text-gray-300 w-[610px]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>

        </div >
      </div>

      <div className=' mt-12 flex justify-center text-white '>
          <div className='grid grid-rows-3   '>

            <div className=' flex flex-col  '>
              <Values img={img3} title={"We are commited."} para={"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "} />
            </div>


            <div className='flex flex-col  '>
              <Values img={img2} title={"We are responsible."} para={"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "} />
            </div>


            <div className=' flex flex-col  '>
              <Values img={img3} title={"We are commited."} para={"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "} />
            </div>

          </div>

        </div>
    </section>
  )
}

export default OurValues