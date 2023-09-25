import ListingBlogs from "./ListingBlogs";
import useGetBlog from "./useGetBlog";

const Blogs = () => {
  const {data: blogs, isLoading, error} = useGetBlog('http://localhost:8000/blogs')

  return ( 
    <div className="blogs">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <ListingBlogs blogs={blogs} title="All Blogs" />}
    </div>
    
  );
}

export default Blogs