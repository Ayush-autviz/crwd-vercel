"use client";
import React, { useState } from "react";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import MembersList from "@/components/members/MembersList";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const causes = [
  { name: "Red Cross", avatar: "https://randomuser.me/api/portraits/men/32.jpg", impact: "Donated $500" },
  { name: "Food for All", avatar: "https://randomuser.me/api/portraits/women/44.jpg", impact: "Volunteered 20h" },
  { name: "Hope Foundation", avatar: "https://randomuser.me/api/portraits/men/65.jpg", impact: "Shared 10 posts" },
];
const following = [
  { name: "Jane Doe", username: "janedoe", connected: true },
  { name: "John Smith", username: "johnsmith", connected: false },
  { name: "Alice Blue", username: "aliceblue", connected: false },
];
const followers = [
  { name: "Chris Red", username: "chrisred", connected: false },
  { name: "Mia Green", username: "miagreen", connected: false },
  { name: "Sam Yellow", username: "samyellow", connected: false },
];
const crwds = [
  { name: "Feed the Hungry", avatar: "https://randomuser.me/api/portraits/men/32.jpg", role: "Admin" },
  { name: "Clean Water Project", avatar: "https://randomuser.me/api/portraits/women/28.jpg", role: "Member" },
];

const tabs = [
  { label: "Causes", value: "causes" },
  { label: "Following", value: "following" },
  { label: "Followers", value: "followers" },
  { label: "CRWDs", value: "crwds" },
];

export default function StatisticsPage() {
  const [activeTab, setActiveTab] = useState("causes");

  return (
    <main className="pb-16 md:pb-0">
      <ProfileNavbar title="Statistics" />
      <div className=" mx-auto py-3 md:py-6 px-2  md:px-6">
        {/* Tab Nav */}
        <div className="flex justify-around border-b   mb-6 items-center">
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              variant="ghost"
              className={`flex-1 py-4 px-1 text-center rounded-none border-b py-6 cursor-pointer hover:text-blue-500 hover:bg-blue-50 ${activeTab === tab.value ? 'border-primary text-primary' : 'border-transparent text-muted-foreground '}`}
              onClick={() => setActiveTab(tab.value)}
            >
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>
        {/* Tab Content */}
        {activeTab === "causes" && (
          <div className="space-y-4 px-4">
            {causes.map((cause, i) => (
              <div key={cause.name} className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow px-3 py-3 gap-4">
                <Avatar className="w-12 h-12 ml-2">
                  <AvatarImage src={cause.avatar} />
                  <AvatarFallback>{cause.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 pr-2">
                  <div className="font-semibold text-lg text-blue-900 mb-1">{cause.name}</div>
                  <div className="text-xs text-gray-600 mb-2">{cause.impact}</div>
                  <div className="w-full bg-blue-200 rounded-full h-2 mr-10">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${60 + i * 10}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "following" && (
          <MembersList members={following} />
        )}
        {activeTab === "followers" && (
          <MembersList members={followers} />
        )}
        {activeTab === "crwds" && (
          <div className="space-y-4 px-4">
            {crwds.map((crwd) => (
              <div key={crwd.name} className="flex items-center bg-white border border-blue-200 rounded-lg shadow-sm p-4">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={crwd.avatar} />
                  <AvatarFallback>{crwd.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-base text-blue-900">{crwd.name}</div>
                  <div className="text-xs text-blue-600 font-medium">{crwd.role}</div>
                </div>
                <button className="ml-4 px-4 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition">View</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 