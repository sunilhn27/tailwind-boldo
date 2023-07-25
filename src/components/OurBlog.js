import React from 'react'
import Img1 from '@/asserts/images/ServicesImg1.png'
import Img2 from '@/asserts/images/Women.png'
import Img3 from '@/asserts/images/Rectangle_1.png'
import Image from 'next/image'
import Author1 from '@/asserts/images/Person1.png'
import Author2 from '@/asserts/images/Person2.png'
import Author3 from '@/asserts/images/Person3.png'


function OurBlog() {


    const Articles = ({ className, image, category, date, para, authorImg, authorName }) => {
        return (
            <div className={`${className} w-[300px] h-[490px]  mt-5`} >
                <Image src={image} height={50} className='h-[250px]' width={309} />
                <div className='flex my-4 space-x-4'>
                    <h1 className='font-semibold'>{category}</h1>
                    <p className='text-gray-400'>{date}</p>
                </div>
                <div className='font-sun h-[180px] flex flex-col justify-between'>
                    <h1 className='w-[250px] text-xl'>
                        {para}
                    </h1>
                    <div className='mt-8 flex items-center  space-x-4'>
                        <Image src={authorImg} height={32} width={32} />
                        <h1 className='font-semibold'>{authorName}</h1>
                    </div>
                </div>

            </div >
        )
    }

    return (
        <section className='mt-32 mb-16'>

            <div className='flex flex-col justify-center'>
                <h4 className='text-center text-gray-300 text-2xl'>
                    Our Blog
                </h4>
                <h1 className='text-center text-7xl w-[75%] mx-auto leading-snug font-sun' >
                    Value proposition accelerator product management venture
                </h1>
            </div>

            <div className='flex justify-center'>
                <div className='grid grid-cols-3 space-x-8'>
                    <Articles image={Img1} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} authorImg={Author1} authorName={"Chandler Bing"} />

                    <Articles image={Img2} category={"Category"} date={"November 22, 2021"} para={"Seed round direct mailing non-disclosure agreement graphical user interface rockstar."} authorImg={Author1} authorName={"Rachel Green"} />

                    <Articles image={Img3} category={"Category"} date={"November 22, 2021"} para={"Beta prototype sales iPad gen-z marketing network effects value proposition"} authorImg={Author1} authorName={"Monica Geller"} />
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <button className='text-[#0A2640] border-2 border-[#0A2640]  px-12 py-4 rounded-full font-semibold'>Load more</button>
            </div>

        </section>
    )
}

export default OurBlog