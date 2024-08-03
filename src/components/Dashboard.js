import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);

        try {
          const userDoc = await firestore.collection('users').doc(currentUser.uid).get();
          const userData = userDoc.data();
          if (userData) {
            setRole(userData.role);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const renderAdminLinks = () => (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><button onClick={() => navigate('/manage-courses')}>Manage Courses</button></li>
        <li><button onClick={() => navigate('/manage-users')}>Manage Users</button></li>
      </ul>
    </div>
  );

  const renderStudentLinks = () => (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        <li><button onClick={() => navigate('/my-courses')}>My Courses</button></li>
        <li><button onClick={() => navigate('/track-progress')}>Track Progress</button></li>
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      {role === 'Admin' && renderAdminLinks()}
      {role === 'Student' && renderStudentLinks()}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
