import React from "react";
import Slider from "react-slick";
import slide1 from '../images/homepage/aaron-burden-xG8IQMqMITM-unsplash.jpg';
import slide2 from '../images/homepage/absolutvision-82TpEld0_e4-unsplash.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {
  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate('/create')
  }

  const goToBlogs = () => {
    navigate('/blogs')
  }

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={slide1} alt="slide 1" />
        <div className="homeText">
          <p>Have an idea or just want to say something on your mind?</p>
          <p>You can add it to the blog</p>
          <button onClick={goToCreate}>Create a Blog</button>
        </div>
      </div>
      <div className="slide">
        <img src={slide2} alt="slide 2" />
        <div className="homeText">
          <p>Don't know what write?</p>
          <p>Look at the previous blogs for inspiration</p>
          <button onClick={goToBlogs}>Blogs</button>
          <p>Is it empty? Add your blog to help inspire people</p>
          <button onClick={goToCreate}>Create a Blog</button>
        </div>
      </div>
    </Slider>
  );
}

export default Home