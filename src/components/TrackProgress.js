import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../firebase';

const TrackProgress = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          setUser(authUser);
          const progressCollection = await firestore.collection('progress').where('userId', '==', authUser.uid).get();
          setProgress(progressCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      });

      return () => unsubscribe();
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Track Progress</h1>
      {progress.length === 0 ? (
        <p>No progress data available.</p>
      ) : (
        <ul>
          {progress.map((item) => (
            <li key={item.id}>
              <h3>Course: {item.courseTitle}</h3>
              <p>Completed Lessons: {item.completedLessons}</p>
              <p>Progress: {item.progressPercentage}%</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrackProgress;
