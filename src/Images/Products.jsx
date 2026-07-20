import React from 'react'
import { useState,useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
const Products = () => {
    const [products,setProducts] = useState([]);
    const [rating,setRating] = useState(0);
    const [hover,sethover] = useState(0);
    const star = [1,2,3,4,5]
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    console.log(products)
  return (
    <div className='grid grid-cols-4 justify-content-center w-[1100px] m-auto'>
     {products.map((items)=>{
        return(
            <div key={items.id} className='w-[250px]  mt-5  shadow-2xl rounded-[10px] p-2 h-[500px]'>
                <img src={items.image} className='w-[150px]'/>
                <h6 className='center'>{items.title}</h6>
                <div className='flex ps-1'>
                    {star.map((items)=>{
                        return(
                            <FaStar
                            key={items}
                              onMouseOver={()=>sethover(items)}
                              onClick={()=>setRating(items)}
                              onMouseLeave={()=>sethover(0)}
                              color={items <= (hover || rating) ? 'orange' : 'gray'}
                            />
                        )
                    })}
                </div>
                <p className='ps-1'>${items.price}</p>
                <div className='w-[110px] bg-[orange] ps-2 p-1 rounded-[10px] hover:bg-[#FF8C00]'>Add to cart</div>
            </div>
        )
     })}
        
    </div>
  )
}

export default Products;