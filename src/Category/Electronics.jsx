import React from 'react'
import { useState, useEffect } from 'react'
import Rating from '../Componenets/Rating'
const Electronics = () => {
   const [Electronics, SetElectronics] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res)=> res.json())
        .then((data)=> SetElectronics(data))
    },[])
    console.log(Electronics)
  return (
    <div className=' m-5 grid  grid-cols-3'>
        {Electronics.map((items)=>{
            return(
                <div key={items.id} className='w-[300px] shadow-2xl rounded-[15px] place-items-center m-2 my-4'>
                       <img src={items.image} className='w-[250px] h-[200px] object-contain m-5'/>
                       <h6 className='text-center px-2'>{items.title}</h6>
                       <Rating/>
                </div>
            )
        })}
    </div>
  )
}

export default Electronics