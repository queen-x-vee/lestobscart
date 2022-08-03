import React from 'react'
import ReactDOM from 'react-dom'
import {BiArrowBack} from 'react-icons/bi'


function PortalDemo(props) {
    const [count, setCount] = React.useState(0)
    const add = ()=>{
        setCount(prevCount=>prevCount +1)
    }
    const subtract = ()=>{
        setCount(prevCount=>prevCount - 1)
    }

  return ReactDOM.createPortal(
    
    <div className='absolute top-0 bottom-0 left-0 right-0 grid justify-center items-center bg-white h-3/4 w-3/4 mx-auto my-8'>
        <div className='flex flex-row gap-4 mx-4 mt-4' onClick={props.closeModal}>
            <BiArrowBack size={30}/>
            <h4> Back </h4>
        </div>
        
        <div className='p-6 bg-white rounded inline-block h-full m-12 relative w-full justify-self-center grid grid-cols-2 gap-12'>
            <div>
                <img src={props.image} alt='fruit'/>
            </div>
            <div className='flex flex-col justify-center text-center'>
               <h1 className='inline-block'>
                {props.title}
                </h1>
                <span>
                    <button onClick={subtract}> - </button>
                </span>
                {count}
                <span>
                    <button onClick={add} > + </button>
                </span>
                <button className=' bg-sky-500'>ADD TO CART</button>
            </div>
        
        </div>
        
        
    </div>, document.getElementById('modal-root')
  )
}

export default PortalDemo
