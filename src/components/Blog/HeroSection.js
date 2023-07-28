import React from 'react'
import Img1 from '@/asserts/images/rectangleNew.png'
import Image from 'next/image'
import Person1 from '@/asserts/images/Person1.png'

function HeroSection() {
    return (
        <section >
            <div className='flex flex-col justify-center  items-center space-y-3 py-6 '>
                <h4 className='text-gray-400'>Blog</h4>
                <h1 className='text-7xl font-sun'>Thoughts and words</h1>
            </div>

            <div className='flex mt-10 py-6 justify-center space-x-12'>

                <div>
                    <Image src={Img1} width={600} />
                </div>

                <div className=' py-16 space-y-8'>
                    <div className='flex space-x-4 items-center' >
                        <h1 className='font-bold'>Category</h1>
                        <p className='text-gray-400 text-sm'>November 22 ,2021</p>
                    </div>
                    <h1 className='text-5xl font-sun w-[550px] leading-snug'>Pitch termsheet backing validation focus release.</h1>
                    <div className='flex space-x-3 items-center'>
                        <Image src={Person1} height={32} width={32} />
                        <h1>Chandler Bing</h1>
                    </div>
                </div>
            </div>
            <hr className='w-[82%]  border-2  flex justify-center mt-5 text-center mx-auto'/>
        </section>
    )
}

export default HeroSection