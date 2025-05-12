import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';
import Image from 'next/image';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import Link from 'next/link';
import { Button } from '../ui/button';

const CauseHeader: React.FC = () => (
  <header className="w-full flex items-center justify-between px-2 h-16  bg-white border-b sticky top-0 z-10 md:hidden">
    <div className="flex items-center gap-2">
      <Link href="/">
        <button className="text-gray-700">
          <ArrowLeft size={22} />
        </button>
      </Link>
    </div>
    <div className="flex-grow flex justify-center">
      <Image src="/logo3.png" width={100} height={100} alt="CRWD Logo" />
    </div>
    <div className="flex items-center gap-2">
      <button className="text-gray-700"><Share2 size={22} /></button>
      <HamburgerMenu />
    </div>
  </header>
);

export default CauseHeader;