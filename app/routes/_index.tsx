import type { MetaFunction } from '@remix-run/node';
import GrowLog from './GrowLog.js';

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
      <nav className='bg-background border-b border-divider px-4 lg:px-6 py-3 dark:bg-dark-primary'>
        <div className='container mx-auto flex flex-wrap justify-between items-center'>
          {/* Logo */}
          <a href='#' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Armadillo's Garden Log
            </span>
          </a>

          {/* Actions and Menu */}
          <div className='flex items-center lg:order-2'>
            {/* Login Button */}
            <a
              href='#'
              className='text-primary-text hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
               font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2'
            >
              Log in
            </a>

            {/* Get Started Button */}
            <a
              href='#'
              className='bg-primary text-white hover:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
               font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2'
            >
              Get started
            </a>

            {/* Mobile Menu Toggle */}
            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* Hamburger Icons - Omitted for brevity, same structure as before */}
            </button>
          </div>

          {/* Desktop Menu (Hidden on mobile)  */}
          <div
            className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              {/* Menu Items - Adjust as needed */}
            </ul>
          </div>
        </div>
      </nav>
      <GrowLog />
    </div>
  );
}
