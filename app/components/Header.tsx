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
            <p className='font-audix text-white font-bold uppercase'>Show Deals</p>
        </div>
    )
}

export default Header
