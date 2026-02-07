import Bike from "../assets/HomeBike.svg";
import Acess from "../assets/Access.svg";
import { motion } from "framer-motion";
import "../components/navbar.css";
import logo from "../assets/logo.webp";

import Scroll from "../components/scroll"; 

function Home() {
  return (
    <>
      <div className="main-content">
        <Scroll>
          <div className="hero">
            <div className="hero-heading">
        <h1>Time to Upgrade!!</h1>
              </div>
          </div>
          
          <div className="home-1">
                  <div className="hero-para">
              <p>At PIT Shop, we bring you premium bike accessories designed to enhance performance, style, and safety. From high-quality helmets and riding gear to performance upgrades and custom add-ons, everything you need to upgrade your ride is available in one place. Whether you're a daily rider or a speed enthusiast, PIT Shop helps you ride with confidence and attitude.🔥 </p>
              </div>
        <div className="home-bike">
          <motion.img src={Bike} alt="Bike" className="w-96"
              initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                />
            </div>
            </div>
            
            <h1>Accessories</h1>
          <div className="home-2">
            <div className="home-access">
              <img src={Acess} alt="Accessories" />
              </div>
            <div className="main-list">
              <ul>
                <li><strong>Helmets:</strong> Essential safety gear designed for impact protection and aerodynamics, with top brands including SMK, Shoei, Arai, and AGV.</li>
                <li><strong>Racing Exhausts:</strong> Engineered to improve airflow, reduce weight, and boost horsepower; industry leaders include Akrapovič, SC-Project, Termignoni, and Yoshimura.</li>
                <li><strong>Brake Discs: </strong>High-performance rotors that provide superior heat dissipation and stopping power, prominently manufactured by Brembo, Galfer, and EBC.</li>
                <li><strong>Engine Oil:</strong> Specialized lubricants that reduce internal friction and protect high-revving engines, with premium options from Motul, Castrol, Shell, and Liqui Moly.</li>
                <li><strong>Performance Air Filters</strong>: High-flow filters that allow more oxygen into the engine for better combustion, often branded by K&N, DNA Performance, and BMC.</li>
              </ul>
          </div>
          </div>

          <footer className="main-footer">
                <div className='footer-logo'>
                  <img src={logo} alt="logo" />
            </div>

            <div className="footer-text">
              <p>Karur | Call +91 75581 26820</p>
            </div>
        </footer>

          </Scroll>
        </div>
      </>
  )
}

export default Home