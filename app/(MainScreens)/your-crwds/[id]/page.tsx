"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileNavbar from "@/components/profile/ProfileNavbar";

const mockCrwd = {
  name: "Feed The Hungry",
  username: "Feedthehungry",
  location: "Las Cruces, NM",
  bio: "This is a bio about feed the hungry. they are foodies on a mission to solve world hunger, one meal at a time.",
  avatar: "F"
};

const currentlySupporting = [
  { name: "Red Cross", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "St. Judes", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Community First", avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Make a Wish", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Planned", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Made with Love", avatar: "https://randomuser.me/api/portraits/women/22.jpg" }
];
const previouslySupported = [
  { name: "W.H. Initiative", avatar: "https://randomuser.me/api/portraits/men/23.jpg" },
  { name: "Global Relief", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
  { name: "Food for All", avatar: "https://randomuser.me/api/portraits/men/25.jpg" },
  { name: "Hope Foundation", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
  { name: "Shelter Now", avatar: "https://randomuser.me/api/portraits/men/27.jpg" },
  { name: "Clean Water Project", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
];

export default function EditCrwdPage() {
  const router = useRouter();
  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Top Bar */}
      {/* <div className="flex items-center h-12 px-4 border-b bg-[#F6F7FB]">
        <button onClick={() => router.back()} className="mr-2">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-medium text-sm">EDIT CRWD</span>
      </div> */}
      <ProfileNavbar  title="Edit Crwd"/>
      <div className="flex-1 overflow-y-auto  pt-4">
        {/* Avatar and Edit */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-2xl mb-2">
            {mockCrwd.avatar}
          </div>
          <button className="text-xs font-medium hover:underline mb-4">Edit picture</button>
        </div>
        {/* Info Table */}
        <div className="bg-white rounded-xl   w-full mb-6">
          <div className="flex px-8 py-4 border-b">
            <div className="w-32 text-xs md:text-sm md:font-medium text-gray-500">Name</div>
            <div className="flex-1 text-sm">{mockCrwd.name}</div>
          </div>
            <div className="flex px-8 py-4 border-b">
            <div className="w-32 text-xs md:text-sm md:font-medium text-gray-500">Username</div>
            <div className="flex-1 text-sm">{mockCrwd.username}</div>
          </div>
          <div className="flex px-8 py-4 border-b">
            <div className="w-32 text-xs md:text-sm md:font-medium text-gray-500">Location</div>
            <div className="flex-1 text-sm">{mockCrwd.location}</div>
          </div>
          <div className="flex px-8 py-4 border-b">
            <div className="w-32 text-xs md:text-sm md:font-medium text-gray-500">Bio</div>
            <div className="flex-1 text-sm">{mockCrwd.bio}</div>
          </div>
        </div>
        {/* Modify Causes */}
        {/* Mobile: stacked, Desktop: row */}
        <div className=" w-full hidden md:block px-8 py-4">
          <div className="text-sm font-medium mb-4 text-gray-400">Modify Causes</div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Currently Supporting */}
            <div className="bg-blue-50 rounded-lg p-4 flex-1 mb-2 md:mb-0">
              <div className="text-[16px] md:text-[18px] text-blue-900 mb-3 pl-3 font-[500] opacity-80">Currently Supporting</div>
              <div className="h-[300px] overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-2 pr-1">
                  {currentlySupporting.map((cause, i) => (
                    <div key={cause.name + i} className="grid grid-cols-12 gap-2 px-3 py-2">
                      <div className="col-span-7 flex items-center gap-2">
                        <img src={cause.avatar} alt={cause.name} className="w-6 h-6 rounded-full mr-2" />
                        <span className="flex-1 text-sm text-gray-500 font-[500]">{cause.name}</span>
                      </div>
                      <div className="col-span-1 flex items-center justify-center">
                        <input type="radio" name="cause" className="accent-blue-600 mr-2 w-4 h-4 " />
                      </div>
                      <button className="text-sm text-gray-400 col-span-4 flex items-center gap-2 ml-auto">Remove <Trash2 className="w-3.5 h-3.5 text-black/50 "/></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Previously Supported */}
            <div className="bg-blue-50 rounded-lg p-4 flex-1">
              <div className="text-[16px] md:text-[18px] text-blue-900 mb-3 pl-3 font-[500] opacity-80">Previously Supported</div>
              <div className="h-[300px] overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-2 pr-1">
                  {previouslySupported.map((cause, i) => (
                    <div key={cause.name + i} className="grid grid-cols-12 gap-2 px-3 py-2">
                      <div className="col-span-7 flex items-center gap-2">
                        <img src={cause.avatar} alt={cause.name} className="w-6 h-6 rounded-full mr-2" />
                        <span className="flex-1 text-sm text-gray-500 font-[500]">{cause.name}</span>
                      </div>
                      <div className="col-span-1 flex items-center justify-center">
                        <input type="radio" name="prev-cause" className="accent-blue-600 mr-2 w-4 h-4 cursor-pointer " />
                      </div>
                      <button className="text-sm text-gray-400 col-span-4 flex items-center gap-2 ml-auto">Remove <Trash2 className="w-3.5 h-3.5 text-black/50 cursor-pointer "/></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline">
              Discover more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
        <div className="rounded-xl p-4 max-w-md mx-auto  md:hidden ">
          <div className="text-sm font-medium mb-4 text-gray-400">Modify Causes</div>
          <div className="mb-2 bg-blue-50 rounded-lg p-4">
          <div className="text-[16px] md:text-[18px] text-blue-900 mb-3 pl-3 font-[500] opacity-80">Currently Supporting</div>
<div className="h-[300px] overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-2  pr-1">
              {currentlySupporting.map((cause, i) => (
                <div key={cause.name} className="grid grid-cols-12 gap-2 px-3 py-2">
                  <div className="col-span-7 flex items-center gap-2">
                    <img src={cause.avatar} alt={cause.name} className="w-6 h-6 rounded-full mr-2" />
                    <span className="flex-1 text-sm text-gray-500 font-[500]">{cause.name}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <input type="radio" name="cause" className="accent-blue-600 mr-2 w-4 h-4 cursor-pointer " />
                  </div>
                  <button className="text-sm text-gray-400 col-span-4 flex items-center gap-2 ml-auto">Remove <Trash2 className="w-3.5 h-3.5 text-black/50 cursor-pointer "/></button>
                </div>
              ))}
            </div>
          {/* </div>
          <div className=" p-4"> */}
            <div className="text-[16px] md:text-[18px] text-blue-900 mb-3 pl-3 font-[500] opacity-80">Previously Supported</div>
            <div className="flex flex-col gap-2  pr-1">
              {previouslySupported.map((cause, i) => (
                <div key={cause.name} className="grid grid-cols-12 gap-2 px-3 py-2">
                  <div className="col-span-7 flex items-center gap-2">
                    <img src={cause.avatar} alt={cause.name} className="w-6 h-6 rounded-full mr-2" />
                    <span className="flex-1 text-sm text-gray-500 font-[500]">{cause.name}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <input type="radio" name="prev-cause" className="accent-blue-600 mr-2 w-4 h-4 cursor-pointer " />
                  </div>
                  <button className="text-sm text-gray-400 col-span-4 flex items-center gap-2 ml-auto">Remove <Trash2 className="w-3.5 h-3.5 text-black/50 cursor-pointer "/></button>
                </div>
              ))}
            </div>
            </div>
            <div className="flex justify-end mt-4">
            <a href="#" className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline">
              Discover more <span className="ml-1">→</span>
            </a>
          </div>
          </div>
       
        </div>
        <Button variant="outline" className="flex justify-end mt-10 mb-32 mx-auto shadow-none border-none text-blue-500 text-base">Save Changes </Button>
      </div>
      
    </div>
  );
} 