import styled from "styled-components";
import BlogList from "./BlogList";

const BlogSty = styled.section`
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

function Blog() {
  return (
    <BlogSty className="flex" id="blog">
      <h2>Read our Blog</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <BlogList />
    </BlogSty>
  );
}

export default Blog;
