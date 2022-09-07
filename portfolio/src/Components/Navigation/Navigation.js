import Hamburger from '../Hamburger/Hamburger';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <header className="Navigation-header">
        BEHOLD THE NAVIGATION BAR
      </header>
      <Hamburger className="Hamburger-Nav"></Hamburger>
      <div>It is humble. It shall guide you throughout your journey in my portfolio.</div>
      {/* I have nonsense here, I just want to see things on the nav. */}
    </div>
  );
}

export default Navigation;
