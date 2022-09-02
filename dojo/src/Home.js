import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem...", author: "fa", id: "1" },
    { title: "A blog", body: "Lorem...", author: "ra", id: "2" },
    { title: "the other blog", body: "Lorem...", author: "ta", id: "3" },
  ]);

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
