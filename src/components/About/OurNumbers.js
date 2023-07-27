import React from 'react'

function OurNumbers() {
    return (
        <section className='w-full h-[500px] bg-[#0A2640] mt-24'>
            <div className='flex flex-col mx-auto text-center py-16 text-white'>
                <h4 className='text-xl text-gray-400 mb-3'>Our numbers</h4>
                <h1 className=' w-[750px]  mx-auto text-4xl leading-snug font-sun'>Handshake infographic mass market crowdfunding iteration.</h1>
            </div>
            <div className='text-white flex justify-evenly '>
                <div  >
                    <h1 className='text-[#4FE9A4] text-7xl mb-3'>120m</h1>
                    <h4 className='text-gray-400 ml-1'>Cool feature title</h4>
                </div>
                <div className=''>
                    <h1 className='text-[#4FE9A4] text-7xl mb-3'>10.000</h1>
                    <h4 className='text-gray-400 ml-1'> Cool feature title</h4>
                </div>
                <div className=''>
                    <h1 className='text-[#4FE9A4] text-7xl mb-3'>240</h1>
                    <h4 className='text-gray-400 ml-1'>Cool feature title</h4>
                </div>
            </div>
        </section>
    )
}

export default OurNumbers