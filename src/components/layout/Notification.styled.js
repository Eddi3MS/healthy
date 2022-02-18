import styled from "styled-components";

export const NotificationSty = styled.div`
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

  &.success {
    background-color: var(--focus-color);
  }

  &.error {
    background-color: red;
  }
`;
