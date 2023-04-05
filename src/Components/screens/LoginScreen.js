import React from 'react'
import "../screens/LoginScreen.css";
import logo from "../images/Logonetflix.png"


function Loginscreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
          <img className='loginScreen_logo' src={logo} alt='netflix logo' />

          <button className='loginScreen_button'>
            Sign In
          </button>
        </div>
    </div>
  )
}

export default Loginscreen