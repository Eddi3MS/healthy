import Illustration from "../../assets/imgs/Illustration.svg";
import IllustrationMob from "../../assets/imgs/Illustration__mob.svg";
import Search from "../../assets/imgs/search.svg";
import styled from "styled-components";

const HeroSty = styled.section`
  min-height: calc(90vh - var(--header-height));
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin-inline: 1rem;

  @media (max-width: 717px) {
    justify-content: center;
    align-items: center;

    gap: 40px;
  }

  .illustration {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 68%;

    @media (max-width: 717px) {
      position: relative;
      max-width: 100%;

      overflow: hidden;
    }
  }
  .search {
    z-index: 777;

    h1 {
      font-size: 3rem;
      line-height: 4.2rem;
      max-width: 10ch;

      @media (max-width: 680px) {
        font-size: 2.5rem;
        line-height: 2.9rem;
      }
    }
  }

  .search__input {
    margin-top: 2.3rem;
    gap: 1rem;
    input {
      height: 52px;
      min-width: 350px;
      border-radius: var(--radius);
      border: 1px solid var(--color-text);
      padding-left: 1rem;

      ::placeholder {
        font-family: mulish, sans-serif;
        font-size: 1rem;

        color: var(--color-text);
      }
    }
    input:focus {
      border: 2px solid var(--focus-color);
      outline: none;
    }
    button {
      height: 52px;
      width: 52px;
      border-radius: var(--radius);
      background-color: var(--focus-color);
      border: 0;

      cursor: pointer;
      align-items: center;
      justify-content: center;
      transtion: background-color 0.2s ease-in;
      img {
        transition: transform 0.2s ease-in;
      }

      &:hover {
        transtion: background-color 0.2s ease-in;
        background-color: var(--focus-color-hover);
        img {
          transition: transform 0.2s ease-in;
          transform: scale(1.4);
        }
      }
    }

    @media (max-width: 480px) {
      gap: 10px;
      input {
        min-width: 280px;
      }
    }
  }
`;

function Hero() {
  return (
    <HeroSty className="flex">
      <picture className="illustration">
        <source media="(max-width:717px)" srcSet={IllustrationMob} />
        <source media="(min-width:717px)" srcSet={Illustration} />
        <img src={Illustration} alt="just an ornament" />
      </picture>

      <div className="search">
        <h1>Ready for Trying a new recipe?</h1>

        <div className="search__input flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search healthy recipes"
          />
          <button className="flex" type="submit">
            <img src={Search} alt="search icon" />
          </button>
        </div>
      </div>
    </HeroSty>
  );
}

export default Hero;
