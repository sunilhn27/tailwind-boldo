import React from 'react'
import LogoWallImg from '@/asserts/images/Logo Wall.png'
import Image from 'next/image'

function LogoWall() {
    return (
        <div className='bg-[#0A2640] flex items-center justify-center'>
            <Image src={LogoWallImg} />
        </div>
    )
}

export default LogoWall