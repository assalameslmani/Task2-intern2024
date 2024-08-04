import React from 'react';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      {user && user.role === 'Admin' && (
        <>
          <Link to="/manageusers">Manage Users</Link>
          <br />
          <Link to="/managecourses">Manage Courses</Link>
        </>
      )}
      {user && user.role === 'Instructor' && (
        <>
          <Link to="/createcourse">Create Course</Link>
          <br />
          <Link to="/managecourses">Manage Courses</Link>
        </>
      )}
      {user && user.role === 'Student' && (
        <>
          <Link to="/mycourses">My Courses</Link>
          <br />
          <Link to="/trackprogress">Track Progress</Link>
        </>
      )}
    </div>
  );
};

export default Dashboard;

