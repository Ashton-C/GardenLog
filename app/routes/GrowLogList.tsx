import React from 'react';
import GrowLog from './GrowLog';
import growEvents from './GrowLog';

interface GrowEvent {
  eventName: string;
  eventTime: string;
  plant: string;
  customField: string;
  customValue: any;
}

export default function GrowLogList(growEvents: [GrowEvent]) {
  // Add your component logic here
  return (
    <div>
      <h3>Grow Log List</h3>
      <ul>
        {
        
            growEvents.length > 0 ? 

        {growEvents.map((event: GrowEvent, index: number) => (
          <li key={index}>
            <p>{event.eventName}</p>
            <p>{event.eventTime}</p>
            <p>{event.plant}</p>
            <p>{event.customField}</p>
            <p>{event.customValue}</p>
          </li>
        ))}
       : null
        }
      </ul>
    </div>
  );
}
