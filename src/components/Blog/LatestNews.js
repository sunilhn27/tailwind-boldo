import Image from 'next/image'
import React from 'react'
import Img1 from '@/asserts/images/ServicesImg1.png'
import Img2 from '@/asserts/images/ServicesImg2.png'
import Img3 from '@/asserts/images/ServicesImg3.png'


import Person1 from '@/asserts/images/Person1.png'
function LatestNews() {

    const News = ({ img, category, date, para, person, name }) => {
        return <div className=''>
            <Image src={img} className='w-[300px] h-[200px]' />
            <div className='flex space-x-4 mt-4'>
                <h1>{category}</h1>
                <p className='text-gray-400'>{date}</p>
            </div>
            <div className=' mt-4 '>
                <p className='w-[250px]'>{para}</p>
            </div>
            <div className='flex space-x-3 items-center mt-8'>
                <Image src={person} height={30} width={30} />
                <h1>{name}</h1>
            </div>
        </div>
    }

    return (
        <section className='mt-16 '>
            <div className='w-[80%] flex  ml-[20%] my-12'>
                <h1 className='text-4xl font-sun'>Latest news</h1>
            </div>

            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-11'>

                    <News img={Img1} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} person={Person1} name={"Chandler Bing"} />



                    <News img={Img2} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} person={Person1} name={"Chandler Bing"} />



                    <News img={Img3} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} person={Person1} name={"Chandler Bing"} />



                    <News img={Img3} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} person={Person1} name={"Chandler Bing"} />



                    <News img={Img2} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} person={Person1} name={"Chandler Bing"} />



                    <News img={Img1} category={"Category"} date={"November 22, 2021"} para={"Pitch termsheet backing validation focus release."} person={Person1} name={"Chandler Bing"} />



        

                </div>

            </div>


        </section>
    )
}

export default LatestNews