import styled from "styled-components";

export const BlogSty = styled.section`
  flex-direction: column;

  align-items: center;
  justify-content: start;
  margin-block: 50px;

  overflow-x: hidden;

  h2 {
    font-size: 2rem;
  }

  p {
    max-width: 55ch;
    font-size: 1rem;
    color: var(--color-text);
    padding-bottom: 2rem;
    padding-inline: 0.5rem;
    text-align: center;
  }
`;
