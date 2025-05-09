import React from 'react';

const suggested = [
  {
    avatar: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    name: 'Grocery Spot',
    members: 303,
    subtitle: 'Community lunches every Saturday',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    name: 'Food for Thought',
    members: 78,
    subtitle: 'Solving world hunger. One meal at a time.',
  },
];

const GroupCrwdSuggested: React.FC = () => (
  <div className="px-4 pt-2 pb-2">
    <div className="flex items-center justify-between mb-2 px-2">
      <span className="font-semibold text-sm">Suggested CRWD's</span>
      <a href="#" className="text-blue-600 text-xs font-medium flex items-center gap-1">Discover More <span className="text-lg">&rarr;</span></a>
    </div>
    <div className="flex flex-col gap-3 px-5">
      {suggested.map((s, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm p-2 flex items-center gap-3">
          <img src={s.avatar} alt={s.name} className="w-14 h-14 rounded-lg object-cover" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="font-semibold text-base text-gray-900 truncate">{s.name}</span>
            <span className="text-sm text-gray-500 truncate">{s.members} Members</span>
            <span className="text-sm text-gray-500 truncate">{s.subtitle}</span>
          </div>
          <button className="bg-blue-500 text-white text-xs px-6 py-2 rounded-lg font-semibold">Join</button>
        </div>
      ))}
    </div>
  </div>
);

export default GroupCrwdSuggested; 