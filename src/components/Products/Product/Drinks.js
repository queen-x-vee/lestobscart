import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Drinks = (props) => {
  return (
    <>
      <div className='w-1/4 h-45 mx-18  flex flex-col items-center justify-center border-b-2'>
        <div>
          <img src={props.imgsrc} className='w-20 h-20 rounded-full' />
        </div>

        <div className=' font-mono text-base font-medium '>
          <h4 className=''>
            {props.title}
          </h4>
          <div className='flex mb-8 '>
            <span>
              ${props.price}
            </span>
            {/*<span className='m'>
              <FaShoppingCart />
              </span>*/}
          </div>
          
         {/*  <button className='border-solid border-4 border-zinc-900 px-8 hover:border-violet-500'>
            <Link to='/'>
              VIEW PRODUCT
            </Link>
           </button>*/}

        </div>
      </div >
    </>
  )
}

export default Drinks