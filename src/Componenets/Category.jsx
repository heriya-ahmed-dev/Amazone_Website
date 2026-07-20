import React from 'react'
import jewlery from '../Images/jewlery.jpeg';
import mens from '../Images/mens.webp';
import dress from '../Images/dress.jpeg';
import electron from '../Images/LT.webp'
import { title } from 'framer-motion/client';
const Category = () => {
    const catagory_data = [
        {id: 1,
         url : mens,
         title: "Men's Clothing"
        },
        {id: 2,
         url : dress,
         title : 'Discover fashion Trens'
        },
        {id: 3,
         url : mens,
         title: 'Electronics'
        },
        {id: 4,
         url : jewlery,
         title:"Jewellery"
        },
    ]
  return (
    <div className='flex justify-between mt-[-100px] relative mx-3 bg-white/85'>
        {catagory_data.map((items)=>{
            return(
                <div key={items.id} className='w-[250px] bg-[white]'>
                    <h5 className='ps-4'>{items.title}</h5>
                    <img src={items.url} className='w-[220px] to-transparent m-auto'/>
                </div>
            )
        })}
    </div>
  )
}

export default Category