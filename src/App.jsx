import React from 'react'
import Header from './Componenets/header';
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import InnerHeader from './Componenets/InnerHeader';
import CarouselPage from './Componenets/CarouselPage';
import Products from './Images/Products';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <InnerHeader/>
        <CarouselPage/>
        <Products/>
      </BrowserRouter>
    </div>
  )
}

export default App