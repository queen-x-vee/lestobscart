import React from 'react'
import FruitData from './Product/FruitData'
import Fruit from './Product/Fruit'

const Products = () => {
  return (
    <>
    <div className='flex flex-row my-12'>
        {FruitData.map((fruit)=>{
            return(
                <Fruit
                key = {fruit.id}
                imgsrc = {fruit.imgsrc} 
                title = {fruit.title}
                price = {fruit.price}
                
                />
            )
        })}
    </div>
    </>
  )
}

export default Products