import { useNavigate, useParams } from "react-router-dom";
import useGetBlog from "./useGetBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading} = useGetBlog('http://localhost:8000/blogs/' + id)
  const navigate = useNavigate();

  const deleteBlog = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate ('/blogs')
    })
  }

  const goBack = () => {
      navigate ('/blogs')
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteBlog}>Delete</button>
          <button onClick={goBack}>Go Back</button>
        </article>
      )}
      
    </div>

  );
}

export default BlogDetails