import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTimes, FaBars, FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  const[show, setShow] = useState(false)
  const handleClick =()=>{
    setShow(!show)
  }
  return (
    <>
     <div className='flex justify-between p-4 w-full  bg-violet-50 h-32'>

      <ul className= {show?'flex flex-col items-center w-1/4 h-screen bg-violet-400 absolute top-0 left-0 z-10' : 'absolute -left-full'} >
        <li className='py-4 px-0'>
          <Link to=''>
            Home
          </Link>
        </li>
        <li className='py-4 px-0'>
          <Link to=''>
            Profile
          </Link>
        </li>
        <li className='py-4 px-0'>
          <Link to=''>
            About
          </Link>
        </li>

      </ul>
      <div onClick={handleClick} className='z-20'>
      {show? (<FaTimes size={20} />): (<FaBars/>)}

      </div>

      <h1>Lestobes</h1>

      <Link to='/cart'>
        <FaShoppingCart/>
      </Link>
      
      
      </div>
    </>
  )
}

export default Navbar