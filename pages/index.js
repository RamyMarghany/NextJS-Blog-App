import Hero from "../components/home-page/hero/hero";
import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";

const DummyData = [
  {
    slug: "1",
    title: "title 1",
    image: "image1.jpg",
    excerpt: "excerpt 1",
    date: "2022-01-15",
  },
  {
    slug: "2",
    title: "title 2",
    image: "image2.jpg",
    excerpt: "excerpt 2",
    date: "2022-02-25",
  },
  {
    slug: "3",
    title: "title 3",
    image: "image3.jpg",
    excerpt: "excerpt 3",
    date: "2022-03-25",
  },
  {
    slug: "4",
    title: "title 4",
    image: "image4.jpg",
    excerpt: "excerpt 4",
    date: "2022-04-25",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DummyData} />
    </>
  );
};

export default HomePage;
