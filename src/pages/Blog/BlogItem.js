import styled from "styled-components";

const BlogItemSty = styled.div`
  width: 360px;
  height: 450px;
  background: blue;
  border-radius: var(--radius);

  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: var(--radius);

  margin: 1rem;

  .post__image {
    width: 100%;
  }

  h3 {
    font-size: 1.5rem;
    padding-inline: 1rem;
  }
  div {
    align-items: end;
    justify-content: start;

    img {
      margin-block: 1rem;
      margin-left: 1rem;

      border-radius: 50%;
      object-fit: contain;
    }

    p {
      padding-block: 1rem;
    }
  }
`;

function BlogItem({ post }) {
  return (
    <BlogItemSty className="flex">
      <img className="post__image" src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <div className="flex">
        <img src={post.avatar} alt={post.author} />
        <p>{post.author}</p>
      </div>
    </BlogItemSty>
  );
}

export default BlogItem;
