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
    time: '1d',
  },
  {
    type: 'post' as const,
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    username: 'mynameismya',
    message: '',
    time: '2d',
    groupName: 'marchofdimes',
    groupAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    link: 'https://example.com/article-about-health',
  },
  {
    type: 'event' as const,
    avatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    username: 'mynameismya',
    message: '',
    time: '3d',
    groupName: 'marchofdimes',
    groupAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    eventTitle: 'Community Fundraiser',
    eventDate: 'June 15, 2023 • 2:00 PM',
  },
];

const NotificationList: React.FC = () => {
  // Group notifications by type
  const connectNotifications = notifications.filter(n => n.type === 'connect' || n.type === 'donation');
  const communityNotifications = notifications.filter(n => n.type === 'post' || n.type === 'event');

  return (
    <div className="w-full flex flex-col">
      {/* Regular notifications */}
      {connectNotifications.map((n, idx) => (
        <NotificationItem key={`connect-${idx}`} {...n} />
      ))}

      {/* Community Updates section */}
      {communityNotifications.length > 0 && (
        <>
          <div className="px-4 py-3 bg-gray-50 border-t border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Community Updates</h3>
          </div>
          {communityNotifications.map((n, idx) => (
            <NotificationItem key={`community-${idx}`} {...n} />
          ))}
        </>
      )}
    </div>
  );
};

export default NotificationList;