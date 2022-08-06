import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

const Drinks = (props) => {
  return (
    <>
      <div className='w-1/4 h-45 mx-18  flex flex-col items-center justify-center border-b-2
      sm:w-full   sm:mx-4 sm sm:border-none'>
        <div>
          <img src={props.imgsrc} className='w-20 h-20 rounded-full' alt = 'imag'  />
        </div>

        <div className=' font-mono text-base font-medium '>
          <h4 className=''>
            {props.title}
          </h4>
          <div className='mb-8 flex flex-row justify-around sm:flex sm:flex-col sm:items-center sm:justify-center '>
            <span>
              ${props.price}
            </span>
            <MdAddShoppingCart size={20} className='ml-4 text-bold sm:ml-0'/>
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