import React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
  X,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
//   { icon: <Plus size={20} />, label: 'Create a CRWD', href: '#' },
  { icon: <Users size={20} />, label: 'Your CRWDs', href: '/your-crdws' },
  { icon: <Bookmark size={20} />, label: 'Saved', href: '/saved' },
  { icon: <Search size={20} />, label: 'Explore', href: '#' },
  { icon: <Archive size={20} />, label: 'Donation box', href: '/donation' },
  { icon: <Bell size={20} />, label: 'Notifications', href: '/notifications' },
  { icon: <Shuffle size={20} />, label: 'Transaction history', href: '/transaction' },
  { icon: <Info size={20} />, label: 'About', href: '#' },
  { icon: <HelpCircle size={20} />, label: 'Help', href: '#' },
  {icon:<Settings size={20}/>,label:"Settings",href:'/settings'}
];

const HamburgerMenu: React.FC = () => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild className='p-2'>
        <MenuIcon size={42} className='text-black' />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[85vw] max-w-[320px] border-r shadow-lg">
        {/* Header with close button */}
        {/* <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">Menu</h2>
          <SheetClose className="rounded-full p-1 hover:bg-muted">
            <X size={18} />
          </SheetClose>
        </div> */}

        {/* Profile */}
        <div className="flex items-center gap-3 p-4 border-b">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
            />
            <AvatarFallback>MY</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">My Name is Mya</span>
            <Link href="/profile" className="text-xs text-muted-foreground hover:text-primary">
              Go to your profile
            </Link>
          </div>
        </div>

        {/* Menu List */}
        <div className="flex flex-col py-2">
          <Link
            href="/create-crwd"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            <Plus size={18} className="text-primary" />
            <span>Create a CRWD</span>
          </Link>

          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
            >
              <span className="text-primary">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-auto border-t">
          <div className="flex gap-4 p-4">
            <Link href="/privacy" className="text-xs text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-primary">Terms of Service</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

export default HamburgerMenu;