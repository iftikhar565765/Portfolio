
import React from 'react';
import { Link } from 'react-scroll';
import { Home, Person, Work, Mail, Check, } from '@material-ui/icons';
 const Navbar = () => {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav  d-flex mx-auto">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <Home />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <Person />
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              < Check />
            </Link>
          </li>
           

          <li className="nav-item">
            <Link
              activeClass="active"
              to="content-w"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <Work />
            </Link>
          </li>

        


          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <Mail />
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  );
};
 export default Navbar;