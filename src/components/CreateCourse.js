import React, { useState } from 'react';
import { firestore } from '../firebase';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [syllabus, setSyllabus] = useState('');

  const handleCreateCourse = async () => {
    try {
      await firestore.collection('courses').add({
        title,
        description,
        syllabus,
      });
      setTitle('');
      setDescription('');
      setSyllabus('');
      alert('Course created successfully!');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div>
      <h1>Create Course</h1>
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="Course Syllabus"
        value={syllabus}
        onChange={(e) => setSyllabus(e.target.value)}
      />
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
};

export default CreateCourse;


