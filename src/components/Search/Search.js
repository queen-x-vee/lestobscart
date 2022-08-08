import React from 'react'
import { BiSearch } from 'react-icons/bi'
import FruitData from '../../Data/FruitData'

 const Search = () => {

  return (
    <div className='m-0 p-0 border-box'>
        <div className='w-full min-h-50 p-1/12 flex items-center justify-center'>
            
            <form className=' max-w-60 border border-violet-200 bg-gray-100 flex items-center rounded-lg py-3 px-6 my-4'>
                <input type='text' placeholder='search' name='q' className='bg-transparent flex-1 border-none outline-none '/>
                <button type ='submit'><BiSearch/></button>
            </form>

        </div>

        {FruitData.map((item)=>{
                return(
                    <div></div>
                )
            })}
    </div>
  )
}

export default Search
