import React from 'react'
import { useState, useEffect } from 'react';
import Rating from '../Componenets/Rating';
const Mens = () => {
   const [Mens, SetMens] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((res)=> res.json())
        .then((data)=> SetMens(data))
    },[])
    console.log(Mens)
  return (
    <div className=' m-5 grid  grid-cols-3'>
        {Mens.map((items)=>{
              return(
                <div key={items.id} className='w-[300px] shadow-2xl rounded-[15px] place-items-center m-2 my-4'>
                       <img src={items.image} className='w-[250px] h-[200px] object-contain m-3'/>
                       <h6 className='text-center px-2 h-[30px]'>{items.title}</h6>
                       <Rating/>
                </div>
            )
        })}
    </div>
  )
}

export default Mens