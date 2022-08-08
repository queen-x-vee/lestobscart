import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

const Drinks = (props) => {
  return (
    <>
      <div className='w-1/4 h-45 mx-10  flex flex-col items-center justify-center border-b-2
      sm:w-full   sm:mx-4 sm sm:border-none'>
        <div>
          <img src={props.imgsrc} className='w-20 h-20 rounded-full' alt = 'imag'  />
        </div>

        <div className=' font-mono text-base font-medium '>
          <h4 className=''>
            {props.title}
          </h4>
          <div className='md:mb-8 flex md:flex-row md:justify-around sm:flex sm:flex-col sm:items-center sm:justify-center '>
            <span className='font-sans font-bold'>
              ${props.price}
            </span>
            <MdAddShoppingCart size={20} className='md:ml-4  sm:ml-0 hover:bg-stone-200 hover:text-4xl 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
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