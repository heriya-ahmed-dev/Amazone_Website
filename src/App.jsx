import React from 'react'
import Header from './Componenets/header';
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  )
}

export default App