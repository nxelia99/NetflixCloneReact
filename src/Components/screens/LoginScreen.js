import React, { useState } from 'react'
import "../screens/LoginScreen.css";
import logo from "../images/Logonetflix.png"
import SignupScreen from './SignupScreen';

function Loginscreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
          <img className='loginScreen_logo' src={logo} alt='netflix logo' />
          <button onClick={() => setSignIn(true)} className='loginScreen_button'>
            Sign In
          </button>

          <div className='loginScreen_gradient' />
        </div>
        <div className='loginScreen_body'>
          {signIn ? (
            <SignupScreen />
          ) : (

          
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='loginScreen_input'>
              <form>
                <input type='email' placeholder='Email Address' />
                <button  onClick={() => setSignIn(true)} className='loginScreen_getStarted'>GET STARTED</button>
              </form>
            </div>
          </> )}
        </div>
    </div>
  )
}

export default Loginscreen