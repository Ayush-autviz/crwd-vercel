'use client'
import { usePathname } from 'next/navigation'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Using only light theme

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import {
  Home,
  Search,
  Box,
  User,
  Bell,
  Settings,
  Users,
  TrendingUp,
  Calendar,
  Menu,
  ArrowLeft,
  ArrowRightLeft,
  Heart,
  Plus,
  Archive,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import DesktopNavigation from "@/components/hamburgerMenu/DesktopNavigation";
import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/signup') || pathname?.startsWith('/login') || pathname?.startsWith('/forgot-password') || pathname?.startsWith('/interests') || pathname?.startsWith('/verify')

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-background min-h-screen">
          {/* Desktop Sidebar - Only visible on md screens and NOT on auth pages */}
          {!isAuthPage && (
            <div className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:z-50 md:w-72 md:flex-col md:border-r md:bg-card">
              <div className="flex h-16 items-center justify-center px-6 py-6 border-b">
                <Link href="/">
                <Image
                  src="/logo3.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
                </Link>
              </div>
              {/* <ScrollArea className="flex-1 py-4"> */}
                  <DesktopNavigation />
                {/* </ScrollArea> */}
            
            {/* </div> */}
             
                {/* <div className="px-3 py-2">
                  <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">
                    Features
                  </h2>
                  <div className="space-y-1">
                    <Link href={"/notifications"}>
                    <Button variant="ghost" className="w-full justify-start cursor-pointer">
                      <Bell className="mr-2 h-4 w-4" />
                      <span>Notifications</span>
                    </Button>
                    </Link>
                    <Link href={"/saved"}>
                    <Button variant="ghost" className="w-full justify-start cursor-pointer">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Saved</span>
                    </Button>
                    </Link>
                    <Link href={"/transaction-history"}>
                    <Button variant="ghost" className="w-full justify-start cursor-pointer">
                      <ArrowRightLeft className="mr-2 h-4 w-4" />
                      <span>Transaction History</span>
                    </Button>
                    </Link>
                    <Link href={"/settings"}>
                    <Button variant="ghost" className="w-full justify-start cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Button>
                    </Link>
                    </div>
                  </div> */}
               
              {/* <div className="border-t p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        // src="/placeholder.svg?height=40&width=40"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">
                        john@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          )}

          {/* Main Content with Mobile and Desktop Views */}
          <div className={isAuthPage ? "" : "md:pl-72"}>
            {/* Mobile Content */}
            <div className="md:hidden no-scrollbar">
              {/* Mobile Header */}
              {/* <header className="flex items-center justify-between p-4 bg-card border-b sticky top-0 z-10">
            <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>
            <Image
      src="/logo.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center relative">
                <div className="w-3 h-3 rounded-full bg-destructive absolute top-1 right-1"></div>
                <Bell className="h-5 w-5" />
              </div>
            </div>
          </header> */}

              {/* Main Content */}
              {children}
            </div>

            {/* Desktop Content */}
            <div className="hidden md:block">
              {/* Desktop Header */}
              {/* <header className="bg-card border-b p-[13.5px] flex items-center justify-between sticky top-0 z-10">
            <h1 className="text-xl font-bold">Feed the hungry</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </Button>
              <div className="relative">
                <div className="absolute z-10 top-[-2] right-0 w-3 h-3 bg-destructive rounded-full"></div>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header> */}

              {/* Main Content */}
              {children}
            </div>
          </div>

          {/* Mobile Bottom Navigation - Only show if NOT on auth pages */}
          {!isAuthPage && (
            <nav className="fixed bottom-0 left-0 right-0 bg-card border-t flex justify-around py-3 mx-auto z-10 md:hidden bg-gray-50">
              <Link
                className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                href={"/"}
              >
                <Button
                  variant="ghost"
                  className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                >
                  <Home className="h-5 w-5" />
                  <span className="text-xs ">Home</span>
                </Button>
              </Link>
              <Link
                className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                href={"/search"}
              >
                <Button
                  variant="ghost"
                  className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                >
                  <Search className="h-5 w-5" />
                  <span className="text-xs ">Search</span>
                </Button>
              </Link>
              <Link
                className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                href={"/donation"}
              >
                <Button
                  variant="ghost"
                  className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                >
                  {/* <Plus className="h-5 w-5" /> */}
                  <Archive className="h-5 w-5" />
                  <span className="text-xs ">Donation</span>
                </Button>
              </Link>
              <Link
                className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                href={"/notifications"}
              >
                <Button
                  variant="ghost"
                  className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                >
                  <Bell className="h-5 w-5" />
                  <span className="text-xs ">Activity</span>
                </Button>
              </Link>
              <Link
                className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                href={"/profile"}
              >
                <Button
                  variant="ghost"
                  className="flex flex-col items-center h-auto py-2 px-0 flex-1 text-muted-foreground"
                >
                  <User className="h-5 w-5" />
                  <span className="text-xs ">Profile</span>
                </Button>
              </Link>
            </nav>
          )}
        </div>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}