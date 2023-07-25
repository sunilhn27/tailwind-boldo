import React from 'react'

function Form() {
  return (
    <section className='bg-[#0A2640] h-[400px] w-[1000] mx-12 my-12'>

      <div className='text-white flex  justify-center  py-12 '>
        <h1 className='text-5xl font-sun w-[700px] text-center  leading-snug'>An enterprise template to ramp up your company website</h1>
      </div>
      <div className='flex justify-center space-x-8'>
        <input placeholder='Your email address' className='w-[370px] h-[56px] rounded-full px-6 '></input>
        <button className='bg-[#65E4A3] w-[210px] h-[60px] rounded-full'>Start now</button>
      </div>
    </section>
  )
}

export default Form