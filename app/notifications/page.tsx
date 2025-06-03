import ProfileNavbar from '@/components/profile/ProfileNavbar'
import React from 'react'
import NotificationTabs from '../../components/notificatons/NotificationTabs'

export default function page() {
  return (
    <section className='bg-white w-full '>
        <ProfileNavbar title="Notifications"/>
        <NotificationTabs />
    </section>
  )
}
