import { Link } from "react-router-dom";
import { useState } from 'react';
import { 
  Navbar, 
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav, 
  NavItem,
} from 'reactstrap';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="nav"  >
      <Link href='/'>
       <div className="efalogo">
          <img src = "images/Logo.png"className='logoPicture' alt ='Logo'/>
        </div>
        </Link>
        {/* <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/> */}
      {/* <div className="collapse"> */}
      {/* <Collapse isOpen={menuOpen} navbar> */}
          <Link to="/">
            <div> Home </div>
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
          {/* </Collapse> */}
        {/* </div> */}
    </div>
  )
}

export default Header
