"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Bell, Bookmark, Menu, Search, Share } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MembersScreen() {
  // Sample members data
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

  // Tab state
  const [activeTab, setActiveTab] = useState("Members"); // Default tab

  return (
    <main className="pb-16 md:pb-0">
      {/* Mobile Content */}
      <div className="md:hidden">
        <header className="flex items-center justify-between p-4 bg-card border-b sticky top-0 z-10">
          <div className="flex items-center">
            <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            </Link>

            <h1 className="text-xl font-bold">Feed the hungry</h1>
          </div>
          <div className="flex items-center">
          <Button variant="ghost" size="icon" className="">
          <Menu className="h-5 w-5" />
          </Button>
           
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-around border-b px-4 mt-5 ">
  <div
    onClick={() => setActiveTab("Cause")}
    className={`flex-1 py-4 text-center ${activeTab === "Cause" ? "border-b-2 border-primary" : ""}`}
  >
    Cause
  </div>
  <div
    onClick={() => setActiveTab("Members")}
    className={`flex-1 py-4 text-center ${activeTab === "Members" ? "border-b-2 border-primary" : ""}`}
  >
    Members
  </div>
  <div
    onClick={() => setActiveTab("Collective Donations")}
    className={`flex-1 py-4 text-center ${activeTab === "Collective Donations" ? "border-b-2 border-primary" : ""}`}
  >
    Donations
  </div>
</div>

        {/* Tab Content */}
        <div className="px-4 py-2 mt-2">
          {activeTab === "Cause" && (
            <div>
              <p className="text-center text-muted-foreground mt-5">Cause details go here (1 Cause)</p>
            </div>
          )}
          {activeTab === "Members" && (
            <>
              {/* Search Bar */}
              <div className="relative mb-4 mt-1">
                <input
                  type="text"
                  placeholder="Search members..."
                  className="w-full p-2 pl-8 rounded-lg bg-[#F4F4F8] text-foreground"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              {/* Members List */}
              <ScrollArea className="h-[70vh] no-scrollbar"
              style={{
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* IE and Edge */,
              }}
              
              >
                {members.map((member, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={member.name} />
                        <AvatarFallback>{member.name.split(" ")[0][0] + (member.name.split(" ")[1] || "")[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">@{member.username}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className={`border-0 text-sm mr-2 ${
                        member.connected ? "bg-[#4367FF] text-white" : "bg-[#F0F2FB] text-[#4367FF]"
                      }`}
                      size="sm"
                    >
                      {member.connected ? "Connected" : "Connect"}
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </>
          )}
          {activeTab === "Collective Donations" && (
            <div>
              <p className="text-center text-muted-foreground mt-5">Collective Donations details go here (43 Donations)</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block">
      <header className="bg-card border-b p-[13.5px] flex items-center justify-between sticky top-0 z-10">
      <Link className="flex items-center" href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Feed the hungry</h1>
            </Link>
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
          </header>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Members Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Logo" />
                      <AvatarFallback>FH</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Feed the hungry</p>
                      <p className="text-primary">Members</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Bookmark className="h-4 w-4" />
                      <span>Save</span>
                    </Button>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-around border-b  mt-5 ">
  <div
    onClick={() => setActiveTab("Cause")}
    className={`flex-1 py-4 text-center ${activeTab === "Cause" ? "border-b-2 border-primary" : ""}`}
  >
    Cause
  </div>
  <div
    onClick={() => setActiveTab("Members")}
    className={`flex-1 py-4 text-center ${activeTab === "Members" ? "border-b-2 border-primary" : ""}`}
  >
    Members
  </div>
  <div
    onClick={() => setActiveTab("Collective Donations")}
    className={`flex-1 py-4 text-center ${activeTab === "Collective Donations" ? "border-b-2 border-primary" : ""}`}
  >
    Donations
  </div>
</div>

                {/* Tab Content */}
                {activeTab === "Cause" && (
                  <div>
                    <p className="text-center text-muted-foreground mt-10">Cause details go here (1 Cause)</p>
                  </div>
                )}
                {activeTab === "Members" && (
                  <>
                    {/* Search Bar */}
                    <div className="mb-6 mt-6">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search members..."
                          className="w-full p-2 pl-8 rounded-lg bg-muted text-foreground"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Members List */}
                    <ScrollArea className="h-[60vh]">
                      {members.map((member, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={member.name} />
                              <AvatarFallback>{member.name.split(" ")[0][0] + (member.name.split(" ")[1] || "")[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">@{member.username}</p>
                            </div>
                          </div>
                          <Button
                      variant="outline"
                      className={`border-0 text-sm mr-2 ${
                        member.connected ? "bg-[#4367FF] text-white" : "bg-[#F0F2FB] text-[#4367FF]"
                      }`}
                      size="sm"
                    >
                      {member.connected ? "Connected" : "Connect"}
                    </Button>
                        </div>
                      ))}
                    </ScrollArea>
                  </>
                )}
                {activeTab === "Collective Donations" && (
                  <div>
                    <p className="text-center text-muted-foreground mt-10">Collective Donations details go here (43 Donations)</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Member Stats */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-4">
              <CardContent className="p-0 ">
                {/* <h2 className="text-xl font-bold mb-4">Member Stats</h2> */}
                <div className="text-center">
                  <div className="text-2xl font-bold">59</div>
                  <div className="text-muted-foreground">Total {activeTab}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}