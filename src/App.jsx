import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter , Link, Routes } from 'react-router-dom'
import Index from './pages/Index'


function App() {


  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Index/> } />
       
       



      </Routes>
      
      
      
      </BrowserRouter> 
  )
}

export default App
