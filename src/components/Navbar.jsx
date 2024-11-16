import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4 mx-8'>
        <div>
            <h1 className='text-gray-800 hover:text-gray-950 text-2xl
            font-bold mr-10 cursor-pointer '>E-Book Store</h1>
        </div>
        <div className=' flex item-center space-x-4'>
            <a className='text-gray-950 px-4 py-1 rounded border-2 border-gray-700
             transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700' href="">Login
            </a>
            <a className='text-gray-950 px-4 py-1 rounded border-2 border-gray-700
             transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700' href="">Create Account 
            </a>
        </div>
    </nav>
  )
}

export default Navbar