import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Footer.css';

function Footer() {

  return (
    <div className="Footer">
      <Button href="https://twitter.com/JoshuaD65812355" className="FooterButton" name="Twitter" />
      <Button className="FooterButton" name="LinkedIn" />
      <Button className="FooterButton" name="Contact" />
      <Button className="FooterButton" name="Placeholder" />
    </div>
  );
}
 
export default Footer;