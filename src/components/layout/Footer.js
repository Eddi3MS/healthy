import styled from "styled-components";

const FooterSty = styled.footer`
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  color: var(--color-text);
  padding-inline: 1rem;

  p,
  a {
    font-size: 1rem;
    font-family: mulish, sans-serif;
  }

  .footer__terms {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
function Footer() {
  return (
    <FooterSty className="flex">
      <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
      <div className="footer__terms flex">
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and Conditions</a>
      </div>
    </FooterSty>
  );
}

export default Footer;
