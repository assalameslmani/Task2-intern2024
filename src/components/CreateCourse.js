import React, { useState } from 'react';
import { firestore } from '../firebase';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('courses').add({
        title,
        description,
        // Add more fields as needed
      });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Course</h1>
      <form onSubmit={handleCreateCourse}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Course Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Course Description"
        ></textarea>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;

