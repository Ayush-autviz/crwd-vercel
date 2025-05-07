import React from 'react'
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStats from '../../components/profile/ProfileStats';
import ProfileInterests from '../../components/profile/ProfileInterests';
import ProfileActivity from '../../components/profile/ProfileActivity';
import ProfileNavbar from '../../components/profile/ProfileNavbar';
import ProfileSidebar from '../../components/profile/ProfileSidebar';

export default function Page() {
  return (
    <div className="bg-white overflow-hidden  mb-8  rounded-xl  space-y-4 md:space-y-0">
<ProfileNavbar title="Profile" />
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
          updates={[
            {
              avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
              username: "mynameismya",
              time: "17h",
              org: "marchofdimes",
              orgUrl: "#",
              text: `The quick, brown fox jumps over a lazy dog.\nDJs flock by when MTV ax quiz prog. Junk`,
              imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              likes: 2,
              comments: 0,
              shares: 3,
            },
            {
              avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
              username: "mynameismya",
              time: "1d",
              org: "feedthehungry",
              orgUrl: "#",
              text: `Had a great time volunteering at the food bank today! So many smiles and so much hope.`,
              imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
              likes: 5,
              comments: 1,
              shares: 0,
            },
            {
              avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
              username: "mynameismya",
              time: "2d",
              org: "greenearth",
              orgUrl: "#",
              text: `Excited to join the Green Earth clean-up event this weekend! Let's make a difference together. 🌱`,
              likes: 8,
              comments: 2,
              shares: 1,
            },
            {
              avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
              username: "mynameismya",
              time: "3d",
              org: "animalrescue",
              orgUrl: "#",
              text: `Met some adorable pups at the shelter. Please consider adopting or fostering if you can! 🐶❤️`,
              imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80",
              likes: 12,
              comments: 3,
              shares: 4,
            },
          ]}
        />
         <div className="hidden md:block col-span-2 pt-3 pr-5 ">
        <ProfileSidebar />
      </div>
       </div>
      </div>
     
    </div>
  );
}
