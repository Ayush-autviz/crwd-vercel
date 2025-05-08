import React from 'react';

interface ProfileStatsProps {
  causes: number;
  crwds: number;
  followers: number;
  following: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ causes, crwds, followers, following }) => (
  <div className="flex justify-between   text-center  divide-x-2 divide-gray-200">
    <div className="flex-1">
      <div className="font-bold text-lg">{causes??0}</div>
      <div className="text-xs text-gray-500">Causes</div>
    </div>
    <div className="flex-1">
      <div className="font-bold text-lg">{crwds??0}</div>
      <div className="text-xs text-gray-500">CRWDs</div>
    </div>
    <div className="flex-1">
      <div className="font-bold text-lg">{followers??0}</div>
      <div className="text-xs text-gray-500">Followers</div>
    </div>
    <div className="flex-1">
      <div className="font-bold text-lg">{following??0}</div>
      <div className="text-xs text-gray-500">Following</div>
    </div>
  </div>
);

export default ProfileStats; 