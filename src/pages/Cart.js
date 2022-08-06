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
    <div className='w-full h-full bg-zinc-50'>
      <section className='py-4 container bg-purple-200 '>
        <div className='flex justify-center flex-col items-center'>
          <div className=''>
            <h5> Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
            <table className='table-auto border  m-12'>
              <tbody className='table-row-group'>
                {items.map((item) => {
                  return (
                    <tr key={item.id} className=' bg-violet-100 table-row hover:bg-purple-100'>
                      <td className='table-cell p-4'>
                        <img src={item.imgsrc} className='h-24 ' alt ='carts'/>
                      </td>
                      <td className='table-cell p-4'>
                        {item.title}
                      </td>
                      <td className='table-cell p-4'>
                        {item.price}
                      </td>
                      <td className='table-cell p-4'>
                        Quantity({item.quantity})
                      </td>
                      <td className='table-cell p-4'>
                        <button
                          className='py-0.75 px-3 bg-transparent hover:bg-black hover:text-white border border-black rounded m-3 '
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
                        <button
                          className='py-0.75 px-3 bg-transparent hover:bg-black hover:text-white border border-black rounded '
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> +</button>
                        <button
                        className='py-0.75 px-3 bg-red-600 hover:bg-red-500 hover:text-white rounded text-stone-800 mx-6 '
                         onClick={() => removeItem(item.id)}>Remove</button>
                      </td>
                    </tr>)
                })}
              </tbody>
          </table>
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
      </div>
    </section>
    </div>
    </>
  )
}


export default Cart