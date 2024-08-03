import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../firebase';

const ManageUsers = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          setUser(authUser);
          const userDoc = await firestore.collection('users').doc(authUser.uid).get();
          if (userDoc.exists) {
            setRole(userDoc.data().role);
          }
        }
      });

      return () => unsubscribe();
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (role === 'Admin') {
      const fetchUsers = async () => {
        const usersCollection = await firestore.collection('users').get();
        setUsers(usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };

      fetchUsers();
    }
  }, [role]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await firestore.collection('users').doc(userId).update({ role: newRole });
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await firestore.collection('users').doc(userId).delete();
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      {role !== 'Admin' ? (
        <p>You do not have permission to view this page.</p>
      ) : (
        <div>
          <h2>User List</h2>
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <h3>{user.displayName}</h3>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                  <button onClick={() => setSelectedUser(user)}>Edit Role</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete User</button>
                </li>
              ))}
            </ul>
          )}

          {selectedUser && (
            <div>
              <h2>Edit Role for {selectedUser.displayName}</h2>
              <select
                value={selectedUser.role}
                onChange={(e) => handleRoleChange(selectedUser.id, e.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="Instructor">Instructor</option>
                <option value="Student">Student</option>
              </select>
              <button onClick={() => setSelectedUser(null)}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageUsers;


