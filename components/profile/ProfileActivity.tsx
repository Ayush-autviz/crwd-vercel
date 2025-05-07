import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Ellipsis, EllipsisIcon, Heart, MessageCircle, Share2 } from 'lucide-react';

interface Update {
  avatarUrl: string;
  username: string;
  time: string;
  org: string;
  orgUrl: string;
  text: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
}

interface ProfileActivityProps {
  updates: Update[];
}

const ProfileActivity: React.FC<ProfileActivityProps> = ({ updates }) => (
  <div className=" px-2  col-span-3">
    <div className="font-semibold text-base mb-2 pt-2 pl-3 flex items-center gap-2">
      Activity <span className="text-gray-400 text-sm ">• {updates.length} Updates</span>
    </div>
    <div className="space-y-6">
      {updates.map((u, idx) => (
        <div key={idx} className="bg-white rounded-xl p-1.5 flex gap-2 ">
          <div className=" ">
            <Avatar className="w-8 h-8">
              <AvatarImage src={u.avatarUrl} alt={u.username} />
            </Avatar>
          </div>
          <div className=" flex flex-col gap-2  ">
          <div className="  flex flex-col ">
          <div className="flex items-center gap-2 items-center ">
            <span className="font-semibold text-sm">{u.username}</span>
            <span className="text-xs text-gray-400">• {u.time}</span>
           <EllipsisIcon className='w-4 h-4 ml-auto text-gray-500 cursor-pointer'/>
            </div>
            <a href={u.orgUrl} className="text-xs text-blue-500  hover:underline">{u.org}</a>
          </div>
          
        
          <div className="text-md text-gray-900 mb-3 whitespace-pre-line leading-snug">
            <span className="text-gray-900 my-3">{u.text}</span>
          {u.imageUrl && (
            <div className="w-full flex justify-center my-3">
              <img src={u.imageUrl} alt="activity" className="rounded-lg w-full  object-cover aspect-square" />
            </div>
          )}
          <div className="flex items-center gap-8 text-gray-700 text-base pt-1 px-1">
            <span className="flex items-center gap-1"><Heart className="inline size-5" /> {u.likes}</span>
            <span className="flex items-center gap-1"><MessageCircle className="inline size-5" /> {u.comments}</span>
            <span className="flex items-center gap-1 ml-auto"><Share2 className="inline size-5" /> {u.shares}</span>
          </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProfileActivity; 