import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductCard = () => {
    const {id} = useParams()
     const [prod,setProd] = useState([])
     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProd(prod))
     },[id])
  return (
    <div>
        <img src={prod.image}/>
    </div>
  )
}

export default ProductCard