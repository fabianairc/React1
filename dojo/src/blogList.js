import { Link } from "react-router-dom"

const BlogList = (props) => {


    const blogs=  props.blogs
    const title =props.title

    <div. className= "blog-list">

      {blogs.map((blog) => {
        return (
            
          <div className="blog-preview" key={blog.id}>
            <Link to={`./blogs/${blogs.id}`}>
            <h1>{title}</h1>
            <h1> {blog.title}</h1>
            <h2> Written by {blog.author}</h2>
            </Link>
          </div>
        
        )
      })
      </div>
    
    }
   

export default BlogList;
