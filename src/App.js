import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ManageCourses from './components/ManageCourses';
import ManageUsers from './components/ManageUsers';
import CreateCourse from './components/CreateCourse';
import ViewStudents from './components/ViewStudents';
import MyCourses from './components/MyCourses';
import TrackProgress from './components/TrackProgress';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-courses" element={<ManageCourses />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/view-students" element={<ViewStudents />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/track-progress" element={<TrackProgress />} />
      </Routes>
    </Router>
  );
};

export default App;
