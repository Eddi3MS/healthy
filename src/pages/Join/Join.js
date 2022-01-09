import styled from "styled-components";
import JoinImage from "../../assets/imgs/bloco_final_image.svg";
import JoinImageMob from "../../assets/imgs/bloco_final_image_mob.svg";

const JoinSty = styled.section`
  margin-inline: 1rem;

  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;

  .join__container {
    padding-left: 1rem;
    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
      max-width: 17ch;
      @media (max-width: 680px) {
        font-size: 1.8rem;
        line-height: 2.1rem;
      }
    }
    .join__input {
      gap: 1rem;
      margin-top: 2rem;

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

        @media (max-width: 800px) {
          min-width: 250px;
        }
      }
      input:focus {
        border: 2px solid var(--focus-color);
        outline: none;
      }
      button {
        padding: 10px 20px;
        border-radius: var(--radius);
        background-color: var(--focus-color);
        color: white;

        border: 0;

        cursor: pointer;
        align-items: center;
        justify-content: center;
        transtion: background-color 0.2s ease-in;

        &:hover {
          transtion: background-color 0.2s ease-in;
          background-color: var(--focus-color-hover);
        }
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    picture {
      max-width: 100%;
      height: 250px;
      overflow: hidden;
    }
    .join__container {
      margin-block: 2rem;
    }
  }
`;
function Join() {
  return (
    <JoinSty className="flex" id="join">
      <picture>
        <source media="(max-width:800px)" srcSet={JoinImageMob} />
        <source media="(min-width:800px)" srcSet={JoinImage} />
        <img src={JoinImage} alt="just an ornament" />
      </picture>

      <div className="join__container">
        <h2>Join our membership to get special offer</h2>

        <div className="join__input flex">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <button className="flex" type="submit">
            Join
          </button>
        </div>
      </div>
    </JoinSty>
  );
}

export default Join;
