import React from 'react';

function GrowEventForm() {
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

  function handleCreateEvent(
    eventName: string,
    plant: string,
    customValue: string
  ) {
    // Logic for creating a new grow event
    const newEvent = {
      eventName: eventName || 'New Event',
      eventTime: formatDate(new Date()),
      plant: plant || 'New Plant',
      customField: 'CustomField',
      customValue: customValue || 'Custom Value',
    };
    console.log(newEvent);
    return newEvent;
  }
  return (
    <div>
      <h2>Grow Event Form</h2>
      <form>
        <label htmlFor='eventName'>Event Name</label>
        <input type='text' id='eventName' name='eventName' />
        <label htmlFor='plant'>Plant</label>
        <input type='text' id='plant' name='plant' />
        <label htmlFor='customValue'>Custom Value</label>
        <input type='text' id='customValue' name='customValue' />
        <button type='submit' onClick={handleCreateEvent}>
          Create Event
        </button>
      </form>
    </div>
  );
}

export default GrowEventForm;
