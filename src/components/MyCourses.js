import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const MyCourses = () => {
  const [user] = useAuthState(auth);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        const q = query(collection(firestore, 'courses'), where('studentsEnrolled', 'array-contains', user.uid));
        const querySnapshot = await getDocs(q);
        setCourses(querySnapshot.docs.map(doc => doc.data()));
      }
    };

    fetchCourses();
  }, [user]);

  return (
    <div>
      <h1>My Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;
