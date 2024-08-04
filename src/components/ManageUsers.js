import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (uid, newRole) => {
    try {
      await updateDoc(doc(firestore, 'users', uid), { role: newRole });
      setUsers(users.map(user => (user.uid === uid ? { ...user, role: newRole } : user)));
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.displayName} - {user.email} - {user.role}
            <select value={user.role} onChange={(e) => handleRoleChange(user.uid, e.target.value)}>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
              <option value="Admin">Admin</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;



