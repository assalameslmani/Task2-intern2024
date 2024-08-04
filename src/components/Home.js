import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this is the correct path to your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home1">Welcome to the LMS</h1>
      <p className="home1">Explore the links below to manage your courses and account:</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/createcourse">Create Course</Link>
      <br />
      <Link to="/mycourses">My Courses</Link>
    </div>
  );
};

export default Home;

