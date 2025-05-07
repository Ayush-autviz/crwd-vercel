import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Star, Award } from 'lucide-react';

const aboutMe = `Passionate about helping others, volunteering, and making a difference in the community. Ice cream lover.`;

const achievements = [
  { icon: <Star className="w-4 h-4 text-yellow-400" />, label: 'Top Volunteer 2024' },
  { icon: <Award className="w-4 h-4 text-blue-500" />, label: 'Community Hero' },
];

const suggestedFriends = [
  { name: 'Ava Smith', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Liam Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Olivia Lee', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const trendingCauses = [
  'Clean Water Access',
  'Tree Planting',
  'Food Security',
  'Animal Rescue',
];

const ProfileAside: React.FC = () => (
  <aside className="space-y-6 w-full  ">
    {/* About Me */}
    {/* <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <div className="font-semibold text-base mb-2">About Me</div>
      <div className="text-sm text-gray-700 leading-snug">{aboutMe}</div>
    </div> */}
    {/* Achievements */}
    <div className="w-full bg-gray-50 rounded-xl p-4 shadow-sm">
      <div className="font-semibold text-base mb-2">Achievements</div>
      <ul className="space-y-2">
        {achievements.map((ach, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-800">
            {ach.icon}
            <span>{ach.label}</span>
          </li>
        ))}
      </ul>
    </div>
    {/* Suggested Friends */}
    <div className="w-full bg-gray-50 rounded-xl p-4 shadow-sm">
      <div className="font-semibold text-base mb-3">Suggested Friends</div>
      <div className="space-y-3">
        {suggestedFriends.map((f, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <Avatar className="w-9 h-9">
              <AvatarImage src={f.avatar} alt={f.name} />
            </Avatar>
            <span className="flex-1 text-sm font-medium">{f.name}</span>
            <Button className="h-7 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 shadow-none hover:bg-blue-200 transition-none">Follow</Button>
          </div>
        ))}
      </div>
    </div>
    {/* Trending Causes */}
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <div className="font-semibold text-base mb-3">Trending Causes</div>
      <ul className="space-y-2">
        {trendingCauses.map((cause, idx) => (
          <li key={idx} className="text-sm text-gray-700">{cause}</li>
        ))}
      </ul>
    </div>
  </aside>
);

export default ProfileAside; 