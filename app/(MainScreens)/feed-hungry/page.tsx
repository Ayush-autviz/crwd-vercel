// app/page.js (Home Screen)
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
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
        <header className="flex items-center justify-between p-4 bg-card border-b sticky top-0 z-10">
          <div className="flex h-5 w-5 items-center"></div>
          <Image
            src="/logo3.png"
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
        </header>

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
              <Button
                size="icon"
                className="rounded-xl bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="border-t border-b p-0 rounded-none">
            <CardHeader className="p-4 pb-0">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Chad"
                    />
                    <AvatarFallback>CF</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-medium">@Chad</span>
                    <span className="text-muted-foreground ml-2">· 17h</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 py-0">
              <p className="text-muted-foreground mb-3">
                Thick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
              </p>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/post.jpg"
                  alt="Food donation"
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center w-full">
                <Button variant="ghost" size="sm" className="mr-2">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>2</span>
                </Button>
                <Button variant="ghost" size="sm" className="mr-2">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>0</span>
                </Button>
                <div className="flex-grow"></div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>3</span>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-t border-b p-0 rounded-none">
            <CardHeader className="p-4 pb-0">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Chad"
                    />
                    <AvatarFallback>CF</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-medium">@Chad</span>
                    <span className="text-muted-foreground ml-2">· 17h</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 py-0">
              <p className="text-muted-foreground mb-3">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk
              </p>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/post2.jpg"
                  alt="Food donation"
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-2">
              <div className="flex items-center w-full">
                <Button variant="ghost" size="sm" className="mr-2">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>Like</span>
                </Button>
                <Button variant="ghost" size="sm" className="mr-2">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>Comment</span>
                </Button>
                <div className="flex-grow"></div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>Share</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block">
        {/* Desktop Header */}
        <header className="bg-card border-b p-[13.5px] flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold">Feed the hungry</h1>
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
              <CardContent className="p-0 mt-[-25px]">
                <div className="divide-y">
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage
                            src="/placeholder.svg?height=48&width=48"
                            alt="Chad"
                          />
                          <AvatarFallback>CF</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">@Chad</div>
                          <div className="text-muted-foreground text-sm">
                            17 hours ago
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="mb-3">
                      <p className="text-muted-foreground">
                        Thick quartz, vex nymphs. Waltz, bad nymph, for quick
                        jigs vex!
                      </p>
                    </div>

                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/post.jpg"
                        alt="Food donation"
                        width={800}
                        height={400}
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      <Button variant="ghost" size="sm" className="mr-6">
                        <Heart className="h-4 w-4 mr-2" />
                        <span>2 likes</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="mr-6">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span>0 comments</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>3 shares</span>
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage
                            src="/placeholder.svg?height=48&width=48"
                            alt="Chad"
                          />
                          <AvatarFallback>CF</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">@Chad</div>
                          <div className="text-muted-foreground text-sm">
                            17 hours ago
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="mb-4">
                      <p className="text-muted-foreground mb-4">
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk
                      </p>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/post2.jpg"
                          alt="Food donation"
                          width={800}
                          height={400}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="mr-6">
                        <Heart className="h-4 w-4 mr-2" />
                        <span>Like</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="mr-6">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span>Comment</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
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
                <Button
                  className="w-full py-6 text-lg bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
                  size="lg"
                >
                  Donate
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  100% of donations go directly to providing meals
                </div>
              </CardContent>
            </Card>

            {/* Related Causes */}
            <Card>
              <CardContent className="">
                <h2 className="text-xl font-bold mb-4">Related Causes</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/placeholder.svg?height=60&width=60`}
                          alt={`Cause ${i}`}
                        />
                        <AvatarFallback>C{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">
                          Community Garden Project
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          42 members
                        </p>
                      </div>
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
