import { BlogItemSty } from "./BlogItem.styled";

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
