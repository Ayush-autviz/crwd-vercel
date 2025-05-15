import React from 'react';
import GroupCrwdHeader from '../../components/groupcrwd/GroupCrwdHeader';
import GroupCrwdSuggested from '../../components/groupcrwd/GroupCrwdSuggested';
import GroupCrwdUpdates from '../../components/groupcrwd/GroupCrwdUpdates';
import GroupCrwdEvent from '../../components/groupcrwd/GroupCrwdEvent';
import GroupCrwdBottomBar from '../../components/groupcrwd/GroupCrwdBottomBar';
import ProfileNavbar from '@/components/profile/ProfileNavbar';

export default function page() {
  return (
    <div>
      <ProfileNavbar title='Group Crwd' showDesktopMenu={false}/>
      <GroupCrwdHeader />
      <GroupCrwdSuggested />
      <GroupCrwdUpdates />
      <GroupCrwdEvent />
      <GroupCrwdBottomBar />
    </div>
  );
}
