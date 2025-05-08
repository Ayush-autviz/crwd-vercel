import React from 'react';
import Link from 'next/link';

interface SettingsItemProps {
  label: string;
  href: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ label, href }) => (
  <Link href={href} className="flex items-center justify-between px-6 py-3 text-sm text-gray-800 hover:bg-gray-50 transition">
    <span>{label}</span>
    <span className="text-gray-300 text-lg">&#8250;</span>
  </Link>
);

export default SettingsItem; 