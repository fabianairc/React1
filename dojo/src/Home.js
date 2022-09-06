import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem...", author: "fa", id: "1" },
    { title: "A blog", body: "Lorem...", author: "ra", id: "2" },
    { title: "the other blog", body: "Lorem...", author: "ta", id: "3" },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blogs.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {});
  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs" handle delete={handleDelete} />
    </div>
  );
};

export default Home;
