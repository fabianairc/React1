import { useParams } from "react-router-dom";
import BlogList from "./src/blogList";
import useFetch from "./src/useFetch";


const blogDetails=()=>{
  const { id } = useParams;
  const { data, error, isPenging } = useFetch(
    `http://localhost:8000/blogs/` + id
  );

  return (<div className="blog-details">
    {isPenging && <div>loading...</div>};
  {error && <div>{error}</div>}
  {blog && (
<article>
<h2>{blog.title}</h2>
<p>writen by {blog.author} </p>

</article>)
</div>)

}

export default blogDetails;
