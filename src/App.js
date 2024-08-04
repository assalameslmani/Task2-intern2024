import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ManageCourses from './components/ManageCourses';
import ManageUsers from './components/ManageUsers';
import MyCourses from './components/MyCourses';
import Register from './components/Register';
import TrackProgress from './components/TrackProgress';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-courses" element={<ManageCourses />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track-progress" element={<TrackProgress />} />
      </Routes>
    </Router>
  );
};

export default App;
