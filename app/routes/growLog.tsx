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

  const [growEvents, setGrowEvents] = useState(sampleGrowEvents);
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
    <div className='container mx-auto p-4 md:w-1/2 w-full'>
      <h2 className='text-2xl font-semibold mb-4'>Grow Log</h2>
      <button
        onClick={toggleEventForm}
        className='bg-primary text-white font-medium py-2 px-4 rounded-full hover:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
      >
        Add Event to Log
      </button>
      {showEventForm ? <GrowEventForm /> : null}
      <GrowLogList growEvents={growEvents} />
    </div>
  );
}
