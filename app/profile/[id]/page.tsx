"use client";

import React, { useState } from 'react'
import ProfileEditCard from '../../../components/profile/ProfileEditCard';
import ProfileNavbar from '@/components/profile/ProfileNavbar';
import { toast } from 'sonner';

export default function Page() {
  const [profileData, setProfileData] = useState({
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "My Name is Mya",
    username: "myamakes_moves",
    location: "Atlanta, GA",
    bio: "This is a bio about Mya and how she likes to help others and give back to her community. She also loves ice cream."
  });

  const handleSave = (data: { name: string; username: string; location: string; bio: string; avatarUrl?: string }) => {
    // Update the profile data
    setProfileData(prev => ({
      ...prev,
      ...data
    }));

    // Show success message
    toast.success('Profile updated successfully!');

    // Here you would typically make an API call to save the data
    console.log('Saving profile data:', data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start  space-y-6 min-h-screen">
      <ProfileNavbar title="Edit Profile" titleClassName="text-2xl" />
      <div className="w-full   ">
        <ProfileEditCard
          avatarUrl={profileData.avatarUrl}
          name={profileData.name}
          username={profileData.username}
          location={profileData.location}
          bio={profileData.bio}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
