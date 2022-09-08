import './Hamburger.css';
import burger from '../../Resources/Images/hamburger.png'

function Hamburger() {
  return (
    <div className="Hamburger">
      <img src={burger} className="Burger" alt="Hamburger" />
      {/* commit comment, something seems to be broken on the local main */}
    </div>
  );
}

export default Hamburger;