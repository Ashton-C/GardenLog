import React, { useState } from 'react';

export default function GrowLog() {
  const GrowLog = () => {
    interface GrowEvent {
      eventName: string;
      eventTime: string;
      plant: string;
      customValue: any;
    }
  };

  const [growEvents, setGrowEvents] = useState<GrowEvent[]>([]);

  function formatDate(date: Date) {
    const addZero = (n: number) => (n < 10 ? '0' + n : '' + n);
    const formattedDate = [
      addZero(date.getMonth() + 1), // Months are zero based
      addZero(date.getDate()),
      String(date.getFullYear()).slice(2),
    ].join('/');

    const formattedTime = [
      addZero(date.getHours()),
      addZero(date.getMinutes()),
    ].join(':');

    return `${formattedDate} ${formattedTime}`;
  }

  const handleCreateEvent = () => {
    // Logic for creating a new grow event
    const newEvent: GrowEvent = {
      eventName: 'Watering',
      eventTime: formatDate(new Date()),
      plant: 'Tomato',
      customValue: 'Custom Value',
    };
    console.log(newEvent);
  };

  return (
    <div>
      <h2>Grow Log</h2>
      <button onClick={handleCreateEvent}>Create Grow Event</button>
      <ul>
        {growEvents.map((event, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}
