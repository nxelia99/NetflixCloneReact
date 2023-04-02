import React from 'react'
import "./CSS/Banner.css"


function Banner() {
  function truncate(string, n){
    return string?.length > n ? string.substr(0, n - 1) + '...' :string;

  }  

  return (
    <div className='banner' style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>

        <header className='banner_contents'>
            <h1 className='banner_title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='banner_button'> Play </button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(`This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`, 150)}</h1>
        </header>

        <div className='banner-fadeBottom' />
    </div>
  )
}

export default Banner