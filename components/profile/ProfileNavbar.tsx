import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import { cn } from '@/lib/utils'

export default function ProfileNavbar({showMobileMenu=true,showDesktopMenu=true,title,titleClassName}: {showMobileMenu?: boolean,showDesktopMenu?: boolean,title?:string,titleClassName?:string}) {
  return (
    <>
   {
    showMobileMenu && (
      <header className="w-full relative flex items-center h-16 bg-card border-b sticky top-0 z-10 md:hidden">
      {/* Centered Logo */}
      <div className="flex-grow flex justify-center">
        <Image src="/logo3.png" width={80} height={30} alt="Logo" />
      </div>
      {/* Hamburger Menu at right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <HamburgerMenu />
      </div>
    </header>
    )
   }
    {showDesktopMenu && (

    <header className="w-full bg-card border-b hidden h-16 px-6 md:flex items-center justify-between sticky top-0">
    {title && <h1 className={cn("text-xl font-bold",titleClassName)}>{title}</h1>}
    <div className="flex items-center space-x-4">
      <Button variant="outline" className="flex items-center gap-2">
        <Bell className="h-4 w-4" />
        <span>Notifications</span>
      </Button>
      <div className="relative">
        <div className="absolute z-10 top-[-2] right-0 w-3 h-3 bg-destructive rounded-full"></div>
        <Avatar>
          <AvatarImage
            src="/placeholder.svg?height=40&width=40"
            alt="User"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </header>
  )}
  </>
  )
}
