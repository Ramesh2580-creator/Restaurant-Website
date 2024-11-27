import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './component/Footer';
import Login from './component/Login';

const App = () => {

const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {/* {showLogin?<Login/>:<></>} */}
    {showLogin && <Login setShowLogin={setShowLogin} />}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;