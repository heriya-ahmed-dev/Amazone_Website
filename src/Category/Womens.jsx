import React from 'react'
import { useState, useEffect } from 'react'
import Rating from '../Componenets/Rating'
const Womens = () => {
   const [Womens, SetWomens] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then((res)=> res.json())
        .then((data)=> SetWomens(data))
    },[])
   
  return (
    <div className=' m-5 grid  grid-cols-3'>
        {Womens.map((items)=>{
            return(
                <div key={items.id} className='w-[300px] shadow-2xl rounded-[15px] place-items-center m-2 my-4'>
                       <img src={items.image} className='w-[250px] h-[200px] object-contain m-3'/>
                       <h6 className='text-center px-2 h-[20px] line-clamp-2'>{items.title}</h6>
                       <Rating/>
                        <h6>${items.price}</h6>
                </div>
            )
        })}
    </div>
  )
}

export default Womens