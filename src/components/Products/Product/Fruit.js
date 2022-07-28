import React from 'react'


const Fruit = (props) => {
  return (
    <>
      
      <div className='w-1/4 h-45 mx-18 flex flex-col items-center justify-center border-b-2'>
        <div>
          <img src={props.imgsrc} className='w-20 h-20 rounded-full' alt='imag' />
        </div>

        <div className='font-mono text-base font-medium'>
          <h4 className=''>
            {props.title}
          </h4>
          <div className='mb-8 '>
            <span>
              ${props.price}
            </span>
            {/*<span className='m'>
              <FaShoppingCart />
              </span>*/}
          </div>
          

        </div>
      </div >
      
    </>
  )
}

export default Fruit