import React from 'react';

interface ProfileInterestsProps {
  interests: string[];
}

const ProfileInterests: React.FC<ProfileInterestsProps> = ({ interests }) => (
  <div className="px-4 pt-2 pb-4  border-b border-gray-200 ">
    <div className="font-semibold text-sm mb-2">Mya's Interests</div>
    <div className="w-full flex gap-2 overflow-x-auto scrollbar-none" >
      {interests.map((interest, idx) => (
        <span
          key={idx}
          className="w-fit bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap break-keep"
        >
          {interest}
        </span>
      ))}
    </div>
  
  </div>
);

export default ProfileInterests; 