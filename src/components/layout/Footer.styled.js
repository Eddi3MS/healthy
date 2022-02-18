import styled from "styled-components";

export const FooterSty = styled.footer`
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  color: var(--color-text);
  padding-inline: 1rem;

  p,
  a {
    text-align: center;
    font-size: 1rem;
  }

  a {
    color: var(--color-title-2);
  }

  .footer__terms {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
