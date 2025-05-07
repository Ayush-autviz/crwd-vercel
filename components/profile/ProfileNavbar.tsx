import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function ProfileNavbar() {
  return (
    <>
    <header className="w-full flex items-center p-4 bg-card border-b sticky top-0 z-10 md:hidden">
    {/* <Button variant="ghost" size="icon" className="mr-2" asChild>
      <Link href="/">
        <ArrowLeft className="h-5 w-5" />
      </Link>
    </Button>
    <h1 className="text-lg font-semibold">EXPLORE</h1> */}
    <div className="size-9"></div>
    <div className="flex-grow"></div>
        <Image src="/logo3.png" width={80} height={30} alt="Logo" />
    <div className="flex-grow"></div>
    <Button variant="ghost" size="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>
  </header>
    {/* Desktop Header - Only visible on desktop */}
    <header className="w-full bg-card border-b hidden p-[13.5px] md:flex items-center justify-between sticky top-0">
    <h1 className="text-xl font-bold">Home</h1>
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
  </>
  )
}
