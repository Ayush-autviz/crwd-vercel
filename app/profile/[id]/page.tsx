import React from 'react'
import ProfileEditCard from '../../../components/profile/ProfileEditCard';
import ProfileNavbar from '@/components/profile/ProfileNavbar';

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-gray-50 space-y-6 bg-white">
        <ProfileNavbar title="Profile" titleClassName="text-2xl" />
      <ProfileEditCard
        avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
        name="My Name is Mya"
        username="myamakes_moves"
        location="Atlanta, GA"
        bio={`This is a bio about Mya and how she likes to help others and give back to her community. She also loves ice cream.`}
      />
      {/* <Button className="mt-6 w-40 h-10 rounded-lg text-base font-semibold bg-blue-100 text-blue-700 border border-blue-200 shadow-none hover:bg-blue-200 transition-none">Follow</Button> */}
    </div>
  );
}
 