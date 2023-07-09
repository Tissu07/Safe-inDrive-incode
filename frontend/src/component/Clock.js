import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const initialTime = 120000; // 2 minutes in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000; // Decrease by 1 second (1000 milliseconds)
      });
    }, 1000); // Update every 1 second (1000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  // Calculate minutes and seconds
  const minutes = Math.floor(timeRemaining / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);

  // Format minutes and seconds with leading zeros if necessary
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div>
      <div>
        {formattedMinutes}:{formattedSeconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
