// GrowLogList.tsx

import React from 'react';

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
    <div className='container mx-auto p-4 w-full'>
      {' '}
      {/* Add a container for spacing */}
      <h3 className='text-2xl font-semibold mb-4'>Grow Log List</h3>
      <div className='overflow-x-auto'>
        {' '}
        {/* Add responsiveness */}
        <table className='table-auto w-full border-collapse border border-slate-400'>
          <thead>
            <tr>
              <th className='bg-slate-100 p-3 text-left'>Event Name</th>
              <th className='bg-slate-100 p-3 text-left'>Event Time</th>
              <th className='bg-slate-100 p-3 text-left'>Plant</th>
              <th className='bg-slate-100 p-3 text-left'>Custom Field</th>
              <th className='bg-slate-100 p-3 text-left'>Custom Value</th>
            </tr>
          </thead>
          <tbody>
            {growEvents.length > 0 ? (
              <>
                {growEvents.map((event: GrowEvent, index: number) => (
                  <tr key={index} className='hover:bg-slate-50'>
                    {' '}
                    {/* Hover effect */}
                    <td className='border border-slate-300 p-3'>
                      {event.eventName}
                    </td>
                    <td className='border border-slate-300 p-3'>
                      {event.eventTime}
                    </td>
                    <td className='border border-slate-300 p-3'>
                      {event.plant}
                    </td>
                    <td className='border border-slate-300 p-3'>
                      {event.customField}
                    </td>
                    <td className='border border-slate-300 p-3'>
                      {event.customValue}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              // If no events, consider adding a message here
              <tr>
                <td colSpan={5} className='text-center p-4'>
                  No Events Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
