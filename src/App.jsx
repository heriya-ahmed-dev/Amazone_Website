import React from 'react'
import Header from './Componenets/header';
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import InnerHeader from './Componenets/InnerHeader';
import CarouselPage from './Componenets/CarouselPage';
import Routing from './Routing';
import Rating from './Componenets/Rating';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </div>
  )
}

export default App;


