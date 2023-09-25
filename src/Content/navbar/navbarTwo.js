import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import "./navbar.css"

const Navbar2 = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" onClick={closeMobileMenu}>
          <h1> Blogity Blogs</h1>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive}) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/blogs"
              className={({ isActive}) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create"
              className={({ isActive}) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              New Blog
            </NavLink>
          </li>
        </ul>
        {/*<div className="links">
          <Link to="/">Home</Link>
          <Link to="/blogs"> Blogs</Link>
          <Link to="/create"> New Blog</Link>
        </div>*/}
      </div>
    </nav>
  );
}

export default Navbar2;