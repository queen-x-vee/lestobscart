import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Fruit = (props) => {
  return (
    <>
      <div className='w-72 h-70 mx-8 '>
        <div>
          <img src={props.imgsrc} className='w-full h-60 rounded-full' />
        </div>

        <div className=''>
          <h4 className='text-center'>
            {props.title}
          </h4>
          <div className='flex '>
            <span>
              {props.price}
            </span>
            <span className='m'>
              <FaShoppingCart />
            </span>
          </div>
          <button className='border-solid border-8 border-zinc-900 px-8 hover:border-violet-500'>
            <Link to='/'>
              VIEW PRODUCT
            </Link>
          </button>

        </div>
      </div>
    </>
  )
}

export default Fruit