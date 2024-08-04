import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ManageUsers from './components/ManageUsers';
import ManageCourses from './components/ManageCourses';
import CreateCourse from './components/CreateCourse';
import MyCourses from './components/MyCourses';
import TrackProgress from './components/TrackProgress';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/managecourses" element={<ManageCourses />} />
        <Route path="/createcourse" element={<CreateCourse />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/trackprogress" element={<TrackProgress />} />
      </Routes>
    </Router>
  );
};

export default App;
