import React from 'react';
import ProfileNavbar from '@/components/profile/ProfileNavbar';
import SavedList, { SavedData } from '@/components/saved/SavedList';

const savedItems: SavedData[] = [
  {
    // avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Red_Cross_logo.svg/1200px-Red_Cross_logo.svg.png',
    avatar: '/redcross.png',
    title: 'The Red Cross',
    subtitle: 'An health organization that…',
  },
  {
    // avatar: 'https://www.stjude.org/content/dam/en_US/shared/www/logos/st-jude-logo.png',
    avatar: '/grocery.jpg',
    title: 'St. Judes',
    subtitle: "The leading children's hea…",
  },
  {
    // avatar: 'https://www.whatlittlebirdie.com/wp-content/uploads/2021/09/atlanta-womens-healthcare.jpg',
    avatar: '/redcross.png',
    title: "Women's Healthcare of At…",
    subtitle: "We are Atlanta's #1 healthca…",
  },
];

const SavedPage: React.FC = () => (
  <div className="min-h-screen bg-white ">
    {/* <div className="w-full md:max-w-md md:bg-white md:rounded-2xl md:shadow-lg md:mt-12 md:mb-12"> */}
      <ProfileNavbar title="Saved" />
      <SavedList items={savedItems} />
    {/* </div> */}
  </div>
);

export default SavedPage;