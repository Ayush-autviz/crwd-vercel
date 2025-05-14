'use client'
import React, { useState } from 'react';
import MembersTabNav from './MembersTabNav';
import MembersList from './MembersList';
import MembersStatsCard from './MembersStatsCard';
import CollectiveDonationsSummary from './CollectiveDonationsSummary';
import RecentDonationsList from './RecentDonationsList';
import { Card, CardContent } from '@/components/ui/card';
import ProfileNavbar from '@/components/profile/ProfileNavbar';

const members = [
  { name: 'Chad F.', username: 'chad', connected: true },
  { name: 'Mia Cares', username: 'miacares1', connected: false },
  { name: 'Conrad M.', username: 'conradm1', connected: false },
  { name: 'Morgan Wallace', username: 'moremorgan', connected: false },
  { name: 'Ashton Thomas', username: 'ash_t2001', connected: false },
  { name: 'Marc Paul', username: 'makinmymarc', connected: false },
  { name: 'Cara Cara', username: 'carebear', connected: false },
  { name: 'Raquel Wells', username: 'rawells', connected: false },
  { name: 'Bethany Burke', username: 'bburke', connected: false },
  { name: 'Max Fields', username: 'maxf', connected: false },
];

const MembersTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Members');
  const [showRecentDonations, setShowRecentDonations] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'Collective Donations') {
      setShowRecentDonations(false);
    }
  };

  return (
    <main className="pb-16 md:pb-0">
      {/* Mobile */}
      <div className="md:hidden">
        <ProfileNavbar title="Feed the hungry" />
        <MembersTabNav activeTab={activeTab} setActiveTab={handleTabChange} />
        <div className=" py-2 mt-2">
          {activeTab === 'Cause' && (
            <div className="text-center text-muted-foreground mt-5 px-4">Cause details go here (1 Cause)</div>
          )}
          {activeTab === 'Members' && <MembersList members={members} />}
          {activeTab === 'Collective Donations' && (
            showRecentDonations ? (
              <RecentDonationsList onBack={() => setShowRecentDonations(false)} />
            ) : (
              <CollectiveDonationsSummary
                onSeeRecentDonations={() => setShowRecentDonations(true)}
                causesCount={3}
                membersCount={59}
                donationAmount={34}
              />
            )
          )}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <ProfileNavbar title="Feed the hungry" />
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mr-3">
                      <span className="text-lg font-bold text-primary">FH</span>
                    </div>
                    <div>
                      <p className="font-medium">Feed the hungry</p>
                      <p className="text-primary">Members</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {/* Add share/save buttons here if needed */}
                  </div>
                </div>
                <MembersTabNav activeTab={activeTab} setActiveTab={handleTabChange} />
                {activeTab === 'Cause' && (
                  <div className="text-center text-muted-foreground mt-10">Cause details go here (1 Cause)</div>
                )}
                {activeTab === 'Members' && <MembersList members={members} />}
                {activeTab === 'Collective Donations' && (
                  <CollectiveDonationsSummary
                    onSeeRecentDonations={() => {}}
                    causesCount={3}
                    membersCount={59}
                    donationAmount={34}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            <MembersStatsCard activeTab={activeTab} count={activeTab === 'Members' ? members.length : activeTab === 'Cause' ? 1 : 43} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MembersTabs; 