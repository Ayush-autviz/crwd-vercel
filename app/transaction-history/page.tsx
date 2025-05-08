import React from 'react';
import TransactionHistoryHeader from '@/components/transactionHistory/TransactionHistoryHeader';
import TransactionHistoryList from '@/components/transactionHistory/TransactionHistoryList';
import TransactionHistoryFooter from '@/components/transactionHistory/TransactionHistoryFooter';
import ProfileNavbar from '@/components/profile/ProfileNavbar';
const transactions = [
  { date: 'May 7th', description: '1-time Donation to Habitat for Humanity', amount: '$5' },
  { date: 'May 1st', description: 'Donation Box', amount: '$25' },
  { date: 'April 1st', description: 'Donation Box', amount: '$25' },
  { date: 'March 1st', description: 'Donation Box', amount: '$25' },
];

const TransactionHistoryPage: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col pb-20">
    {/* <TransactionHistoryHeader /> */}
    <ProfileNavbar title="Transaction History" showMobileMenu={true} showDesktopMenu={true} />
    <TransactionHistoryList transactions={transactions} />
    <TransactionHistoryFooter transactions={transactions} />
  </div>
);

export default TransactionHistoryPage;
