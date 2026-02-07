import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../assets/logo.webp";

function Navbar() {

  return (
    <>
      <div className='head'>
        <div className='logo'>
          <img src={logo} alt="logo" />
              </div>
              <nav className="navbar">
                  <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;