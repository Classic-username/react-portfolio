import { Outlet, Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Navigation.css';

// TO DO: use navlink instead of link here and figure out all the fancy shenanigans of the isActive styling

function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/" className='Link'><Button name="Home"></Button></Link>
      <Link to="/projects" className='Link'><Button name="Projects"></Button></Link>
      <Link to="/languages" className='Link'><Button name="Languages"></Button></Link>
      <Link to="/about" className='Link'><Button name="About"></Button></Link>
      <Hamburger className="Hamburger-Nav"></Hamburger>
    </div>
  );
}

export default Navigation;
