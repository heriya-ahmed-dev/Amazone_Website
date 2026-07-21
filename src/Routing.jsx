import React from 'react';
import Jewellery from './Category/Jewellery';
import Electronics from './Category/Electronics';
import Mens from './Category/Mens';
import Womens from './Category/Womens';
import { Route , Routes } from 'react-router-dom';
import LayOut from './LayOut/LayOut';
import Header from './Componenets/header';
import Cart from './Componenets/Cart';
import Order from './Componenets/Order';
const Routing = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='/order' element ={<Order/>}/>
            <Route path= '/' element = {<LayOut/>}/>
            <Route path='/jewellery' element = {<Jewellery/>}/>
            <Route path='/electronics' element = {<Electronics/>}/>
            <Route path='/mens' element = {<Mens/>}/>
            <Route path='/womens' element = {<Womens/>}/>
        </Routes>
    </div>
  )
}

export default Routing;


