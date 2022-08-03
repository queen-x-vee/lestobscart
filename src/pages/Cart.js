import React from 'react'
import FruitData from '../Data/FruitData'
import Navbar from '../components/Navbar/Navbar'
import DrinksData from '../Data/DrinksData'


const Cart = () => {

  const { id, title,price,imgsrc, description } = FruitData[1]
  return (
    <>
    <div className='bg-white rounded overflow-hidden shadow-md w-1/4'>
        <img src={imgsrc} alt='a fruit' className='h-40 w-full'/>
      
      <div >
        <span><h3>{title}</h3></span>
        <span><p>{description}</p></span>
      </div>
      <button> + </button>
      
      <button> - </button>
    </div>
      {/*<div className='relative before:bg-violet-500 before:top-0 before:left-0 before:absolute 
        before:translate-x-4 before:translate-y-4  before:h-full before:w-50 before:-z-10'> LAYERED CARD</div>*/}
    </>
  )
}

export default Cart