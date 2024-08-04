import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Update import to use 'db'
import '../App.css';


const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const fetchMyCourses = async () => {
      // Assuming the user ID is available; replace with actual user ID retrieval logic
      const userId = 'user_1'; // Example user ID
      const coursesCollection = collection(db, 'courses');
      const courseSnapshot = await getDocs(coursesCollection);
      const courseList = courseSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(course => course.enrolledStudents && course.enrolledStudents.includes(userId)); // Example condition

      setMyCourses(courseList);
    };

    fetchMyCourses();
  }, []);

  return (
    <div className="my-courses">
      <h1>My Courses</h1>
      <ul>
        {myCourses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2> {/* Assuming the field name is 'title' */}
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> ${course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;