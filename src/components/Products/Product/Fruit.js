import React, { useState } from 'react'
import PortalDemo from './PortalDemo'


const Fruit = ({imgsrc, title,price, description}) => {
  const [modal, setModal] = useState(false)
  const handleShowMessage = ()=>{
    setModal(!modal)
  }
  
  const closeModal = ()=>{
    setModal(!modal)
  }
  return (
    <> 
      <div className='w-1/4 h-45 mx-18 flex flex-col items-center justify-center border-b-2'>
        <div>
          <img src={imgsrc} className='w-20 h-20 rounded-full' alt='imag' />
        </div>
        <div className='font-mono text-base font-medium flex flex-col'>
          <h4 className='text-center'>
            {title}
          </h4>
          <div className=' mb-8 flex flex-row justify-around'>
            <span>
              ${price}
            </span>
            
            <button className='ml-4 text-bold' onClick={handleShowMessage}>Buy</button>
            {modal? (<PortalDemo 
            closeModal={closeModal}
            title={title}
            image={imgsrc}
            description={description}/>): null}
          </div>
          
   
        </div>

        
        
      </div >
      
      
    </>
  )
}

export default Fruit