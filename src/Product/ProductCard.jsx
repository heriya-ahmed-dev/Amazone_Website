import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../Componenets/Rating'
const ProductCard = ({AddItems}) => {
    const {id} = useParams()
     const [prod,setProd] = useState([])
     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProd(data))
     },[id])
  return (
    <div>
       <div className='flex' >
              <div className='w-[250px]  mt-4  shadow-2xl rounded-[15px] p-2 ms-5'>
                <img src={prod.image} className='w-[200px] h-[200px]  object-contain mx-auto my-5'/>
              </div>
             <div className='m-5'>
                <h6 className='text-center line-clamp-2 h-[40px] mb-0 text-[black]'>{prod.title}</h6>
                <div className='w-[500px]'>
                <p>{prod.description}</p>
                </div>
                <div className='flex text-center ps-3'>
                    <Rating/>
                </div>
                <p className='ps-3 text-[20px] font-semibold'>${prod.price}</p>
                <div className='w-full bg-[orange] ps-2 p-1 rounded-[10px] hover:bg-[#FF8C00] text-center'>
                    <button className='mx-2' onClick={()=>AddItems(prod)}>Add to cart</button>
                    </div>
            </div>
     </div>
    </div>
  )
}

export default ProductCard