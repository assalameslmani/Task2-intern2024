import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; 

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollection = await firestore.collection('courses').get();
        setCourses(coursesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Available Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
