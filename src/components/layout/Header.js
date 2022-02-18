import { useState } from "react";
import Menu from "../../assets/imgs/menu.svg";
import { Link } from "react-scroll";
import { HeaderSty } from "./Header.styled";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <HeaderSty className="flex">
      <p className="logo">Healthy Food</p>
      <button
        className={isActive ? "active menu__mobile" : "menu__mobile"}
        aria-label="opens menu list"
        onClick={() => setIsActive(!isActive)}
      >
        <img src={Menu} alt="icon for menu" />
      </button>
      <nav className={isActive ? "active" : ""}>
        <ul className="flex mulish__font  nav__ul">
          <li>
            <Link
              to="recipes"
              smooth
              activeClass="active"
              onClick={() => setIsActive(false)}
              spy
            >
              HEALTHY RECIPER
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth
              activeClass="active"
              spy
              onClick={() => setIsActive(false)}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsActive(false)}
              to="join"
              smooth
              activeClass="active"
              spy
            >
              JOIN
            </Link>
          </li>
          <li>
            <Link
              smooth
              onClick={() => setIsActive(false)}
              activeClass="active"
              spy
              to="register"
            >
              REGISTER
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderSty>
  );
}

export default Header;
