import React from 'react'
import FruitData from './Product/FruitData'
import Fruit from './Product/Fruit'
import DrinksData from './Product/DrinksData'
import Drinks from './Product/Drinks'
const Products = () => {
  return (
    <>
    <h3 className='inline-block mx-8 my-4 font-mono text-lg font-semibold bg-violet-500'>
        Grocery Selection
    </h3>
    <div className='flex justify-around px-16 w-full  pb-12 '>
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

    <h3 className='inline-block mx-8 my-4 font-mono text-lg font-semibold' >
        Grocery Selection
    </h3>
    <div className='flex justify-around px-16 w-full pb-12 '>
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

    <h3 className='inline-block mx-8 my-4 font-mono text-lg font-semibold' >
        Grocery Selection
    </h3>
    <div className='flex justify-around px-16 w-full pb-12 '>
        {DrinksData.map((drink)=>{
            return(
                <Drinks
                key = {drink.id}
                imgsrc = {drink.imgsrc} 
                title = {drink.title}
                price = {drink.price}
                
                />
            )
        })}
    </div>
    </>
  )
}

export default Products