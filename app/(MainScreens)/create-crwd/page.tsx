"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Plus, Minus, Bell } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import Link from "next/link";

const recents = [
  { name: "St. Judes", image: "/grocery.jpg" },
  { name: "Community first", image: "/maz.jpg" },
  { name: "Make a Wish", image: "/mclaren.jpg" },
  { name: "Planned", image: "/por.jpg" },
  { name: "Made with love", image: "/tesla.jpg" },
];
const suggested = [
  { name: "Win together", image: "/adidas.jpg" },
  { name: "Hope for all", image: "/starbucks.jpg" },
];

export default function CreateCRWDPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(5);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center pb-8">
      {/* Header */}
      <ProfileNavbar title="Create a CRWD" />
      <div className="w-full mx-auto md:px-4 md:pt-6 md:grid md:grid-cols-12 md:gap-5">
        {/* Form Section */}
        <div className="md:col-span-7 bg-white/90 rounded-2xl shadow-none md:shadow-md p-4 md:p-8">
          <h1 className="text-3xl font-bold mb-2 md:hidden">Create a CRWD</h1>
          <p className="text-muted-foreground mb-8 md:hidden">
            Be the inspiration to your community. Choose a causes, invite friends, discuss and make an impact together
          </p>
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" className="rounded-xl w-16 h-16 flex flex-col items-center justify-center text-3xl text-[#a3a8c2]">
              <Plus className="w-8 h-8" />
            </Button>
            <span className="text-[#a3a8c2] text-lg">Choose a photo</span>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-[#a3a8c2]">Name your CRWD</label>
            <input
              className="bg-[#f3f5fb] w-full rounded-xl h-14 text-lg placeholder-[#a3a8c2] border-none p-4 mb-4"
              placeholder="Choose a name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label className="block mb-2 text-[#a3a8c2]">Describe your CRWD</label>
            <textarea
              className="bg-[#f3f5fb] w-full h-24 rounded-xl p-4 text-lg placeholder-[#a3a8c2] border-none mb-4"
              placeholder="What is the purpose of your CRWD"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            <label className="block mb-2 text-[#a3a8c2]">Enter Suggested Amount</label>
            <div className="bg-[#f3f5fb] rounded-xl flex items-center justify-between px-6 py-4 mb-4">
              <span className=" text-[#a3a8c2] text-lg">Input amount over $5</span>
              <div className="flex items-center gap-2 bg-[#e6eaff] rounded-xl px-4 py-2">
                <Button variant="ghost" className="text-[#7b8cff] p-0" onClick={() => setAmount(a => Math.max(5, a - 1))}><Minus /></Button>
                <span className="text-2xl text-[#7b8cff] font-bold">${amount}</span>
                <Button variant="ghost" className="text-[#7b8cff] p-0" onClick={() => setAmount(a => a + 1)}><Plus /></Button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-[#a3a8c2]">Choose causes</label>
            <Card className="bg-[#f3f5fb] border-none">
              <div className="px-4">
                <div className="font-semibold text-[#7b8cff] mb-2">Select from your Recents</div>
                {recents.map(cause => (
                  <div key={cause.name} className="flex items-center gap-3 py-2">
                    <Avatar className="h-8 w-8">
                      <img src={cause.image} alt={cause.name} className="object-cover rounded-full h-8 w-8" />
                    </Avatar>
                    <span className="flex-1 text-base">{cause.name}</span>
                    <input
                      type="radio"
                      name="cause"
                      checked={selectedCause === cause.name}
                      onChange={() => setSelectedCause(cause.name)}
                      className="accent-[#7b8cff] w-5 h-5"
                    />
                  </div>
                ))}
                <div className="font-semibold text-[#7b8cff] mt-4 mb-2">More Suggested</div>
                {suggested.map(cause => (
                  <div key={cause.name} className="flex items-center gap-3 py-2">
                    <Avatar className="h-8 w-8">
                      <img src={cause.image} alt={cause.name} className="object-cover rounded-full h-8 w-8" />
                    </Avatar>
                    <span className="flex-1 text-base">{cause.name}</span>
                    <input
                      type="radio"
                      name="cause"
                      checked={selectedCause === cause.name}
                      onChange={() => setSelectedCause(cause.name)}
                      className="accent-[#7b8cff] w-5 h-5"
                    />
                  </div>
                ))}
                <div className="flex justify-end mt-2">
                  <Button variant="link" className="text-[#7b8cff] flex items-center">
                    Discover more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <Button className="w-full h-14 text-lg bg-[#4664e4] hover:bg-[#2b7fff] rounded-xl">Create</Button>
        </div>
        {/* Right Sidebar for md+ screens */}
        <div className="hidden md:block md:col-span-5 space-y-6">


          <Card>
            <CardContent className="">
              <div className="flex flex-col items-center">
                {/* <Image src="/starbucks.jpg" width={120} height={120} alt="CRWD illustration" className="rounded-xl mb-4" /> */}
                <h2 className="text-xl font-bold mb-2">Start Something Meaningful</h2>
                <p className="text-muted-foreground text-center mb-4">
                  Your CRWD can make a real difference in your community and beyond.
                </p>
                <Link href="/search" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Causes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="">
              {/* <h2 className="text-xl font-bold mb-4">Tips for Creating a CRWD</h2> */}
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Pick a clear, inspiring name and description.</li>
                <li>Choose a cause that matters to you and your community.</li>
                <li>Set a realistic suggested amount (minimum $5).</li>
                <li>Invite friends and share your CRWD to grow support.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="h-20 md:hidden"/>
      </div>
    </div>
  );
}