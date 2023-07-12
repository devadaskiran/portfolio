import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const amPM = hours >= 12 ? 'PM' : 'AM';

      const formattedTime = `${hours % 12 || 12}:${minutes
        .toString()
        .padStart(2, '0')} ${amPM}`;

      const formattedDate = `${currentDate
        .getDate()
        .toString()
        .padStart(2, '0')}/${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${currentDate.getFullYear().toString().slice(-2)}`;

      setCurrentDateTime(`${formattedTime} ${formattedDate}`);
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{currentDateTime}</div>;
};

export default DateTimeComponent;
