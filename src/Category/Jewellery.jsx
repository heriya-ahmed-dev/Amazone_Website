import React from 'react'
import { useState, useEffect } from 'react';
import Rating from '../Componenets/Rating';
const Jewellery = () => {
   const [Jewellery, SetJewellery] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then((res)=> res.json())
        .then((data)=> SetJewellery(data))
    },[])
    console.log(Jewellery)
  return (
    <div className=' m-5 grid  grid-cols-3'>
        {Jewellery.map((items)=>{
             return(
                <div key={items.id} className='w-[300px] shadow-2xl rounded-[15px] place-items-center m-2 my-4'>
                       <img src={items.image} className='w-[250px] h-[200px] object-contain m-3'/>
                       <h6 className='text-center px-2 h-[40px] line-clamp-2'>{items.title}</h6>
                       <Rating/>
                </div>
            )
        })}
    </div>
  )
}

export default Jewellery