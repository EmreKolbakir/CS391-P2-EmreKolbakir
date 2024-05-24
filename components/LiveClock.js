import React, { useEffect, useState } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Current Time: {time.toLocaleTimeString()}</p>
      <p>Date: {time.toLocaleDateString()}</p>
    </div>
  );
};

export default LiveClock;
