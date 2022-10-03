import Button from '../Navigation and Footer Components/Nav and Footer Button/Button';
import './Footer.css';

function Footer() {


  return (
    <div className="Footer">
      <a href="https://twitter.com/JoshuaD65812355" target="_blank" rel="noreferrer">
        <Button className="FooterButton" name="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/joshua-r-draper/" target="_blank" rel="noreferrer">
        <Button className="FooterButton" name="LinkedIn" />
      </a>
      {/* <a> */}
      {/* I have these anchors commented out for now because they were causing warnings to be thrown
      in the compiling process (testing) */}
        <Button className="FooterButton" name="Contact" />
      {/* </a> */}
      {/* <a> */}
        <Button className="FooterButton" name="Placeholder" />
      {/* </a> */}
    </div>
  );
}
 
export default Footer;