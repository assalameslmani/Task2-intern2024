import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = await firestore.collection('courses').get();
      setCourses(coursesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchCourses();
  }, []);

  const handleDeleteCourse = async (id) => {
    try {
      await firestore.collection('courses').doc(id).delete();
      setCourses(courses.filter(course => course.id !== id));
      alert('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
      <h1>Manage Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCourses;
