import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/" ><Button name="Home"></Button></Link>
      <Link to="/projects" ><Button name="Projects"></Button></Link>
      <Link to="/languages" ><Button name="Languages"></Button></Link>
      <Link to="/about" ><Button name="About"></Button></Link>
      <Hamburger className="Hamburger-Nav"></Hamburger>
    </div>
  );
}

export default Navigation;
