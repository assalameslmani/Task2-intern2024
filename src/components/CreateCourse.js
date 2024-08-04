import React, { useState } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import '../App.css';  // Import the CSS file

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [syllabus, setSyllabus] = useState('');

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'courses'), {
        title,
        description,
        syllabus,
        instructor: 'user_1' 
      });
      setTitle('');
      setDescription('');
      setSyllabus('');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div className="create-course-container">
      <h1>Create Course</h1>
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
        <textarea
          value={syllabus}
          onChange={(e) => setSyllabus(e.target.value)}
          placeholder="Course Syllabus"
        ></textarea>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;


