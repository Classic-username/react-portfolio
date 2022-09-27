import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Footer.css';

function Footer() {

// https://www.linkedin.com/in/joshua-r-draper/

  return (
    <div className="Footer">
      <a href="https://twitter.com/JoshuaD65812355" target="_blank" rel="noreferrer">
        <Button className="FooterButton" name="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/joshua-r-draper/" target="_blank" rel="noreferrer">
        <Button className="FooterButton" name="LinkedIn" />
      </a>
      <a>
        <Button className="FooterButton" name="Contact" />
      </a>
      <a>
        <Button className="FooterButton" name="Placeholder" />
      </a>
    </div>
  );
}
 
export default Footer;