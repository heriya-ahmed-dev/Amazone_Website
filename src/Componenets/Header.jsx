import React from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './head.css'
import InnerHeader from './InnerHeader.jsx';
import { useState } from 'react';
import Products from './Products.jsx';
const Header = ({cart}) => {
  
  
  return (
    <div className='sticky top-0 z-[9999]'>
   <div className=''>
    <div className='d-flex text-light main'>
      <div className='d-flex '>
         <Link to='/'>
            <img src="https://i.pinimg.com/736x/fa/16/b8/fa16b892512b3df516211c68fc489134.jpg" alt="Amazon_logo"
              className='Amazon_logo hovering'
            />
         </Link>
         <div className='d-flex mt-1 hovering'>
            <LocationOnOutlinedIcon className='my-2 mx-2'/>
            <p>Delivered To<br/><span className='fs-5 fw-semibold'>Ethiopia</span></p>
         </div>
      </div>
       <div>
        <input
          type="text" placeholder="Search your Favorite" className="ms-2 w-[650px] h-[43px] mt-[20pxpx] rounded-xl border-2 border-gray-300 outline-none bg-white text-black px-3"/>
      </div>
     
        <div className='d-flex'>
        <img src="https://i.pinimg.com/736x/ff/76/57/ff7657010677b3dbe75fe03c5de5a8d7.jpg"
          className='flag  mt-3 ms-2 hovering'
         />
         <h6 className=' mt-3 ms-2 hovering'>EN</h6>
        
         <ExpandMoreOutlinedIcon className='mt-3'/>
         <div className='d-flex  mt-1 ms-3'>
            <Link to="/list" className='hovered text-decoration-none' >
             <span className='text-white'> Sign in <br/>Accounts & lists </span>
           </Link>
            <Link to = "/order" className='ms-3 hovered text-decoration-none Link-light' href="Orders">
              <span className='text-white'>returns <br/>& orders</span>
            </Link>
            <Link to="/cart" className='ms-3 relative h-1 text-decoration-none'>
             <h5 className='link-light'>{cart}</h5>
            <ShoppingCartOutlinedIcon className=' mt-4 w-[50px] hovering text-white absolute -top-2 -right-2' />.
            </Link>
         </div>
      </div>
   

    </div>
           
    </div>
    <div className='inner-test'> <InnerHeader/> </div>
     
    </div>
  )
}

export default Header