import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const createBlog = (e) => {
    e.preventDefault();
    const blog = { title, body, author }

    setIsLoading(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('blog created')
      setIsLoading(false)
      navigate('/blogs')
    })
  }


  return (
    <div className="create">
      <h2>Create a blog</h2>
      <form onSubmit={createBlog}>
        <label>Author: </label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding..</button>}
      </form>
    </div>

  );
}

export default CreateBlogs