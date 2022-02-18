import { BlogSty } from "./Blog.styled";
import BlogList from "./BlogList";

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
