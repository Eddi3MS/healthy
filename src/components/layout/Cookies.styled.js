import styled from "styled-components";

export const CookieAlert = styled.div`
  border-radius: var(--radius);
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  padding: 0.5rem 1rem;

  position: fixed;
  bottom: 10px;
  left: 10px;
  max-width: 90%;

  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    min-width: 60px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: normal;
    margin-bottom: 0.7rem;
  }
  p {
    font-size: 0.9rem;
  }

  p:nth-of-type(2) {
    margin-bottom: 0.5rem;
  }

  button {
    background-color: var(--focus-color);
    align-self: start;

    font-size: 1rem;
    color: white;

    border: 0;
    border-radius: var(--radius);

    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--focus-color-hover);
    }
  }
`;
