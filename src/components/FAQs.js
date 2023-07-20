import Image from 'next/image'
import React from 'react'
import Person from '@/asserts/images/Person_1.png'
import Graph from '@/asserts/images/Graph_1.png'
import Tickmark from '@/asserts/images/Tickmark.png'
function FAQs() {
    return (
        <section className='mt-16'>

            <div className='flex justify-evenly'>

                <div className='flex'>
                    <Image src={Person} height={40} width={450} className='relative' />
                    <Image src={Graph} className='bg-white absolute left-[30%]  mt-48' />
                </div>

                <div className='flex flex-col my-auto'>
                    <h1 className=' w-[450px] text-3xl'>
                        We connect our customers with the best, and help them keep up-and stay open.
                    </h1>
                    <div className='flex flex-col space-y-3 mt-5 font-medium'>
                        <div className='flex items-center space-x-6'>
                            <Image src={Tickmark} />
                            <p>We connect our customers with the best.</p>
                        </div>
                        <div className='flex items-center space-x-6'>
                            <Image src={Tickmark} />
                            <p>Advisor success customer launch party.</p>
                        </div>
                        <div className='flex items-center space-x-6'>
                            <Image src={Tickmark} />
                            <p>Business-to-consumer long tail.</p>
                        </div>
                    </div>
                    <button className='bg-[#0A2640] py-4 rounded-full mt-8 text-white w-[150px]'>Start now</button>
                </div>
            </div>

        </section>
    )
}

export default FAQs