import React from 'react'
import Category from '../Componenets/Category';
import CarouselPage from '../Componenets/CarouselPage';
import Products from '../Componenets/Products';
const LayOut = () => {
  return (
    <div className='z-0'>
        <CarouselPage/>
        <Products/>

    </div>
  )
}

export default LayOut;