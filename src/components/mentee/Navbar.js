import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const navbarLinks = [
    { path: '/send_mentorship_requests', title: 'Send Requests' },
    { path: '/mentee_receive_notifications', title: 'Receive Notifications' },
    { path: '/mentee_calendar_integration', title: 'Calendar Integration' },
    { path: '/access_mentorship_resources', title: 'Access Resources' },
  ];

  return (
    <nav className="bg-blue-500 py-4 px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="space-x-4">
            {navbarLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-white hover:underline">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
