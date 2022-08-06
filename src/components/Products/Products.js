import React from 'react'
import FruitData from '../../Data/FruitData'
import Fruit from './Product/Fruit'
import DrinksData from '../../Data/DrinksData'
import Drinks from './Product/Drinks'

const Products = () => {
  return (
    <>
    <h3 className='inline-block mx-8 my-4 font-mono text-lg font-semibold '>
        Grocery Selection
    </h3>
    <div className='md:flex md:justify-around md:px-16 md:w-full  md:pb-12 
    sm:grid sm:grid-rows-2 sm:grid-flow-col  sm:mx-4 sm:px-4 sm:w-full sm:pb-12 
    '>
        
        {FruitData.map((fruit)=>{
            return(
                <Fruit
                key = {fruit.id}
                imgsrc = {fruit.imgsrc} 
                title = {fruit.title}
                price = {fruit.price}
                description = {fruit.description}
                item = {fruit}
                
                />
            )
        })}
        {/*<PortalDemo/>*/}
    </div>

    <h3 className='inline-block mx-8 my-4 font-mono text-lg font-semibold' >
        Grocery Selection
    </h3>
    <div className='md:flex md:justify-around md:px-16 md:w-full  md:pb-12 
     sm:grid sm:grid-rows-2 sm:grid-flow-col sm:mx-4 sm:px-4 sm:w-full 
     '>
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
    <div className='md:flex md:justify-around md:px-16 md:w-full  md:pb-12 
     sm:grid sm:grid-rows-2 sm:grid-flow-col sm:mx-4 sm:px-4 sm:w-full 
     '>
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