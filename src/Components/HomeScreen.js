import React from 'react'
import "../Components/CSS/HomeScreen.css";
import Nav from "./Nav.js";
import Banner from "./Banner.js";

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <Nav />

        {/* Banner */}

        <Banner />

        {/* Row */}
        
    
    </div>

    
  )
}

export default HomeScreen