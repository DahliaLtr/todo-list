import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='w-ful h-16 flex items-center px-14 justify-between bg-sky-500'>
        <Link to={"/"} className='font-semibold font-serif bg-white rounded-lg hover:bg-sky-500 hover:border-2 hover:border-white hover:shadow-md py-2 px-2' >My ToDo List</Link>
        <Link to={"Timer"} className='bg-white font-semibold font-serif rounded-lg py-2 px-2 hover:bg-sky-500 hover:border-2 hover:border-white hover:shadow-md'>Timer</Link>
    </div>
    </>
  )
}

export default Navbar