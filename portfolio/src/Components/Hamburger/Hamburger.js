import './Hamburger.css';
import burger from '../../Resources/Images/hamburger.png'

function Hamburger() {
  return (
    <div className="Hamburger">
      <img src={burger} className="Burger" alt="Hamburger" />
    </div>
  );
}

export default Hamburger;