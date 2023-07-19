import Image from 'next/image'
import React from 'react'
import HeroImg from '@/asserts/images/hero graphics.png'
import LogoWall from './LogoWall'

function HeroSection() {
    return (
        <>
            <section className='bg-[#0A2640] w-full h-[600px] flex justify-evenly  text-white '>

                <div className='flex flex-col justify-center'>
                    <h1 className='w-[540px] text-5xl  font-sun mb-4 leading-snug'>Save time by building  fast with Boldo Template </h1>
                    <p className='text-gray-300 font-sun w-[550px] mb-8'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    <div className='flex gap-6'>
                        <button className='bg-[#69E6A6] px-12  rounded-full'>Buy Template</button>
                        <button className='px-12 border-2 border-white border-dotted py-3 rounded-full'>Explore</button>
                    </div>
                </div>
                <div className='flex flex justify-center items-center '>
                    <Image src={HeroImg} />
                </div>
            </section>
            <LogoWall />

        </>
    )
}

export default HeroSection