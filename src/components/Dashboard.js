import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link here
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
          // Fetch user role from Firestore if needed
          const userDoc = doc(db, 'users', authUser.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            setUser({ ...authUser, ...userSnapshot.data() });
          }
        } else {
          navigate('/');
        }
      });
    };

    fetchUser();
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
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
