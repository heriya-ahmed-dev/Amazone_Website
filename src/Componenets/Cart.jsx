import React from 'react'
import Rating from './Rating'
const Cart = ({cartItems}) => {
  return (
    <div className='flex justify-between'>
    <div className=' m-5'>
        {cartItems.map((items)=>{
            return(
                <div key={items.id} className='w-[250px] shadow-2xl rounded-[15px] place-items-center m-2 my-4'>
                       <img src={items.image} className='w-[200px] h-[180px] object-contain m-5'/>
                       <h6 className='text-center px-2'>{items.title}</h6>
                       <Rating/>
                       <h6>${items.price}</h6>
                </div>
            )
        })}
       
    </div>
     <div className='m-5'>
           <p></p>
      </div>
    </div>
  )
}

export default Cart