import React from 'react'
import jewlery from '../Images/jewlery.jpeg';
import mens from '../Images/mens.webp';
import dress from '../Images/dress.jpeg';
import electron from '../Images/LT.webp'
import { Link } from 'react-router-dom';
const Category = () => {
    const catagory_data = [
        {id: 1,
         url : mens,
         title: "Men's Clothing",
         link : '/mens'
        },
        {id: 2,
         url : dress,
         title : 'Discover fashion Trens',
         link : '/womens'
        },
        {id: 3,
         url : electron,
         title: 'electronics',
         link : '/electronics'
        },
        {id: 4,
         url : jewlery,
         title:"jewellery",
         link : '/jewellery'
        },
    ] 
  return (
    <div className='flex justify-between mt-[-100px] relative mx-3 bg-white/85'>
        {catagory_data.map((items)=>{
            return(
                <Link to={items.link} className='text-decoration-none'>
                <div  key={items.id} className='w-[270px]  h-[300px] object-contain  bg-[whitesmoke] rounded-[5px]'>
                    <h5 className='ps-4'>{items.title}</h5>
                    <img src={items.url} className='w-[250px] h-[250px] object-contain to-transparent m-auto'/>    
                </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Category