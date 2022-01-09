import ServicesImg from "../../assets/imgs/bloco_services.svg";
import ServicesImgMobile from "../../assets/imgs/bloco_services__mob.svg";
import styled from "styled-components";

const ServicesSty = styled.section`
  gap: 20px;
  margin-inline: 1rem;

  height: clamp(500px, auto, 700px);
  picture {
    max-width: 50%;
  }

  div {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h3 {
      font-size: 2rem;
      max-width: 20ch;
    }

    p {
      font-size: 1rem;
      max-width: 45ch;
      color: var(--color-text);
      padding-inline: 0.5rem;
    }

    button {
      align-self: start;
      padding: 10px 20px;

      border: 0;
      background-color: var(--focus-color);
      border-radius: var(--radius);
      color: white;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 902px) {
    justify-content: center;
    flex-direction: column;

    picture {
      max-width: 100%;
      align-self: center;
      border-radius: var(--radius);
      min-width: 350px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
    div {
      gap: 1rem;

      h3 {
        text-align: center;
      }
      button {
        align-self: center;
      }
    }
  }
`;

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
        </p>{" "}
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.{" "}
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
