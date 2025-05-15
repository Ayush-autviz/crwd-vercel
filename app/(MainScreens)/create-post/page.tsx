"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Archive,
  Bell,
  Calendar,
  ChevronLeft,
  ImageIcon,
  Link,
  StepBack,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { CrwdDropdown } from "@/components/post/CrwdDropdown";
import { Select, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";

const CRWDS = [
  { name: "The Red Cross", status: "Joined", image: "/adidas.jpg" },
  { name: "St. Judes", status: "Saved", image: "/benz.jpg" },
  {
    name: "Women's Healthcare of At…",
    status: "Recently visited",
    image: "/maz.jpg",
  },
  {
    name: "Children's Healthcare",
    status: "Recently visited",
    image: "/hy.jpg",
  },
  { name: "Make a Wish", status: "Recently visited", image: "/starbucks.jpg" },
];

type CRWD = {
  name: string;
  status: string;
  image: string;
};

export default function CreatePostFlow() {
  const [step, setStep] = useState(1);
  const [selectedCRWD, setSelectedCRWD] = useState<CRWD | null>(null);
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    day: "",
    time: "",
    place: "",
    caption: "",
  });

  // Track which post type is selected
  const [postType, setPostType] = useState<'link' | 'image' | 'event'>('event');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Step 2: Post to (CRWD selection)
  if (step === 2) {
    return (
      <div className="min-h-screen flex flex-col bg-background pb-16">
        <ProfileNavbar title="Add a post" />
        <div className="flex items-center p-4 ">
          <button onClick={() => setStep(1)} className="mr-2 flex  text-base">
            <X />
          </button>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for a CRWD"
              className="bg-muted/50 rounded-lg px-3 py-2 w-full text-sm border-none focus-visible:ring-1 focus-visible:ring-primary/50"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CRWDS.map((crwd) => (
            <div
              key={crwd.name}
              className="flex items-center gap-4 px-4 py-3 hover:bg-muted/50 cursor-pointer border-b transition-colors"
              onClick={() => {
                setSelectedCRWD(crwd);
                setStep(1); // Return to step 1 after selecting a CRWD
              }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={crwd.image}
                  alt={crwd.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-base">{crwd.name}</div>
                <div className="text-muted-foreground text-sm">
                  {crwd.status}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-4">
          <Button variant="outline" className="w-40">
            See More
          </Button>
        </div>
        {/* Confirmation after selecting a CRWD */}
        {selectedCRWD && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 max-w-sm mx-4">
              <div className="text-3xl">🎉</div>
              <div className="text-xl font-semibold text-center">
                Your post has been created for{" "}
                <span className="text-primary font-bold">
                  {selectedCRWD.name}
                </span>
                !
              </div>
              <Button className="w-full mt-2" onClick={() => router.push("/")}>
                Go to Home
              </Button>
            </div>
          </div>
        )}
        <div className="h-20 md:hidden" />
      </div>
    );
  }

  // Step 1: Create post form
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/40 pb-16">
      {/* Top Bar */}

      <ProfileNavbar title="Add a post" />

      {/* <div className="flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-10">
        <button onClick={() => router.back()} className="text-2xl hover:text-primary transition-colors">×</button>
        <h2 className="text-2xl font-normal">Create a post</h2>

      </div> */}
      {/* Event Details Section */}
      <div className="flex-1 flex flex-col  px-2">
        <div className="flex flex-col p-4">
          <div className="flex  justify-between items-center">
            {/* <div className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted">
          <Image src={"/mclaren.jpg"} className="w-full h-full object-cover" alt="CRWD logo" width={48} height={48} />
        </div>
        <div className="text-muted-foreground text-sm">Posting to Feed the Hungry</div>
        </div> */}

            <div className="w-full">

              {selectedCRWD ? (
                <div
                  className="flex items-center gap-3 w-1/2 rounded-lg  py-2  cursor-pointer"
                  onClick={() => setStep(2)}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={selectedCRWD.image}
                      alt={selectedCRWD.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium italic text-gray-500">Posting to {selectedCRWD.name}</span>
                </div>
              ) : (
                <>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a CRWD to post to
              </label>
                <Select>
                  <SelectTrigger className="w-1/2 rounded-lg border px-4 py-2 text-left shadow-none border-none bg-gray-100" onClick={() => setStep(2)}>
                    <SelectValue placeholder="Choose a CRWD" />
                  </SelectTrigger>
                </Select>
                </>
              )}
            </div>

            <Button
              variant="outline"
              className="rounded-lg px-6 py-2 text-sm font-medium"
              onClick={() => setStep(2)}
              disabled={!selectedCRWD}
            >
              Post
            </Button>
          </div>
          <div className="flex-1">
            {selectedCRWD ? (
              <>
                <div className="text-gray-500 my-4">Provide your event details</div>
                <div className="space-y-4">
                  <div>
                    <Input
                      name="title"
                      value={form.title}
                      onChange={handleInputChange}
                      placeholder="Event Name"
                      className="border-0 border-b border-border rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>

                  <div>
                    <Input
                      name="day"
                      value={form.day}
                      onChange={handleInputChange}
                      placeholder="Day"
                      className="border-0 border-b border-border rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>

                  <div>
                    <Input
                      name="time"
                      value={form.time}
                      onChange={handleInputChange}
                      placeholder="Time"
                      className="border-0 border-b border-border rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>

                  <div>
                    <Input
                      name="place"
                      value={form.place}
                      onChange={handleInputChange}
                      placeholder="Place"
                      className="border-0 border-b border-border rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>

                  <div>
                    <Input
                      name="caption"
                      value={form.caption}
                      onChange={handleInputChange}
                      placeholder="Caption"
                      className="border-0 border-b border-border rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-start justify-start h-64 mt-10 px-1">
                <div className="text-xl text-gray-400 font-light mb-3">Start Typing</div>
                <div className="text-gray-400 italic text-sm">
                  You can share an announcement, picture, event, link, etc.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t px-6 py-4 flex flex-col gap-2 bg-background/80 backdrop-blur-md">
        <div className="flex gap-8 mb-1">
          <button
            onClick={() => setPostType('link')}
            className="focus:outline-none"
          >
            <Link className={`h-6 w-6 ${postType === 'link' ? 'text-primary' : 'text-gray-500'} transition-colors`} />
          </button>
          <button
            onClick={() => setPostType('image')}
            className="focus:outline-none"
          >
            <ImageIcon className={`h-6 w-6 ${postType === 'image' ? 'text-primary' : 'text-gray-500'} transition-colors`} />
          </button>
          <button
            onClick={() => setPostType('event')}
            className="focus:outline-none"
          >
            <Calendar className={`h-6 w-6 ${postType === 'event' ? 'text-primary' : 'text-gray-500'} transition-colors`} />
          </button>
        </div>
        <div className="text-muted-foreground text-sm italic">
          Create a {postType === 'link' ? 'link' : postType === 'image' ? 'photo' : 'event'} post
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
