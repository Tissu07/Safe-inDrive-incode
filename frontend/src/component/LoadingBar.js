import React, { useEffect, useState } from 'react';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, []);

    return () => clearTimeout(timer);
  }, []);

  const moveBarStyles = {
    width: '80%',
    height: '30px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: "auto",

  };

  const progressBarStyles = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#4caf50',
    transition: 'width 120s linear',
  };

  return (
    <div style={moveBarStyles}>
      <div style={progressBarStyles}></div>
    </div>
  );
};

export default LoadingBar;






