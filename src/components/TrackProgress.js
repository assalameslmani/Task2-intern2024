import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const TrackProgress = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchProgressData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'progress'));
      setProgressData(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchProgressData();
  }, []);

  return (
    <div>
      <h1>Track Progress</h1>
      <ul>
        {progressData.map((item, index) => (
          <li key={index}>
            {item.studentName}: {item.courseTitle} - {item.progress}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackProgress;
