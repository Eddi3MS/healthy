import styled from "styled-components";

export const HeaderSty = styled.header`
  height: var(--header-height);
  align-items: center;
  justify-content: space-around;

  @media (max-width: 820px) {
    justify-content: space-between;
    padding-inline: 1rem;
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;

    color: var(--focus-color);
    z-index: 999;
  }

  .menu__mobile {
    z-index: 9999;
    cursor: pointer;
    background-color: transparent;

    display: none;
    align-items: center;
    justify-content: center;

    border: 0;
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(355deg)
      brightness(103%) contrast(100%);

    &.active {
      position: fixed;
      top: 1.74rem;
      right: 1rem;
      filter: invert(93%) sepia(15%) saturate(1547%) hue-rotate(18deg)
        brightness(93%) contrast(86%);
    }

    :focus {
      outline: 0;
      border: 1px solid white;
    }

    @media (max-width: 820px) {
      display: flex;
    }

    @media (max-width: 717px) {
      filter: invert(93%) sepia(15%) saturate(1547%) hue-rotate(18deg)
        brightness(93%) contrast(86%);

      &.active {
        filter: invert(93%) sepia(15%) saturate(1547%) hue-rotate(18deg)
          brightness(93%) contrast(86%);
      }
    }
  }

  nav {
    z-index: 999;

    font-weight: 600;

    ul {
      gap: 20px;
    }

    li {
      padding: 10px 20px;

      cursor: pointer;
    }

    li:nth-of-type(4) {
      background-color: white;
      color: var(--focus-color);
      border-radius: 4px;
    }

    @media (max-width: 820px) {
      display: block;
      position: fixed;
      background-color: #fff;
      top: 0;
      left: -100%;
      height: 100vh;
      width: 100%;
      font-size: 1.4rem;
      transition: all 0.4s ease-in-out;

      ul {
        height: inherit;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li:nth-of-type(4) {
          background-color: var(--focus-color);
          border-radius: 4px;
          a {
            color: #fff;
          }
        }
      }

      &.active {
        left: 0;
      }
    }
  }
`;
