import Illustration from "../../assets/imgs/Illustration.svg";
import IllustrationMob from "../../assets/imgs/Illustration__mob.svg";
import Search from "../../assets/imgs/search.svg";
import { HeroSty } from "./Hero.styled";

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

        <div className="search__input  mulish__font flex">
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
