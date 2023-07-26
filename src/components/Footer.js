import React from 'react'
import LogoBlack from '@/asserts/images/LogoBlack.png'
import Image from 'next/image'

function Footer() {

    const Links = ({ title, link_1, link_2, link_3, hiring, classes }) => {

        return (
            <div className='flex flex-col font-normal'>
                <h1 className='font-bold py-6'>
                    {title}
                </h1>
                <div className='text-gray-400 space-y-6 mt-3'>
                    <p>{link_1}</p>
                    <p>{link_2}<span className={`text-[#0A2640] bg-[#65E4A3] rounded-full ${classes}`}>{hiring}</span></p>
                    <p>{link_3}</p>
                </div>
            </div>
        )

    }


    return (
        <section className='mt-12 w-full '>
            <div>
                <div className='flex  items-center  h-[400px]  justify-evenly mx-16'>

                    <div className='flex flex-col w-[40%]  h-[200px]'>
                        <Image src={LogoBlack} className='mb-6' />
                        <h1 className='text-gray-400 w-[300px] mb-12' >Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</h1>
                        <p className='text-gray-400 '>
                            All rights reserved.
                        </p>
                    </div>

                    <div className='flex justify-center pb-4'>
                        <div className='grid grid-cols-3 '>
                            <Links title={"Landings"} link_1={"Home"} link_2={"Products"} link_3={"Services"} />

                        </div>
                        <div className='grid grid-cols-3  w-[30%]'>
                            <Links title={"Company"} link_1={"Home"} link_2={"Careers"} link_3={"Services"} hiring={"Hiring!"} classes={"px-2 py-1 font-bold ml-2"} />

                        </div>
                        <div className='grid grid-cols-3 '>
                            <Links title={"Resources"} link_1={"Blog"} link_2={"Products"} link_3={"Services"} />

                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Footer