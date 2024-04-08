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
    <div className='bg-background border border-divider p-5 rounded-lg shadow-md'>
      <h2 className='text-2xl font-semibold mb-4 text-primary-text'>
        Grow Event Form
      </h2>
      <form>
        <div className='mb-3'>
          <label
            htmlFor='eventName'
            className='block text-primary-text font-medium mb-1'
          >
            Event Name
          </label>
          <select
            id='eventName'
            name='eventName'
            className='border border-divider rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          >
            <option value=''>-- Select Event --</option>
            <option value='watering'>Watering</option>
            <option value='fertilizing'>Fertilizing</option>
            <option value='measuring'>Measuring</option>
            <option value='seeding'>Seeding</option>
            <option value='transplanting'>Transplanting</option>
            <option value='harvesting'>Harvesting</option>
            <option value='pestTreating'>Pest Treating</option>
          </select>
        </div>

        <div className='mb-3'>
          <label
            htmlFor='plant'
            className='block text-primary-text font-medium mb-1'
          >
            Plant
          </label>
          <input
            type='text'
            id='plant'
            name='plant'
            className='border border-divider rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='customField'
            className='block text-primary-text font-medium mb-1'
          >
            Custom Field
          </label>
          <input
            type='text'
            id='customField'
            name='customField'
            className='border border-divider rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='customValue'
            className='block text-primary-text font-medium mb-1'
          >
            Custom Value
          </label>
          <input
            type='text'
            id='customValue'
            name='customValue'
            className='border border-divider rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          />
        </div>

        <button
          type='submit'
          onClick={handleCreateEvent}
          className='bg-primary text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default GrowEventForm;
