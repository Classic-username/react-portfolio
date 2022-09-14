import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Footer.css';

function Footer() {

  return (
    <div className="Footer">
      <Button className="FooterButton" name="Home" />
      <Button className="FooterButton" name="Projects" />
      <Button className="FooterButton" name="Languages" />
      <Button className="FooterButton" name="About" />
    </div>
  );
}

export default Footer;