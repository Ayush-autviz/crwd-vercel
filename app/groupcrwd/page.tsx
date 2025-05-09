import React from 'react';
import GroupCrwdHeader from '@/components/groupcrwd/GroupCrwdHeader'; 
import GroupCrwdUpdates from '@/components/groupcrwd/GroupCrwdUpdates';
import GroupCrwdEvent from '@/components/groupcrwd/GroupCrwdEvent';
import GroupCrwdSuggested from '@/components/groupcrwd/GroupCrwdSuggested';
import ProfileNavbar from '@/components/profile/ProfileNavbar';

const GroupCrwdPage: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col pb-32">
    <ProfileNavbar title="Group Crwd" titleClassName="text-2xl" />
    <GroupCrwdHeader />
    <GroupCrwdUpdates />
    {/* <GroupCrwdEvent /> */}
    <GroupCrwdSuggested />
  </div>
);

export default GroupCrwdPage; 