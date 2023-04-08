import React from 'react'
import "../Components/CSS/Nav.css"
import logo from "./images/Logonetflix.png"
import avatar from "./images/NetflixAvatar.png"
import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom";

function Nav() {

const [show, handleShow] = useState(false);
const navigate = useNavigate();

const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
    } else{
        handleShow(false)
    } }
useEffect(() =>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);


  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img onClick={() => navigate("/")} className="nav_logo" src={logo} alt='Netflix logo' width={120}/>
            <img onClick={() => navigate('/profile')} className='nav_avatar' src={avatar} alt="Netflix avatar" width={40} />
        </div>


    </div>
  )
}

export default Nav