'use client'
import React, { useState } from 'react';
import UserListModal, { UserType } from './UserListModal';

interface ProfileStatsProps {
  causes: number;
  crwds: number;
  followers: number;
  following: number;
}

// Sample data for demonstration
const sampleCauses: UserType[] = [
  { id: '1', name: 'Red Cross', username: 'redcross', avatarUrl: '/redcross.png' },
  { id: '2', name: 'St. Judes', username: 'stjudes', avatarUrl: '/grocery.jpg' },
  { id: '3', name: 'Women\'s Healthcare', username: 'womenshealth', avatarUrl: '/redcross.png' },
];

const sampleCRWDs: UserType[] = [
  { id: '1', name: 'Feed the Hungry', username: 'feedthehungry', avatarUrl: '/grocery.jpg' },
  { id: '2', name: 'Save the Oceans', username: 'saveoceans', avatarUrl: '/redcross.png' },
  { id: '3', name: 'Education for All', username: 'eduforall', avatarUrl: '/grocery.jpg' },
];

const sampleFollowers: UserType[] = [
  { id: '1', name: 'John Doe', username: 'johndoe', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', isFollowing: true },
  { id: '2', name: 'Jane Smith', username: 'janesmith', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg', isFollowing: false },
  { id: '3', name: 'Alex Johnson', username: 'alexj', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: true },
];

const sampleFollowing: UserType[] = [
  { id: '1', name: 'Sarah Williams', username: 'sarahw', avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg', isFollowing: true },
  { id: '2', name: 'Mike Brown', username: 'mikeb', avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg', isFollowing: true },
];

const ProfileStats: React.FC<ProfileStatsProps> = ({ causes, crwds, followers, following }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalUsers, setModalUsers] = useState<UserType[]>([]);

  const openModal = (title: string, users: UserType[]) => {
    setModalTitle(title);
    setModalUsers(users);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-between text-center divide-x-2 divide-gray-200  rounded-md">
        <div
          className="flex-1 cursor-pointer hover:bg-gray-50 py-1 transition-colors rounded-l-md flex flex-col items-center"
          onClick={() => openModal('Causes', sampleCauses)}
        >
          <div className="font-bold text-lg">{causes??0}</div>
          <div className="text-xs text-gray-500 flex items-center">
            Causes
          </div>
        </div>
        <div
          className="flex-1 cursor-pointer hover:bg-gray-50 py-1 transition-colors flex flex-col items-center"
          onClick={() => openModal('CRWDs', sampleCRWDs)}
        >
          <div className="font-bold text-lg">{crwds??0}</div>
          <div className="text-xs text-gray-500 flex items-center">
            CRWDs
          </div>
        </div>
        <div
          className="flex-1 cursor-pointer hover:bg-gray-50 py-1 transition-colors flex flex-col items-center"
          onClick={() => openModal('Followers', sampleFollowers)}
        >
          <div className="font-bold text-lg">{followers??0}</div>
          <div className="text-xs text-gray-500 flex items-center">
            Followers
          </div>
        </div>
        <div
          className="flex-1 cursor-pointer hover:bg-gray-50 py-1 transition-colors rounded-r-md flex flex-col items-center"
          onClick={() => openModal('Following', sampleFollowing)}
        >
          <div className="font-bold text-lg">{following??0}</div>
          <div className="text-xs text-gray-500 flex items-center">
            Following
          </div>
        </div>
      </div>

      <UserListModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        users={modalUsers}
      />
    </>
  );
};

export default ProfileStats;