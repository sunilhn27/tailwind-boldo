import Image from 'next/image'
import React from 'react'
import Logo from '@/asserts/images/Logo.png'
import Link from 'next/link'
function Navbar() {
    return (
        <section className='bg-[#0A2640] text-white flex justify-between py-10 font-sun'>
            <div className='mx-16 flex items-center'>
                <Image src={Logo} />
            </div>
            <div className='flex gap-8 mx-16 items-center'>
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/about"}>About</Link>
                <Link className="bg-white text-black rounded-full px-6 py-1" href={"/"}>Log In</Link>
            </div>
        </section>
    )
}

export default Navbar