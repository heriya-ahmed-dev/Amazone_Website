import React from 'react'
import { useState,useEffect } from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    console.log(products)
  return (
    <div className='grid grid-cols-4 justify-content-center w-[1100px] m-auto mb-4'>
     {products.map((items)=>{
        return(
            <Link to={`products/${items.id}`} className='text-decoration-none text-[#bada55]'>
            <div key={items.id} className='w-[250px]  mt-5  shadow-2xl rounded-[10px] p-2 h-[380px]'>
                <img src={items.image} className='w-[150px] h-[180px] object-contain mx-auto my-2'/>
                <h6 className='text-center line-clamp-2 h-[40px] mb-0 text-[black]'>{items.title}</h6>
                <div className='flex text-center ps-3'>
                    <Rating/>
                </div>
                <p className='ps-3 text-[20px] font-semibold'>${items.price}</p>
                <div className='w-[110px] bg-[orange] ps-2 p-1 rounded-[10px] hover:bg-[#FF8C00] text-center mx-2'>
                    <button className='mx-2'>Add to cart</button>
                    </div>
            </div>
            </Link>
        )
     })}
        
    </div>
  )
}

export default Products;