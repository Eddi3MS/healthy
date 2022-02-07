import BlogItem from "./BlogItem";
import data from "../../data";

import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 700, itemsToShow: 2, pagination: false },
  { width: 920, itemsToShow: 3, pagination: false },
];

const posts = data[1];

function BlogList() {
  return (
    <Carousel breakPoints={breakPoints}>
      {posts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </Carousel>
  );
}

export default BlogList;
