import React from 'react'
import Rating from './Rating'
const Cart = ({cartItems,cart}) => {

  const TotalPrice = cartItems.reduce((sum,item)=>{
         return sum + item.price
  },0)
  return (
    <div className='flex justify-center'>
    <div className=' m-5'>
        {cartItems.map((items)=>{
            return(
                <div key={items.id} className='w-[250px] shadow-2xl rounded-[15px] place-items-center m-2 my-4'>
                       <img src={items.image} className='w-[200px] h-[180px] object-contain m-5'/>
                       <h6 className='text-center px-2'>{items.title}</h6>
                       <Rating/>
                       <p></p>
                       <h6>${items.price}</h6>
                </div>
            )
        })}
       
    </div>
     <div className='m-5 w-[300px] bg-[orange] h-[150px] rounded-[10px] text-center'>
      <h4>Total Items</h4>
      <h4>{cart}</h4>
      <h4>Total Price</h4>
      <h4 className='text-[blue]'>${TotalPrice}</h4>
           
      </div>
    </div>
  )
}

export default Cart