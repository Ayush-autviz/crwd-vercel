import React from 'react';

const GroupCrwdBottomBar: React.FC = () => (
  <div className="fixed bottom-0 left-0 w-full bg-white p-3 z-20 shadow-lg md:hidden flex justify-center">
    <button className="w-full max-w-md bg-blue-600 text-white rounded-xl py-3 font-semibold text-lg shadow-lg hover:bg-blue-700 transition">Donate</button>
  </div>
);

export default GroupCrwdBottomBar; 