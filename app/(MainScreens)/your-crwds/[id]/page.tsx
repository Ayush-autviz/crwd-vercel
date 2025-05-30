"use client";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Check, X, Camera, Trash2 } from 'lucide-react';
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { toast } from 'sonner';
import Link from "next/link";


const mockCrwd = {
  name: "Feed The Hungry",
  username: "Feedthehungry",
  location: "Las Cruces, NM",
  bio: "This is a bio about feed the hungry. they are foodies on a mission to solve world hunger, one meal at a time.",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg"
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
  const [editingField, setEditingField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: mockCrwd.name,
    username: mockCrwd.username,
    location: mockCrwd.location,
    bio: mockCrwd.bio,
    avatarUrl: mockCrwd.avatar
  });
  const [tempData, setTempData] = useState({
    name: mockCrwd.name,
    username: mockCrwd.username,
    location: mockCrwd.location,
    bio: mockCrwd.bio
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (field: string) => {
    setEditingField(field);
    setTempData(prev => ({ ...prev, [field]: formData[field as keyof typeof formData] }));
  };

  const handleSave = (field: string) => {
    const value = tempData[field as keyof typeof tempData];

    // Basic validation
    if (field === 'name' && !value.trim()) {
      return; // Don't save empty names
    }

    if (field === 'username' && value.trim() && !value.trim().match(/^[a-zA-Z0-9_]+$/)) {
      return; // Username should only contain letters, numbers, and underscores
    }

    setFormData(prev => ({ ...prev, [field]: value }));
    setEditingField(null);

    // Show success message
    toast.success('CRWD updated successfully!');
    console.log('Saving CRWD data:', { ...formData, [field]: value });
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempData({
      name: formData.name,
      username: formData.username,
      location: formData.location,
      bio: formData.bio
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatarUrl = e.target?.result as string;
        setFormData(prev => ({ ...prev, avatarUrl: newAvatarUrl }));
        toast.success('CRWD picture updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  const renderField = (field: string, label: string, value: string, isTextarea = false) => {
    const isCurrentlyEditing = editingField === field;

    return (
      <div className={`flex ${isTextarea ? 'items-start' : 'items-center'} px-4 py-4`}>
        <div className="w-1/3 text-gray-700 font-medium">{label}</div>
        <div className="w-2/3 flex items-center gap-2 min-w-0">
          {isCurrentlyEditing ? (
            <div className="flex-1 flex items-center gap-2 min-w-0">
              {isTextarea ? (
                <Textarea
                  value={tempData[field as keyof typeof tempData]}
                  onChange={(e) => setTempData(prev => ({ ...prev, [field]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.ctrlKey) {
                      handleSave(field);
                    } else if (e.key === 'Escape') {
                      handleCancel();
                    }
                  }}
                  className="flex-1 min-h-[80px] max-h-[200px] resize-none w-full overflow-y-auto break-words"
                  placeholder={`Enter ${label.toLowerCase()}...`}
                  autoFocus
                />
              ) : (
                <Input
                  value={tempData[field as keyof typeof tempData]}
                  onChange={(e) => setTempData(prev => ({ ...prev, [field]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSave(field);
                    } else if (e.key === 'Escape') {
                      handleCancel();
                    }
                  }}
                  className="flex-1 w-full min-w-0"
                  placeholder={`Enter ${label.toLowerCase()}...`}
                  autoFocus
                />
              )}
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleSave(field)}
                  className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                >
                  <Check size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCancel}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-between min-w-0">
              <div className={`text-gray-900 font-normal flex-1 min-w-0 ${
                isTextarea
                  ? 'whitespace-pre-line break-words'
                  : 'truncate'
              }`}>
                {value || `No ${label.toLowerCase()} set`}
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleEdit(field)}
                className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              >
                <Edit2 size={14} />
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-start space-y-6 min-h-screen">
      <ProfileNavbar title="Edit CRWD" titleClassName="text-2xl" />
      <div className="w-full">
        <div className="w-full max-w-full mx-auto bg-white overflow-hidden">
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6 px-4">
            <div className="relative">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage src={formData.avatarUrl} alt={formData.name} />
              </Avatar>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Camera size={12} />
              </button>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-sm font-semibold text-gray-800 hover:underline"
            >
              Edit picture
            </button>
          </div>

          {/* Editable Fields */}
          <div className="divide-y divide-gray-300 border-b border-t overflow-hidden">
            {renderField('name', 'Name', formData.name)}
            {renderField('username', 'Username', formData.username)}
            {renderField('location', 'Location', formData.location)}
            {renderField('bio', 'Bio', formData.bio, true)}
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
              <Link href="/search" className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline">
                Discover more <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          <div className="rounded-xl p-4 max-w-md mx-auto mb-20  md:hidden ">
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
              <Link href="/search" className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline">
                Discover more <span className="ml-1">→</span>
              </Link>
            </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
} 