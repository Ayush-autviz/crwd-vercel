import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationItems from './NavigationItems';

const DesktopNavigation: React.FC = () => (
  <div className="hidden md:flex flex-col h-screen w-72 border-r bg-background">
    {/* Profile Section */}
    <div className="flex items-center gap-3 p-4">
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

    {/* Navigation Links */}
    <NavigationItems 
      className="py-4"
      linkClassName="gap-4"
      showNewPostButton  ={true}
    />

    {/* Footer Links */}
    <div className="mt-auto border-t">
      <div className="flex gap-4 p-4">
        <Link href="/privacy" className="text-xs text-primary">Privacy Policy</Link>
        <Link href="/terms" className="text-xs text-primary">Terms of Service</Link>
      </div>
    </div>
  </div>
);

export default DesktopNavigation; 