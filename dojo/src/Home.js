import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem...", author: "fa", id: "1" },
    { title: "A blog", body: "Lorem...", author: "ra", id: "2" },
    { title: "the other blog", body: "Lorem...", author: "ta", id: "3" },
  ]);

  return (
    <div className="Home">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h1> {blog.title}</h1>
            <h2> Written by {blog.author}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
