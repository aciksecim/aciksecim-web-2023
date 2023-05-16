import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.png'

const Nav = () => {
  return (
    <>
        <div className='h-16 w-full flex justify-center items-center bg-white'>
            <Image src={Logo} width={160} height={26} alt='logo'/>
        </div>
    </>
  )
}

export default Nav