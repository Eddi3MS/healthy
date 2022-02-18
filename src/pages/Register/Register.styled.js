import styled from "styled-components";

export const RegisterSty = styled.section`
  max-width: 1228px;
  min-height: calc(100vh - var(--header-height));
  margin-inline: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: row;
    max-width: 1004px;
    flex-wrap: wrap;
    gap: 20px;

    justify-content: center;
    align-items: center;

    button {
      height: 52px;
      border-radius: var(--radius);
      background-color: var(--focus-color);
      color: white;
      min-width: 350px;
      margin-top: 1.7rem;
      border: 0;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      transtion: background-color 0.2s ease-in;

      @media (max-width: 730px) {
        margin-bottom: 2rem;
        margin-top: 0.8rem;
      }

      @media (max-width: 420px) {
        min-width: 330px;
      }

      &:hover {
        transtion: background-color 0.2s ease-in;
        background-color: var(--focus-color-hover);
      }
      &:focus {
        outline: 2px solid var(--focus-color-hover);
      }
    }
  }

  .alert {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;

    color: white;
    border-radius: var(--radius);

    img {
      width: 30px;
    }

    &.error {
      background-color: red;
    }

    &.success {
      background-color: var(--focus-color);
    }
  }
`;
