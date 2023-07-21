import React from 'react'
import PieGraphic from '@/asserts/images/Pie Graphic.png'
import Women from '@/asserts/images/Women.png'
import Sun from '@/asserts/images/sun.png'
import Star from '@/asserts/images/star.png'
import Feather from '@/asserts/images/feather.png'
import Image from 'next/image'


function Customer() {
    return (
        <section className='my-32  '>

            <div className='flex justify-center space-x-44 h-[450px] py-5  my-44 '>
                <div className='flex flex-col justify-center my-auto items-center '>
                    <div>
                        <h1 className='w-[420px] text-3xl mb-8 font-sun'>We connect our customers with the best, and help them keep up-and stay open.</h1>
                        <div className='flex flex-col space-y-6 '>
                            <div className='flex bg-[#000000] text-white py-4 px-3 space-x-4 '>
                                <Image src={Feather} className='' />
                                <p>We connect our customers with the best.</p>
                            </div>
                            <div className='flex py-4 px-3 space-x-4 border-2 border-white shadow-lg'>
                                <Image src={Star} />
                                <p>We connect our customers with the best.</p>
                            </div>
                            <div className='flex py-4 px-3 space-x-4 border-2 border-white shadow-lg'>
                                <Image src={Sun} />
                                <p>We connect our customers with the best.</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex relative'>
                    <Image src={Women} height={600} width={350} />
                    <Image src={PieGraphic} className='absolute bg-white mt-60 ml-16'/>
                </div>
            </div>
        </section>
    )
}

export default Customer