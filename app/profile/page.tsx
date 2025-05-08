import React from 'react'
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStats from '../../components/profile/ProfileStats';
import ProfileInterests from '../../components/profile/ProfileInterests';
import ProfileActivity from '../../components/profile/ProfileActivity';
import ProfileNavbar from '../../components/profile/ProfileNavbar';
import ProfileSidebar from '../../components/profile/ProfileSidebar';
import { profileActivity } from '@/lib/profile/profileActivity';

export default function Page() {
  return (
    <div className="bg-white overflow-hidden  mb-8  rounded-xl  space-y-4 md:space-y-0">
      <ProfileNavbar title="Profile"/>
      <div className=" flex flex-col space-y-4 px-3">
        <ProfileHeader
          avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
          name="Mya"
          location="Atlanta, GA"
          link="thisisaurl.com"
        />
        <ProfileBio bio="This is a bio about Mya and how she likes to help others and give back to her community. She also loves ice cream." />
        <ProfileStats causes={10} crwds={3} followers={58} following={8} />
        <ProfileInterests interests={["Environment", "Food Insecurity", "Environment","Food Insecurity"]} />
       <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-2 py-4">
       <ProfileActivity
          updates={profileActivity}
        />
         <div className="hidden md:block col-span-2 pt-3 pr-5 ">
        <ProfileSidebar />
      </div>
       </div>
      </div>
     
    </div>
  );
}
