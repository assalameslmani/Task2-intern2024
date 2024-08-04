import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Update import to use 'db'
import '../App.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="manage-users">
      <h1>Manage Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.displayName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;

