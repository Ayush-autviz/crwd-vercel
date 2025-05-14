import React from 'react';
import { Button } from '@/components/ui/button';

interface MembersTabNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { label: 'Cause', value: 'Cause' },
  { label: 'Members', value: 'Members' },
  { label: 'Collective Donations', value: 'Collective Donations' },
];

const MembersTabNav: React.FC<MembersTabNavProps> = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-around border-b px-4 mt-3">
    {tabs.map(tab => (
      <Button
        key={tab.value}
        variant="ghost"
        className={`flex-1 py-4 text-center rounded-none border-b pb-7   ${activeTab === tab.value ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'}`}
        onClick={() => setActiveTab(tab.value)}
      >
        {tab.label}
      </Button>
    ))}
  </div>
);

export default MembersTabNav; 