import { Link } from "react-router-dom";
import { useState } from 'react';
function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="nav"  >
      <Link href='/'>
       <div className="efalogo">
          <img src = "images/Logo.png"className='logoPicture' alt ='Logo'/>
        </div>
        </Link>
          <Link to="/">
            <div> Home </div>
          </Link>
          <Link to="/about">
            <div>About Me</div>
          </Link>
          
          <Link to="/project">
            <div>My Projects</div>
          </Link>
          <Link to="/contact">
            <div>Contact</div>
          </Link>
          {/* </Collapse> */}
        {/* </div> */}
    </div>
  )
}

export default Header
