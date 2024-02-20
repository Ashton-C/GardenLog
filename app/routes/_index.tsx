import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Garden Log' },
    {
      name: 'description',
      content: 'A comprehensive app for taking care of your garden.',
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className=''>Hello world!</h1>
    </div>
  );
}
