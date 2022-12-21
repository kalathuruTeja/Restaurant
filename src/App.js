import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home"
import NotFound from './NotFound'
import Order from './Order'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element ={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

