import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar.jsx'
import Home from "./pages/home.jsx"
import Products from './pages/products.jsx'
import Cart from "./pages/cart.jsx"


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
