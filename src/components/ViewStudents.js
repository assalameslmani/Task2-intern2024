import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = await firestore.collection('users').where('role', '==', 'Student').get();
      setStudents(studentsCollection.docs.map(doc => doc.data()));
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>View Students</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStudents;
