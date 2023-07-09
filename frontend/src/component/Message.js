import React, { useEffect } from 'react';

function Message() {
  useEffect(() => {
    
    const handleClick = () => {
      // Send AJAX request to backend when button is clicked
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/schedule-message');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({ recipient: '+918271935265' }));

      // Start a timer for the certain time interval
    //   setTimeout(() => {
    //     alert('Custom message not received within the specified time.');
    //   }, 60000); // Adjust the time interval as needed
    };

    const button = document.getElementById('customButton');
    button.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener
    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <button id="customButton">Click Me</button>
    </div>
  );
}

export default Message;
