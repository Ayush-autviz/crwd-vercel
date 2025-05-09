import React from 'react';
import CauseHeader from '@/components/cause/CauseHeader'; 
import CauseProfileCard from '@/components/cause/CauseProfileCard';
import CauseRecentDonations from '@/components/cause/CauseRecentDonations';
import CauseAboutCard from '@/components/cause/CauseAboutCard';
import CauseDonateBar from '@/components/cause/CauseDonateBar';
import HighLights from '@/components/cause/highlight/HighLights';

const CausePage: React.FC = () => (
  <div className=" min-h-screen md:h-full bg-white flex flex-col pb-28">
    <CauseHeader />
    <div className="flex flex-col space-y-6 py-4">
      <CauseProfileCard />  
      <HighLights/>
      <CauseRecentDonations />
      <CauseAboutCard />
    </div>
    <CauseDonateBar />
  </div>
);


export default CausePage; 