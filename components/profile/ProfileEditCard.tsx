import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';

interface ProfileEditCardProps {
  avatarUrl: string;
  name: string;
  username: string;
  location: string;
  bio: string;
}

const ProfileEditCard: React.FC<ProfileEditCardProps> = ({ avatarUrl, name, username, location, bio }) => (
  <div className="w-full  mx-auto bg-white   ">
    <div className="flex flex-col items-center mb-6">
      <Avatar className="w-16 h-16 mb-2">
        <AvatarImage src={avatarUrl} alt={name} />
      </Avatar>
      <button className="text-sm font-semibold text-gray-800 hover:underline">Edit picture</button>
    </div>
    <div className="divide-y divide-gray-300 border-b border-t overflow-hidden">
      <div className="flex items-center px-4 py-4">
        <div className="w-1/3 text-gray-700 font-medium">Name</div>
        <div className="w-2/3 text-gray-900 font-normal">{name}</div>
      </div>
      <div className="flex items-center px-4 py-4">
        <div className="w-1/3 text-gray-700 font-medium">Username</div>
        <div className="w-2/3 text-gray-900 font-normal">{username}</div>
      </div>
      <div className="flex items-center px-4 py-4">
        <div className="w-1/3 text-gray-700 font-medium">Location</div>
        <div className="w-2/3 text-gray-900 font-normal">{location}</div>
      </div>
      <div className="flex items-start px-4 py-4">
        <div className="w-1/3 text-gray-700 font-medium">Bio</div>
        <div className="w-2/3 text-gray-900 font-normal whitespace-pre-line">{bio}</div>
      </div>
    </div>
  </div>
);

export default ProfileEditCard; 