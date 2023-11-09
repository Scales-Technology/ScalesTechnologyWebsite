import React from 'react'
import logo from "../../Assets/LOGO.png"

export default function Header() {
  return (
    <div className='Header'>
            <div className='HeaderLogo'>
              <img src={logo} alt='logo' />
            </div>
            <div>
              <input className='SearchInput' placeholder='Search'></input>
            </div>
            <div >
                <button className='HeaderButton'>
                    Login
                </button>
            </div>
        </div>
  )
}
