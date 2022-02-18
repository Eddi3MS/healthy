import styled from "styled-components";

export const ServicesSty = styled.section`
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
      cursor: pointer;
      transtion: background-color 0.2s ease-in;

      &:hover {
        transtion: background-color 0.2s ease-in;
        background-color: var(--focus-color-hover);
      }
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
