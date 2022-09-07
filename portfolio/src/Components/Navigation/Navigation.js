import Hamburger from '../Hamburger/Hamburger';
import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <Button name="Home"></Button>
      <Button name="Projects"></Button>
      <Button name="Languages"></Button>
      <Button name="About"></Button>

      <Hamburger className="Hamburger-Nav"></Hamburger>
    </div>
  );
}

export default Navigation;
