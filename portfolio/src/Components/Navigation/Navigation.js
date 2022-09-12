import { Outlet, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Navigation.css';

// TO DO: use navNavlink instead of Navlink here and figure out all the fancy shenanigans of the isActive styling

function Navigation() {

  // I extracted the functional styling because it will apply to numerous buttons throughout the app. I didn't want it looking as messy as it promised. This way I can also get my formatting back to one line components instead of spreading everything out.
  function navButtonStyle({ isActive }) {
      return {
        textDecoration: "none",
        color: isActive ? "cyan" : "blue",
        backgroundColor: isActive ? "#282c34" : "gray",
    }
  }

  return (
    <div className="Navigation">
      <NavLink style={navButtonStyle} to="/" className='NavLink'><Button name="Home" /></NavLink>
      <NavLink style={navButtonStyle} to="/projects" className='NavLink'><Button name="Projects" /></NavLink>
      <NavLink style={navButtonStyle} to="/languages" className='NavLink'><Button name="Languages" /></NavLink>
      <NavLink style={navButtonStyle} to="/about" className='NavLink'><Button name="About" /></NavLink>
      <Hamburger className="Hamburger-Nav"></Hamburger>
    </div>
  );
}

export default Navigation;
