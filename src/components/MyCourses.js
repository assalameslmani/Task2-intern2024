import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../firebase';

const MyCourses = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          setUser(authUser);
          const userCoursesCollection = await firestore.collection('courses').where('students', 'array-contains', authUser.uid).get();
          setCourses(userCoursesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      });

      return () => unsubscribe();
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
      {courses.length === 0 ? (
        <p>You are not enrolled in any courses.</p>
      ) : (
        <ul>
          {courses.map((course) => (
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

export default MyCourses;
