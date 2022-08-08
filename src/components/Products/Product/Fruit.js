import React, { useState } from 'react'
import PortalDemo from './PortalDemo'
import { MdAddShoppingCart } from 'react-icons/md'
import { useCart } from 'react-use-cart'



const Fruit = ({imgsrc, title,price, description, item}) => {
  const [modal, setModal] = useState(false)
  const handleShowMessage = ()=>{
    setModal(!modal)
  }
  
  const closeModal = ()=>{
    setModal(!modal)
  }


  const {addItem } = useCart()
  return (
    <> 
      <div className='w-1/4 h-45 mx-10  flex flex-col items-center justify-center md:-b-2
       sm:w-full sm:mx-4 sm:border-none ' >
        <div>
          <img src={imgsrc} className='w-20 h-20 rounded-full' alt='imag' onClick={handleShowMessage} />
        </div>
        <div className='font-mono text-base font-medium flex flex-col'>
          <h4 className=''>
            {title}
          </h4>
          <div className=' md:mb-8 flex md:flex-row md:justify-around sm:flex sm:flex-col sm:items-center sm:justify-center '>
            <span className='font-sans font-bold'>
              ${price}
            </span>
            
            {/*<button className='ml-4 text-bold' onClick={handleShowMessage}>Buy</button>*/}
            <MdAddShoppingCart size={20} className='md:ml-4 text-bold sm:ml-0 hover:bg-stone-200 hover:text-4xl 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={()=>addItem(item)}/>
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