import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSty = styled.header`
  height: var(--header-height);
  align-items: center;
  justify-content: start;

  max-width: 1228px;

  margin-inline: auto;

  .logo {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;

    color: var(--focus-color);
    z-index: 999;
  }
`;

function Header() {
  return (
    <HeaderSty className="flex">
      <Link to="/" className="logo">
        Healthy Food
      </Link>
    </HeaderSty>
  );
}

export default Header;
