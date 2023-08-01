import { Link } from "react-router-dom";
import { useState } from 'react';
// import {efaLogo} 
function Header() {
  return (
    <div className="nav" >
       <div className="efalogo">
       <img src= "efaLogo" alt='Efa logo' className='efalogo' />
                <div className='logoPicture'>Efa Higi </div>
       </div>
      <Link to="/">
        <div><i className='fa fa-home fa-lg'/>Home</div>
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
