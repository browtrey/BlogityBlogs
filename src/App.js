//import Navbar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Content/Home';
import Blogs from "./Content/Blogs";
import CreateBlogs from "./Content/CreateBlogs";
import NotFound from "./Content/NotFound";
import BlogDetails from "./Content/BlogDetails";
import Navbar2 from "./Content/navbar/navbarTwo";


function App() {
  return (
    <Router>
      <div className="App">
        {/*<Navbar /> */}
        <Navbar2 />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/create" element={<CreateBlogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
