import React from 'react';
import { MoreHorizontal, Heart, MessageCircle, Share2 } from 'lucide-react';

const GroupCrwdEvent: React.FC = () => (
  <div className="px-2 pt-2 pb-2">
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Chad" className="w-7 h-7 rounded-full object-cover" />
          <span className="font-semibold text-sm">@Chad</span>
          <span className="text-xs text-gray-400">• 17h</span>
        </div>
        <button className="text-gray-400"><MoreHorizontal size={18} /></button>
      </div>
      <div className="font-semibold text-base">Grocery Spot Cleanup</div>
      <div className="flex flex-wrap gap-4 text-xs text-gray-700">
        <span><span className="font-semibold">Date</span> 3/8/2025</span>
        <span><span className="font-semibold">Time</span> 7:00 am</span>
        <span><span className="font-semibold">RSVP</span> 8</span>
        <span><span className="font-semibold">Maybe</span> 17</span>
      </div>
      <div className="text-xs text-gray-700"><span className="font-semibold">Place</span> 123 Main St. Somewhere, USA</div>
      <div className="text-sm text-gray-700">Join us this saturday! We'll carpool</div>
      <div className="flex items-center gap-6 text-xs text-gray-500 pt-1">
        <span className="flex items-center gap-1"><Heart size={16} /> 2</span>
        <span className="flex items-center gap-1"><MessageCircle size={16} /> 0</span>
        <span className="flex items-center gap-1"><Share2 size={16} /> 3</span>
      </div>
    </div>
  </div>
);

export default GroupCrwdEvent; 