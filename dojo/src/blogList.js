const BlogList = (props) => {


    const blogs=  props.blogs
    const title =props.title

    <div. className= "blog-list">

      {blogs.map((blog) => {
        return (
            
          <div className="blog-preview" key={blog.id}>
            <h1>{title}</h1>
            <h1> {blog.title}</h1>
            <h2> Written by {blog.author}</h2>
            <button onClick={()=> handleDelete (blog.id)}></button>
          </div>
        
        )
      })
      </div>
    
    }
   

export default BlogList;
