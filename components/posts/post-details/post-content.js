import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DummyData = {
  slug: "1",
  title: "title 1",
  image: "image1.jpg",
  date: "2022-01-15",
  content: "# this is the first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DummyData.slug}/${DummyData.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DummyData.title} image={imagePath} />
      {DummyData.content}
    </article>
  );
};

export default PostContent;
