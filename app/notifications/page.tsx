import ProfileNavbar from '@/components/profile/ProfileNavbar'
import React from 'react'
import NotificationList from '../../components/notificatons/NotificationList'
import CommunityGuideLines from '../../components/notificatons/CommunityGuideLines'
export default function page() {
  return (
    <section className='bg-white w-full '>
        <ProfileNavbar title="Notifications"/>
        <NotificationList />
        <CommunityGuideLines />
    </section>
  )
}
