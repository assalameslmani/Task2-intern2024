import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase'; // Ensure db is imported
import { doc, setDoc } from 'firebase/firestore';
import '../App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student'); // Default role
  const [error, setError] = useState(''); // Error state

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add role and other user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email,
        role,
      });

      // Redirect or show success message
      console.log('User registered successfully');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('The email address is already in use. Please choose another one.');
      } else {
        setError('Error registering. Please try again.');
        console.error('Error registering:', error);
      }
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
