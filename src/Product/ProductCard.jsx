import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../Componenets/Rating'
const ProductCard = () => {
    const {id} = useParams()
     const [prod,setProd] = useState([])
     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProd(data))
     },[id])
  return (
    <div>
       <div  className='w-[300px]  mt-4  shadow-2xl rounded-[15px] p-2 m-auto'>
                <img src={prod.image} className='w-[250px] h-[250px] object-contain mx-auto my-2'/>
                <h6 className='text-center line-clamp-2 h-[40px] mb-0 text-[black]'>{prod.title}</h6>
                <div className='flex text-center ps-3'>
                    <Rating/>
                </div>
                <p className='ps-3 text-[20px] font-semibold'>${prod.price}</p>
                <div className='w-[110px] bg-[orange] ps-2 p-1 rounded-[10px] hover:bg-[#FF8C00] text-center mx-2'>
                    <button className='mx-2'>Add to cart</button>
                    </div>
            </div>
    </div>
  )
}

export default ProductCard