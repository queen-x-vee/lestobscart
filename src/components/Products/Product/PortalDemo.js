import React from 'react'
import ReactDOM from 'react-dom'
import { BiArrowBack } from 'react-icons/bi'



function PortalDemo(props) {
    const [count, setCount] = React.useState(0)
    const add = () => {
        setCount(prevCount => prevCount + 1)
    }
    const subtract = () => {
        setCount(prevCount => prevCount - 1)
    }
   

    return ReactDOM.createPortal(

        <div className='absolute top-0 bottom-0 left-0 right-0 grid justify-center items-center bg-white rounded h-3/4 w-3/4 mx-auto my-8'>
            <div className='flex flex-row gap-4 mx-4 mt-4' onClick={props.closeModal}>
                <BiArrowBack size={30} />
                <h4> Back </h4>
            </div>

            <div className='p-6 bg-white rounded inline-block h-full m-12 relative w-full justify-self-center grid grid-cols-2 gap-12'>
                <div>
                    <img src={props.image} alt='fruit' />
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <h1 className='inline-block'>
                        {props.title}
                    </h1>
                    <div className='flex justify-around py-4 px-12 mx-8'>
                        <span className='text-4xl'>
                            <button onClick={subtract}> - </button>
                        </span>
                        <span className='text-4xl'>
                            {count}
                        </span>

                        <span className='text-4xl'>
                            <button onClick={add} > + </button>
                        </span>
                    </div>
                    <button
                     className=' bg-lime-500 py-4 px-2 m-8 rounded text-xl font-mono font-bold w-3/4' 
                     onClick={props.addItem}>ADD TO CART</button>
                </div>

            </div>


        </div>, document.getElementById('modal-root')
    )
}

export default PortalDemo
