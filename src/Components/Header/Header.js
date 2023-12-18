import React, {useState} from 'react'
import logo from "../../Assets/LOGO.png"
import { FiMenu } from 'react-icons/fi';
import { FcAbout } from "react-icons/fc";
import { MdHomeRepairService, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='Header'>
            <div className='HeaderLogo'>
              <a href='/'> <img src={logo} alt='logo' /></a>
             
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <FiMenu />
            </div>

            {showMenu && (
              <ul className="menu-list">
                <a href='/ourproducts'> <li><MdOutlineProductionQuantityLimits />Our Products</li></a>
                <a href='/repairandservices'><li><MdHomeRepairService />Repairs and Solutions</li></a>
                <a href='/aboutus'><li ><FcAbout />About Us</li></a>
                <a href='/contactus'><li><SlCallOut />Contact Us</li></a>
                {/* Add more menu items as needed */}
              </ul>
            )}
            <div className='mlist'>
              <ul className='mlistcontainer'>
                <a href='/ourproducts'><li>Our Products</li></a>
                <a href='/repairandservices'><li>Repairs and Servicing</li></a>
                <a href='/aboutus'><li>About Us</li></a>
                <a href='/contactus'><li>Contact Us</li></a>
              </ul>
            </div>
            {/*
            <div>
              <input className='SearchInput' placeholder='Search ... '></input>
            </div>
            */}
        </div>
  )
}
