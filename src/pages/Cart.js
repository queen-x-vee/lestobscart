import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';



const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <div>
    <h1> Your Cart is Empty.</h1>
    <Link to='/'>
      <button>
        Add Items !
      </button>
    </Link></div>
  return (
    <>
    
          <div className='border-box'>
            <h5> Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
            <div className=' '>
              <div className=''>
                {items.map((item) => {
                  return (
                    <div key={item.id} className=' bg-violet-100 flex flex-col justify-center items-center m-16 border-b-black'>
                      <div className='w-1/4'>
                        <img src={item.imgsrc} className='h-24 w-full ' alt ='carts'/>
                      </div>
                      <h3 >
                        {item.title}
                      </h3>
                      <h3 >
                        {item.price}
                      </h3>
                      <h3 >
                        Quantity({item.quantity})
                      </h3>
                      <div className=''>
                        <button
                          className='py-0.75 px-3 bg-transparent hover:bg-black hover:text-white border border-black rounded m-3 '
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
                        <button
                          className='py-0.75 px-3 bg-transparent hover:bg-black hover:text-white border border-black rounded '
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> +</button>
                        <button
                        className='py-0.75 px-3 bg-red-600 hover:bg-red-500 hover:text-white rounded text-stone-800 mx-6 '
                         onClick={() => removeItem(item.id)}>Remove</button>
                      </div>
                    </div>)
                })}
              </div>
          </div>
        </div>
        <div>
          <h2>Total : $ {cartTotal}</h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <button className=' bg-lime-500 py-4 px-2 m-8 rounded text-xl font-mono font-bold w-3/4'>Buy Now</button>
          <button
          className='py-0.75 px-3 bg-red-600 hover:bg-red-500 hover:text-white rounded text-stone-800 mx-6 '
           onClick={() => emptyCart()}>Clear cart</button>
          
        </div>
      
    </>
  )
}


export default Cart