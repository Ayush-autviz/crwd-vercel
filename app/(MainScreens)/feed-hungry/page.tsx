// app/page.js (Home Screen)
"use client";

import { useState } from "react";
import Image from "next/image";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import {
  ArrowLeft,
  Archive,
  Share,
  Bookmark,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Share2,
  Plus,
  Users,
  Search,
  Box,
  User,
  Home as HomeI,
  Bell,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";

import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";
import PopularPosts from "@/components/PopularPosts";

export default function feedHungry() {
  const [activeTab, setActiveTab] = useState("home");

  // Sample members data (based on the uploaded image)
  const members = [
    { name: "Chad F.", username: "chad", connected: true },
    { name: "Mia Cares", username: "miacares1", connected: false },
    { name: "Conrad M.", username: "conradm1", connected: false },
    { name: "Morgan Wallace", username: "moremorgan", connected: false },
    { name: "Ashton Thomas", username: "ash_t2001", connected: false },
    { name: "Marc Paul", username: "makinmymarc", connected: false },
    { name: "Cara Cara", username: "carebear", connected: false },
    { name: "Raquel Wells", username: "rawells", connected: false },
    { name: "Bethany Burke", username: "bburke", connected: false },
    { name: "Max Fields", username: "maxf", connected: false },
  ];

  return (
    <main className="pb-16 md:pb-0">
      {/* Mobile Content */}
      <div className="md:hidden mx-auto bg-background min-h-screen">
        <ProfileNavbar title="Feed the hungry" />

        <main className="pb-16">
          {/* Change 1: Adjusted layout to keep "Feed the hungry" and "supports" on one line, moved buttons to top-right */}
          <div className="flex justify-between items-start p-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                  src="/placeholder.svg?height=60&width=60"
                  alt="CRWD Logo"
                />
                <AvatarFallback>FH</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex flex-col ">
                  {/* Reduced font size to fit on one line */}
                  <h1 className="text-sm font-bold mr-1">Feed the hungry</h1>
                  <span className="text-muted-foreground text-sm">
                    supports
                  </span>
                </div>
              </div>
            </div>
            {/* Moved Share, Bookmark, Join buttons to top-right */}
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline">Join</Button>
            </div>
          </div>

          <div className="px-4 py-2">
            <p className="text-xl leading-relaxed">
              Join us in the cause to solve world hunger.
            </p>
          </div>

          <div className="px-4 py-2 flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Founder"
              />
              <AvatarFallback>CF</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground">
              Founded by{" "}
              <span className="text-foreground font-medium">@ChadFofana1</span>
            </span>
          </div>

          <div className="flex justify-between px-4 py-4 text-center border-t border-b my-2">
            <div className="flex-1 border-r">
              <div className="font-bold">10</div>
              <div className="text-sm text-muted-foreground">Supporting</div>
            </div>
            <Link className="flex-1 border-r" href="/members">
              <div>
                <div className="font-bold">58</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
            </Link>
            <div className="flex-1">
              <div className="font-bold">34</div>
              <div className="text-sm text-muted-foreground">Collective</div>
            </div>
          </div>

          <div className="flex px-4 py-2 space-x-2 overflow-x-auto">
            <Badge
              variant="secondary"
              className="bg-[#F0F2FA] rounded-full px-3 py-1"
            >
              Animal Welfare
            </Badge>
            <Badge
              variant="secondary"
              className="bg-[#F0F2FA] rounded-full px-3 py-1"
            >
              Environment
            </Badge>
            <Badge
              variant="secondary"
              className="bg-[#F0F2FA] rounded-full px-3 py-1"
            >
              Food Insecurity
            </Badge>
          </div>

          <div className="px-4 py-2">
            <div className="w-full overflow-x-auto whitespace-nowrap">
              <div className="flex space-x-2 p-2 rounded-lg min-w-max">
                {[
                  "adidas.jpg",
                  "benz.jpg",
                  "maz.jpg",
                  "starbucks.jpg",
                  "hy.jpg",
                  "por.jpg",
                  "tesla.jpg",
                  "astronmartin.jpg",
                  "mclaren.jpg",
                ].map((logo, i) => (
                  <Avatar key={logo} className="h-10 w-10">
                    <AvatarImage src={logo} alt={`Partner ${i + 1}`} />
                    <AvatarFallback>{i + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>

          <div className="px-4 py-2 text-muted-foreground">
            <p>
              Featuring the Non Profits: Grocery Spot, Food for Thought, Meals
              on Wheels, American Red Cross, & Pizza Hut...
              <Button variant="link" className="p-0 h-auto text-primary">
                See More
              </Button>
            </p>
          </div>

          <div className="px-4 py-4">
            <Button
              className="w-full py-6 text-lg bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
              size="lg"
            >
              Donate
            </Button>
          </div>

          <div className="border-t">
            <div className="px-4 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-medium">4 Updates</h2>
              <Link href="/create-post">
              <Button
                size="icon"
                className="rounded-xl bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
              >
                <Plus className="h-5 w-5" />
              </Button>
              </Link>
            </div>
          </div>

          <div className="">
            <PopularPosts />
          </div>
        </main>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block">
        {/* Desktop Header */}
        <ProfileNavbar title="Feed the hungry" />

        {/* Desktop Main Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Cause Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="py-0">
              {/* Hero Section */}
              <div className="relative h-52 md:h-52 bg-muted rounded-t-lg">
                <div className="absolute bottom-0 left-0 p-6 ">
                  <h1 className="text-3xl font-bold mb-2">Feed the hungry</h1>
                  <p className="text-lg opacity-90">
                    Supporting families experiencing food insecurity in the
                    greater Atlanta area
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <CardContent className="">
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center mb-6 gap-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Founder"
                      />
                      <AvatarFallback>CF</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Founded by</p>
                      <p className="text-primary">@ChadFofana1</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Share className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Bookmark className="h-4 w-4" />
                      <span>Save</span>
                    </Button>
                    <Button
                      className="bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
                      size="sm"
                    >
                      Join
                    </Button>
                  </div>
                </div>

                <p className="text-lg ">
                  Join us in the cause to solve world hunger.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 my-6">
                  <div className="">
                    <div className="p-4 text-center">
                      <div className="text-2xl font-bold">10</div>
                      <div className="text-muted-foreground">
                        Causes Supporting
                      </div>
                    </div>
                  </div>
                  <Link href="/members">
                    <div className="border-l border-r">
                      <div className="p-4 text-center">
                        <div className="text-2xl font-bold">58</div>
                        <div className="text-muted-foreground">Members</div>
                      </div>
                    </div>
                  </Link>
                  <div className="">
                    <div className="p-4 text-center">
                      <div className="text-2xl font-bold">34</div>
                      <div className="text-muted-foreground">
                        Collective Donations
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="flex justify-between  py-4 text-center  my-5">
              <div className="flex-1 border-r">
                <div className=" text-2xl font-bold">10</div>
                <div className=" text-sm text-muted-foreground">Causes Supporting</div>
              </div>
              <div className="flex-1 border-r">
                <div className=" text-2xl font-bold">58</div>
                <div className=" text-sm text-muted-foreground">Members</div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold">34</div>
                <div className=" text-sm text-muted-foreground">Collective Donations</div>
              </div>
            </div> */}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-[#F0F2FA] rounded-full px-3 py-1"
                  >
                    Animal Welfare
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F0F2FA] rounded-full px-3 py-1"
                  >
                    Environment
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F0F2FA] rounded-full px-3 py-1"
                  >
                    Food Insecurity
                  </Badge>
                </div>

                {/* Partner Logos */}
                <div className="mb-6">
                  {/* <h3 className="font-medium mb-3">Supporting Organizations</h3> */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {[
                      "adidas.jpg",
                      "benz.jpg",
                      "maz.jpg",
                      "starbucks.jpg",
                      "hy.jpg",
                      "por.jpg",
                      "tesla.jpg",
                      "astronmartin.jpg",
                      "mclaren.jpg",
                    ].map((logo, index) => (
                      <div
                        key={logo}
                        className="aspect-square rounded-lg bg-muted  flex items-center justify-center"
                      >
                        <Avatar className="h-14 w-14">
                          <AvatarImage
                            src={logo}
                            alt={`Partner ${index + 1}`}
                          />
                          <AvatarFallback>{index + 1}</AvatarFallback>
                        </Avatar>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Non-Profits */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">
                    Featuring the Non Profits:
                  </h3>
                  <p className="text-muted-foreground">
                    Grocery Spot, Food for Thought, Meals on Wheels, American
                    Red Cross, & Pizza Hut...
                    <Button variant="link" className="p-0 h-auto">
                      See More
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-xl font-medium">Updates</h2>
                <Button
                  size="icon"
                  className="rounded-xl bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </CardHeader>

              {/* Posts */}
              <Separator />
              <CardContent className="p-4">
                <PopularPosts />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Donation and Related */}
          <div className="lg:col-span-1 space-y-6">
            {/* Donation Card */}
            <Card>
              <CardContent className="">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Support this cause
                </h2>
                <p className="text-muted-foreground text-center mb-6">
                  Your donation helps provide meals to families in need
                  throughout the greater Atlanta area.
                </p>
                <Link href="/donation">
                <Button
                  className="w-full py-6 text-lg bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
                  size="lg"
                >
                  Donate
                </Button>
                </Link>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  100% of donations go directly to providing meals
                </div>
              </CardContent>
            </Card>

            {/* Related Causes */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Related Causes</h2>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors bg-card  "
                    >
                      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 mr-2">
                        <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                          <img
                            src={`/placeholder.svg?height=60&width=60`}
                            alt={`Cause ${i}`}
                            className="object-cover"
                          />
                        </Avatar>
                        <div className="min-w-0">
                          <h3 className="font-medium text-sm truncate">
                            Community Garden Project
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            42 members
                          </p>
                        </div>
                      </div>
                      <Link href="/cause">
                      <Button className="bg-primary text-white text-xs h-8 px-4 md:px-6 flex-shrink-0">
                        Visit
                      </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardContent className="">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                      />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Sarah J.</span> donated{" "}
                        <span className="font-medium">$50</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                      />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Michael T.</span> joined
                        the cause
                      </p>
                      <p className="text-xs text-muted-foreground">
                        5 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Lisa R.</span> donated{" "}
                        <span className="font-medium">$25</span>
                      </p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
