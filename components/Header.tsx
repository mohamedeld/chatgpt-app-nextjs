import Link from 'next/link'
import React from 'react'
import UserButton from './UserButton'

const Header = () => {
  return (
    <header className='text-while font-bold bg-green-900 text-2xl p-4 flex justify-between items-center'>
      <div className='flex flex-grow text-white'>
        <Link href="/">Chatgpt </Link>
        <Link href="/about" className='ml-5 font-light'>
        About
        </Link>
      </div>  
      <div>
        <UserButton/>
      </div>
    </header>
  )
}

export default Header