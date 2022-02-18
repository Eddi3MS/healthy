import ServicesImg from "../../assets/imgs/bloco_services.svg";
import ServicesImgMobile from "../../assets/imgs/bloco_services__mob.svg";
import { ServicesSty } from "./Services.styled";

function Services() {
  return (
    <ServicesSty className="flex">
      <picture>
        <source media="(max-width:902px)" srcSet={ServicesImgMobile} />
        <source media="(min-width:902px)" srcSet={ServicesImg} />
        <img src={ServicesImg} alt="just an ornament" />
      </picture>

      <div className="flex">
        <h3>The best services ready To serve you</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button>Know More</button>
      </div>
    </ServicesSty>
  );
}

export default Services;
