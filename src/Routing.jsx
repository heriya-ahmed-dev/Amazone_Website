import React from 'react';
import Jewellery from './Category/Jewellery';
import Electronics from './Category/Electronics';
import Mens from './Category/Mens';
import Womens from './Category/Womens';
import { Route , Routes } from 'react-router-dom';
import Header from './Componenets/header';
import Cart from './Componenets/Cart';
import Order from './Componenets/Order';
import ProductCard from './Product/ProductCard';
import CarouselPage from './Componenets/CarouselPage';
import Products from './Componenets/Products';
import { useState } from 'react';
const Routing = () => {

  const [cart,setCart] = useState(0);
  const [cartItems,setCartItems] = useState([]);


  
    const AddItems = (product) =>{
       setCart(prev => prev + 1)
       setCartItems(prev => [...prev,product])
    }

  return (
    <div className=''>
        <Header cart = {cart}/>
        <Routes>
            <Route path='/products/:id' element={<ProductCard AddItems={AddItems}/>}/>
            <Route path='/cart' element ={<Cart cartItems={cartItems} cart = {cart}/>}/>
            <Route path='/order' element ={<Order/>}/>
            <Route path= '/' element = {<>
               <CarouselPage/>
               <Products AddItems = {AddItems}/>
            </>}/>
            <Route path='/jewellery' element = {<Jewellery/>}/>
            <Route path='/electronics' element = {<Electronics/>}/>
            <Route path='/mens' element = {<Mens/>}/>
            <Route path='/womens' element = {<Womens/>}/>
        </Routes>
    </div>
  )
}

export default Routing;


