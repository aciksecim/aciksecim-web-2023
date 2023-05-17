import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.png'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <div className='h-16 w-full flex justify-center items-center bg-white'>
        <Link href="/">
          <Image src={Logo} width={160} height={26} alt='logo' />
        </Link>
      </div>
    </>
  )
}

export default Nav