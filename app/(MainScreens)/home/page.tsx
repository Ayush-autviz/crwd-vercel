import React from "react";
import SearchBar from "@/components/SearchBar";
import TopicsList from "@/components/TopicsList";
import SuggestedCommunities from "@/components/SuggestedCommunities";
import Categories from "@/components/Categories";
import RecommendedOrgs from "@/components/RecommendedOrgs";
import NearbyCRWDs from "@/components/NearbyCRWDs";
import PopularPosts from "@/components/PopularPosts";
import { Bell } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Index = () => {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header - Only visible on mobile */}

      {isMobile ? (
        <>
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
        </>
      ) : (
        <>
          <header className="bg-card border-b p-[13.5px] flex items-center justify-between sticky top-0 z-10">
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
      )}

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden mx-auto px-4 py-6">
        <SearchBar />

        {/* Tablet Layout - Show a 2-column grid for medium screens */}
        <div className="hidden md:block lg:hidden mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <TopicsList />
              <Categories />
              <PopularPosts />
            </div>
            <div className="space-y-6">
              <SuggestedCommunities />
              <RecommendedOrgs />
              <NearbyCRWDs />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single column for small screens */}
        <div className="md:hidden mt-6 space-y-8">
          <TopicsList />
          <SuggestedCommunities />
          <Categories />
          <RecommendedOrgs />
          <NearbyCRWDs />
          <PopularPosts />
        </div>
      </div>

      {/* Desktop Layout - Large screens */}
      <div className="hidden lg:block mx-auto px-4 py-6 max-w-7xl">
        <SearchBar />
        <div className="mt-6 flex gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <TopicsList />
            <Categories />
            <PopularPosts />
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              <SuggestedCommunities />
              <RecommendedOrgs />
              <NearbyCRWDs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
