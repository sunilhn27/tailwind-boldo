import Image from 'next/image'
import React from 'react'
import Img1 from '@/asserts/images/Dwight.png'
import Img2 from '@/asserts/images/Michael.png'
import Img3 from '@/asserts/images/Pam.png'

function OurTeam() {

  const Managers = ({ img, name, profile }) => {
    return (
      <div>
        <div className='flex flex-col space-y-3'>
          <Image src={img} height={350} width={300}/>
          <h1 >
            {name}
          </h1>
          <p className='text-gray-400'>
            {profile}
          </p>
        </div>
      </div>
    )
  }


  return (

    <section className='mt-16  h-[750px]'>
      <div className='py-6 mt-6 w-[650px] mx-auto font-sun space-y-4'>
        <h4 className='text-gray-400 '>Our team</h4>
        <h1 className='text-5xl font-semibold'>The leadership team</h1>
        <p className='text-gray-400 text-l w-[610px]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
      </div>
      <div className='flex justify-center'>
        <div className='mt-16 grid grid-cols-3 space-x-12'>
          <Managers img={Img2} name={"Michael Scott"} profile={"General Manager"} />
          <Managers img={Img1} name={"Dwight Schrute"} profile={"General Manager"} />
          <Managers img={Img3} name={"Pam Beetsley"} profile={"General Manager"} />
        </div>
      </div>
    </section>
  )
}

export default OurTeam