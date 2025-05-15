import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TopicsList from "@/components/TopicsList";
import PopularPosts from "@/components/PopularPosts";
import ProfileNavbar from "@/components/profile/ProfileNavbar";

export default function HomePage() {
  const topi: any = [
    {
      id: "1",
      name: "NFT Funding",
      posts: 34,
      avatars: ["1", "2", "3"],
    },
    {
      id: "2",
      name: "Harvard",
      posts: 126,
      avatars: ["4", "5", "6", "7"],
    },
    {
      id: "3",
      name: "#givingtuesday",
      posts: 156,
      avatars: ["8", "9", "10", "11"],
    },
    {
      id: "4",
      name: "National Parks",
      posts: 176,
      avatars: ["12", "13", "14"],
    },
    {
      id: "5",
      name: "Columbia",
      posts: 76,
      avatars: ["15", "16", "17", "18"],
    },
  ];
  // Sample data for suggested CRWDs
  const suggestedCRWDs = [
    {
      name: "Grocery Spot",
      members: "303 Members",
      description: "Community lunches every Saturday",
      image: "/grocery.jpg",
    },
    {
      name: "Food for Thought",
      members: "78 Members",
      description: "Solving world hunger. One meal at a time.",
      image: "/grocery.jpg",
    },
    {
      name: "Food for Thought",
      members: "78 Members",
      description: "Solving world hunger. One meal at a time.",
      image: "/grocery.jpg",
    },
  ];

  // Sample data for categories
  const categories = [
    "Animal Welfare",
    "Environment",
    "Food Insecurity",
    "Food Insecurity",
    "Environment",
    "Education",
    "Healthcare",
    "Social Justice",
    "Homelessness",
  ];

  // Sample data for suggested causes
  const suggestedCauses = [
    {
      name: "The Red Cross",
      description: "An health organization that...",
      image: "/redcross.png",
    },
    {
      name: "St. Judes",
      description: "The leading children's hea...",
      image: "/grocery.jpg",
    },
    {
      name: "Women's Healthcare of At...",
      description: "We are Atlanta's #1 healthca...",
      image: "/redcross.png",
    },
  ];

  // Sample data for nearby causes
  const nearbyCauses = [
    {
      name: "The Red Cross",
      description: "An health organization that...",
      image: "/redcross.png",
    },
    {
      name: "St. Judes",
      description: "The leading children's hea...",
      image: "/grocery.jpg",
    },
    {
      name: "Women's Healthcare of At...",
      description: "We are Atlanta's #1 healthca...",
      image: "/redcross.png",
    },
  ];

  return (
    <div className="pb-16 md:pb-0">
      <ProfileNavbar title="Home" showMobileMenu={true} showDesktopMenu={true} />
      <div className="md:grid md:grid-cols-12 md:gap-6 md:p-6">
        {/* Main Content - Takes full width on mobile, 8 columns on desktop */}
        <div className="md:col-span-8">
          {/* Search Input */}
          <div className="p-4 md:p-0 md:mb-6">
            <Input
              type="search"
              placeholder="Search"
              className="bg-muted/50 border-none"
              //@ts-ignore
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              }
            />
          </div>

          {/* Topics Section */}
          {/* <div className="px-4 md:px-0">
            <h2 className="text-lg font-semibold mb-2">Topics</h2>
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{topic.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex -space-x-2 mr-2">
                        {topic.users.map((user, userIndex) => (
                          <Avatar
                            key={userIndex}
                            className="h-6 w-6 border-2 border-background"
                          >
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                              alt={`User ${userIndex + 1}`}
                            />
                            <AvatarFallback>{user.fallback}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {topic.posts}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="p-4 md:p-0">
            <TopicsList topics={topi} />
          </div>

          {/* Suggested CRWDs Section */}
          <div className="px-4 mt-8 md:px-0 md:mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Suggested CRWD's</h2>
              <Link href="/create-crwd">
                <Button variant="link" className="text-primary p-0 h-auto">
                  Create a CRWD
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="flex space-x-4 min-w-max">
                {suggestedCRWDs.map((crwd, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors bg-card  w-[340px] flex-shrink-0"
                  >
                    <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 mr-2">
                      <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                        {crwd.image && (
                          <img
                            src={crwd.image}
                            alt={crwd.name}
                            className="object-cover"
                          />
                        )}
                      </Avatar>
                      <div className="min-w-0">
                        <h3 className="font-medium text-sm truncate">
                          {crwd.name}
                        </h3>
                        <p className="text-xs text-muted-foreground truncate">
                          {crwd.members}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {crwd.description}
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
            </div>
          </div>

          {/* Categories Section */}
          <div className="px-4 mt-8 md:px-0 md:mt-10">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-muted/50 hover:bg-muted text-foreground rounded-md px-4 py-2 whitespace-nowrap"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Suggested Causes Section */}
          <div className="px-4 mt-8 md:px-0 md:mt-10">
            <h2 className="text-lg font-semibold mb-4">Suggested causes</h2>
            <div className="space-y-3">
              {suggestedCauses.map((cause, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors bg-card "
                >
                  <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 mr-2">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                      {cause.image && (
                        <img
                          src={cause.image}
                          alt={cause.name}
                          className="object-cover"
                        />
                      )}
                    </Avatar>
                    <div className="min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        {cause.name}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {cause.description}
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
            <div className="flex justify-end mt-4">
              <Button variant="link" className="text-primary flex items-center">
                Discover More <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Causes and CRWDs near you Section */}
          <div className="px-4 mt-8 pb-8 md:px-0 md:mt-4">
            <h2 className="text-lg font-semibold mb-4">
              Causes and CRWD's near you
            </h2>
            <div className="space-y-3">
              {nearbyCauses.map((cause, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors bg-card "
                >
                  <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 mr-2">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                      {cause.image && (
                        <img
                          src={cause.image}
                          alt={cause.name}
                          className="object-cover"
                        />
                      )}
                    </Avatar>
                    <div className="min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        {cause.name}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {cause.description}
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
          </div>
          <div className="mr-auto  ">
        <PopularPosts />
      </div>
        </div>

        {/* Sidebar - Only visible on desktop */}
        <div className="hidden md:block md:col-span-4">
          <Card>
            <CardContent className="">
              <h2 className="text-xl font-bold mb-4">Trending Topics</h2>
              <TopicsList topics={topi} />
              <Button variant="link" className="text-primary p-0 h-auto mt-2">
                See all topics
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="">
              <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
              <div className="overflow-x-auto pb-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    ...categories,
                    "Education",
                    "Healthcare",
                    "Homelessness",
                  ].map((category, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-muted text-foreground rounded-md px-4 py-2 whitespace-nowrap"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="">
              <h2 className="text-xl font-bold mb-4">Create Your Own</h2>
              <p className="text-muted-foreground mb-4">
                Start your own CRWD to support a cause you care about or connect
                with like-minded individuals.
              </p>
              <Button className="w-full">
                Create a CRWD
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
