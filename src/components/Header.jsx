import { Link } from "react-router-dom";
import { useState } from 'react';



function Header() {
 
  return (
    <div className="nav" >
      <Link to="/">
       <div className="efalogo">
       <img src = './Logo.png'  className='logoPicture' alt ='Logo'/>
        </div>
      </Link>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About Me</div>
      </Link>
      <Link to="/resume">
        <div>My Resume</div>
      </Link>
      <Link to="/project">
        <div>My Projects</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </div>
  )
}

export default Header
