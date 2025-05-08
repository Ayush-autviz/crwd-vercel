import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu as MenuIcon,
  Plus,
  Users,
  Bookmark,
  Search,
  Archive,
  Bell,
  Shuffle,
  Info,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
//   { icon: <Plus size={20} />, label: 'Create a CRWD', href: '#' },
  { icon: <Users size={20} />, label: 'Your CRWDs', href: '#' },
  { icon: <Bookmark size={20} />, label: 'Saved', href: '#' },
  { icon: <Search size={20} />, label: 'Explore', href: '#' },
  { icon: <Archive size={20} />, label: 'Donation box', href: '#' },
  { icon: <Bell size={20} />, label: 'Notifications', href: '#' },
  { icon: <Shuffle size={20} />, label: 'Transaction history', href: '#' },
  { icon: <Info size={20} />, label: 'About', href: '#' },
  { icon: <HelpCircle size={20} />, label: 'Help', href: '#' },
];

const HamburgerMenu: React.FC = () => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild className=''>
        <Button variant="ghost" size="icon" className="m-2">
          <MenuIcon size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[100vw] pt-14 ">
        {/* Profile */}
        <div className="flex items-center gap-3 px-10 py-6 border-y border-gray-200">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-gray-900">My Name is Mya</span>
            <span className="text-xs text-gray-500">Go to your profile</span>
          </div>
        </div>
        {/* Menu List */}
        <div className="flex flex-col gap-2 mt-2">
        <Link
            //   key={label}
            href={"/profile"}
              className="flex items-center gap-5 px-10 py-5 text-gray-500 text-sm font-medium hover:bg-gray-50 transition"
            >
              <span className="text-lg w-6 flex justify-center"><Plus size={20} /></span>
              <span>Create a CRWD</span>
            </Link>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-5 px-10 py-5 text-gray-800 text-sm font-medium hover:bg-gray-50 transition"
            >
              <span className="text-lg w-6 flex justify-center">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        {/* <div className="flex-1" /> */}
        <div className="px-10 py-4 text-xs text-blue-500">Privacy Policy</div>
        <div className="px-10 py-4 text-xs text-blue-500">Terms of Service</div>
      </SheetContent>
    </Sheet>
  </div>
);

export default HamburgerMenu; 