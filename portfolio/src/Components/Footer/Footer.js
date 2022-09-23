import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Footer.css';

function Footer() {

  return (
    <div className="Footer">
      <Button className="FooterButton" style="background-color:grey" name="Twitter" />
      <Button className="FooterButton" style="background-color:grey" name="LinkedIn" />
      <Button className="FooterButton" style="background-color:grey" name="Contact" />
      <Button className="FooterButton" style="background-color:grey" name="Placeholder" />
    </div>
  );
}
 
export default Footer;