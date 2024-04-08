// GrowLogList.tsx

import React from 'react';
import '../GrowLogList.css';

interface GrowEvent {
  eventName: string;
  eventTime: string;
  plant: string;
  customField: string;
  customValue: any;
}

interface GrowLogListProps {
  growEvents: GrowEvent[];
}

export default function GrowLogList({ growEvents }: GrowLogListProps) {
  return (
    <div>
      <h3>Grow Log List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Time</th>
            <th>Plant</th>
            <th>Custom Field</th>
            <th>Custom Value</th>
          </tr>
        </thead>
        <tbody>
          {growEvents.length > 0 ? (
            <>
              {growEvents.map((event: GrowEvent, index: number) => (
                <tr key={index}>
                  <td>{event.eventName}</td>
                  <td>{event.eventTime}</td>
                  <td>{event.plant}</td>
                  <td>{event.customField}</td>
                  <td>{event.customValue}</td>
                </tr>
              ))}
            </>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}