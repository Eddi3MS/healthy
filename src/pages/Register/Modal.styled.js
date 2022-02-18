import styled from "styled-components";

export const ModalSty = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .modal__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--focus-color);
    padding: 2rem;
    min-width: 360px;
    border-radius: var(--radius);

    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 1.1rem;
    }

    p:nth-of-type(2) {
      font-size: 1rem;
      margin-top: 1.2rem;
    }
    color: var(--color-title-1);

    button {
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: var(--radius);
      border: 0;
      cursor: pointer;
      background-color: #d1455a;

      &:hover {
        background-color: #cc2f46;
      }
    }
  }
`;
