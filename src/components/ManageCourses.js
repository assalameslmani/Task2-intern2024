import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import '../App.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, 'courses');
      const courseSnapshot = await getDocs(coursesCollection);
      const courseList = courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(courseList);
    };

    fetchCourses();
  }, []);

  return (
    <div className="manage-courses">
      <h1>Manage Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.courseName}</h2>
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Enrolled Students:</strong> {course.enrolledStudents}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCourses;