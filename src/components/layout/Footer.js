import { FooterSty } from "./Footer.styled";

function Footer() {
  return (
    <FooterSty className="flex  mulish__font">
      <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
      <div className="footer__terms flex">
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and Conditions</a>
      </div>
    </FooterSty>
  );
}

export default Footer;
