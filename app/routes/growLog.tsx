import React, { useState } from 'react';
import GrowEventForm from './GrowEventForm';
import GrowLogList from './GrowLogList';

export default function GrowLog() {
  interface GrowEvent {
    eventName: string;
    eventTime: string;
    plant: string;
    customField: string;
    customValue: any;
  }
  const sampleGrowEvents: GrowEvent[] = [
    {
      eventName: 'Watering',
      eventTime: formatDate(new Date()),
      plant: 'Rose',
      customField: 'Amount',
      customValue: '500ml',
    },
    {
      eventName: 'Fertilizing',
      eventTime: formatDate(new Date()),
      plant: 'Tomato',
      customField: 'Type',
      customValue: 'Organic',
    },
    // Add more sample events here if needed
  ];

  const [growEvents, setGrowEvents] = useState<GrowEvent[]>(sampleGrowEvents);
  const [showEventForm, setShowEventForm] = useState<boolean>(false);

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

  const toggleEventForm = () => {
    // Logic for opening the grow event form
    setShowEventForm(!showEventForm);
    console.log('Open Grow Event Form');
  };
  return (
    <div>
      <h2>Grow Log</h2>
      <button onClick={toggleEventForm}>Add Event to Log</button>
      {showEventForm ? <GrowEventForm /> : null}
      <GrowLogList growEvents />
    </div>
  );
}
