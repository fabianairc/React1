gitimport BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, Error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="Home">
      {Error && <div>{Error}</div>}
      {isPending && <div> Loading... </div>}
      {blogs && <BlogList blogs={data} title="All Blogs" handle />}
    </div>
  );
};

export default Home;
