import React from 'react'
import  Carousel  from 'framer-motion-carousel'
import store1 from '../../assets/logo1.jpg'
import store2 from '../../assets/logo2.jpg'

const assets = [
    {
        id:1,
        name: 'Wisebuyers Supermarket',
        imgsrc: store1
    },

    {
        id:2,
        name:'Intergral Supermarket',
        imgsrc: store2
    },
    {
        id:3,
        name: 'Value Exchange Supermarket',
        imgsrc: store1
    }
]

const RetailStores = () => {
  return (
    <div className='bg-violet-50 flex items-center justify-center mx-auto'>
    <div className=' w-1/2 bg-violet-200 '>
        <Carousel interval={3000} className=''>
        {
            assets.map(
                (asset)=>{
                    return(
                        <div key={asset.id} className=''>
                        <img alt='stores' draggable='false' src={asset.imgsrc} className='w-full h-70'/>
                        <h3 className='my-20'>{asset.name}</h3>
                        </div>
                    )
                }
            )
        }
        </Carousel>
    </div>
    </div>
  )
}

export default RetailStores