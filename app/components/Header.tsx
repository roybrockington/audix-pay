import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-black w-full flex justify-around p-6 sticky'>
            <Image 
                src="https://audixusa.com/wp-content/uploads/2020/05/logo-light-text.svg"
                alt="Audix USA"
                width={128}
                height={40}
            />
            <p className='flex flex-col font-audix text-white uppercase'>
                <span className='font-bold'>Show Deals</span>
                <span className='font-light'>TUKDS 2024</span>
            </p>
        </div>
    )
}

export default Header
