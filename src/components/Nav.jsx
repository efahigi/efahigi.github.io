import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div></div>
      </Link>
      <Link to="/home">
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

export default Nav
