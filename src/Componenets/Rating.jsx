import React from 'react'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";

const Rating = () => {
    const [rating,setRating] = useState(0);
    const [hover,sethover] = useState(0)

    const stars = [1,2,3,4,5]
  return (
    <div className='text-center flex gap-[30px]'>
    <div className='text-center flex justify-center gap-[5px] w-[120px] m-auto'>
        {
            stars.map((item,index)=>{
             
             return(
                <FaStar
                className='center m-auto flex'
                key={index}
                  size={40}
                  onClick={()=>setRating(item)}
                  onMouseEnter={()=>sethover(item)}
                  onMouseLeave={()=>sethover(0)}
                  color={item <= (hover || rating) ? "orange" : 'gray' }
                />
             )
            })
           
        }
        
    </div>
        <h4 className='mt-2'>{rating}</h4>
    </div>
  )
}

export default Rating