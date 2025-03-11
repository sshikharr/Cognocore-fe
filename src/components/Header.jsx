import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold text-blue-600">Task Manager</h1>
      <div className="relative inline-block mt-2">
        <p className="text-gray-600 text-lg font-medium">Cognocore Assignment</p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      </div>
    </header>
  );
};

export default Header;