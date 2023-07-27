import Image from 'next/image'
import React from 'react'
import img1 from '@/asserts/images/Person_1.png'
import img2 from '@/asserts/images/Rectangle 1270.png'
import img3 from '@/asserts/images/Rectangle_1.png'
import img4 from '@/asserts/images/Women_2.png'

function Value() {
    return (
        <section className='h-[500px] top-[-300px]'>

            <div className='flex justify-center space-x-9 absolute top-[450px] w-full'>
                <div className='grid grid-rows-2  '>
                    <div className='space-y-6'>
                        <Image src={img1} height={280} width={300} />
                        <Image src={img3} height={280} width={300} className='' />
                    </div>
                </div>
                <div className='flex'>
                    <Image src={img4} height={200} width={300} className='h-[540px]' />
                </div>
                <div className='grid grid-rows-2  '>
                    <div className='space-y-6'>
                        <Image src={img2} height={280} width={300} className='h-[305px]' />
                        <Image src={img3} height={280} width={300} className='' />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Value