import React from 'react';
import NotificationItem from './NotificationItem';

const notifications = [
  {
    type: 'connect' as const,
    avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    username: 'mandy',
    message: 'Mandy would like to connect with you',
    time: '17h',
  },
  {
    type: 'donation' as const,
    message: 'Your $25 monthly donation was processed',
    time: '',
  },
];

const NotificationList: React.FC = () => {
  return (
    <div className=" w-full flex flex-col">
      {notifications.map((n, idx) => (
        <NotificationItem key={idx} {...n} />
      ))}
    </div>
  );
};

export default NotificationList; 