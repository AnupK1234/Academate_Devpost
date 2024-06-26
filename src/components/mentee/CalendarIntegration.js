import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const CalendarIntegration = () => {
  const mentorAppointments = [
    { id: 1, date: '2023-08-01', time: '10:00 AM', topic: 'Introduction to Web Dev' },
    { id: 2, date: '2023-08-05', time: '3:30 PM', topic: 'React JS Basics' },
  ];

  return (
    <div className='p-4'>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='p-10 min-h-screen bg-blue-100'
      >
        <div className='py-12 px-4 text-center'>
          <div className='container mx-auto'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl font-bold mb-8'
            >
              Calendar Integration
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Google Calendar Integration</h2>
              <p>
                Integrate your schedule with Google Calendar for effective time management.
              </p>
              <p className='text-sm text-gray-600 mt-2'>Status: Not Integrated</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Integrate</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Microsoft Calendar Integration</h2>
              <p>
                Sync your schedule with Microsoft Calendar to stay organized.
              </p>
              <p className='text-sm text-gray-600 mt-2'>Status: Not Integrated</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Integrate</button>
            </motion.div>

            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CalendarIntegration;
