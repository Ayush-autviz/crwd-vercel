import { ArrowLeft, Bell, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TopicsList from "@/components/TopicsList";
import PopularPosts from "@/components/PopularPosts";

export default function DiscoverPage() {
  // Sample data for topics
  const topics = [
    {
      name: "NIH Funding",
      posts: "4.2k Posts",
      users: [
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U1" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U2" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U3" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U4" },
      ],
    },
    {
      name: "Harvard",
      posts: "10k Posts",
      users: [
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U1" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U2" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U3" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U4" },
      ],
    },
    {
      name: "#givingthursday",
      posts: "15k Posts",
      users: [
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U1" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U2" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U3" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U4" },
      ],
    },
    {
      name: "National Parks",
      posts: "10k Posts",
      users: [
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U1" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U2" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U3" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U4" },
      ],
    },
    {
      name: "Columbia",
      posts: "10k Posts",
      users: [
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U1" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U2" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U3" },
        { avatar: "/placeholder.svg?height=30&width=30", fallback: "U4" },
      ],
    },
  ];
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
      {/* Mobile Header - Only visible on mobile */}
      <header className="flex items-center p-4 bg-card border-b sticky top-0 z-10 md:hidden">
        {/* <Button variant="ghost" size="icon" className="mr-2" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">EXPLORE</h1> */}
        <div className="size-9"></div>
        <div className="flex-grow"></div>
        <Image src="/logo3.png" width={80} height={30} alt="Logo" />
        <div className="flex-grow"></div>
        <Button variant="ghost" size="icon">
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
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Desktop Header - Only visible on desktop */}
      <header className="bg-card border-b hidden p-[13.5px] md:flex items-center justify-between sticky top-0 z-10">
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

      <div className="md:grid md:grid-cols-12 md:gap-6 md:p-6">
        {/* Main Content - Takes full width on mobile, 8 columns on desktop */}
        <div className="md:col-span-8">
          {/* Search Input */}
          <div className="p-4 md:p-0 md:mb-6">
            <Input
              type="search"
              placeholder="Search"
              className="bg-muted/50 border-none"
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
          <div className="px-4">
            <TopicsList topics={topi} />
          </div>

          {/* Suggested CRWDs Section */}
          <div className="px-4 mt-8 md:px-0 md:mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Suggested CRWD's</h2>
              <Button variant="link" className="text-[#2b7fff] p-0 h-auto">
                Create a CRWD
              </Button>
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="flex space-x-4 min-w-max">
                {suggestedCRWDs.map((crwd, index) => (
                  // <Card
                  //   key={index}
                  //   className="bg-muted/30 w-[280px] flex-shrink-0"
                  // >
                  //   <CardContent className="p-4">
                  //     <div className="flex items-center justify-between">
                  //       <div className="flex items-center">
                  //         <Avatar className="h-12 w-12 mr-3">
                  //           <AvatarImage
                  //             src={crwd.image || "/placeholder.svg"}
                  //             alt={crwd.name}
                  //           />
                  //           <AvatarFallback>
                  //             {crwd.name.charAt(0)}
                  //           </AvatarFallback>
                  //         </Avatar>
                  //         <div>
                  //           <h3 className="font-medium">{crwd.name}</h3>
                  //           <p className="text-sm text-muted-foreground">
                  //             {crwd.members}
                  //           </p>
                  //           <p className="text-sm text-muted-foreground">
                  //             {crwd.description}
                  //           </p>
                  //         </div>
                  //       </div>
                  //     </div>
                  //     <Button className="w-full mt-3 bg-primary hover:bg-primary/90">
                  //       Join
                  //     </Button>
                  //   </CardContent>
                  // </Card>

                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
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
                        <p className="text-xs text-gray-500 truncate">
                          {crwd.description}
                        </p>
                      </div>
                    </div>
                    <Button className="bg-blue-500 text-white text-xs h-8 px-4 md:px-6 flex-shrink-0">
                      Visit
                    </Button>
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
            <div className="space-y-4">
              {suggestedCauses.map((crwd, index) => (
                // <div key={index} className="flex items-center justify-between">
                //   <div className="flex items-center">
                //     <Avatar className="h-12 w-12 mr-3">
                //       <AvatarImage
                //         src={cause.image || "/placeholder.svg"}
                //         alt={cause.name}
                //       />
                //       <AvatarFallback>{cause.name.charAt(0)}</AvatarFallback>
                //     </Avatar>
                //     <div>
                //       <h3 className="font-medium">{cause.name}</h3>
                //       <p className="text-sm text-muted-foreground">
                //         {cause.description}
                //       </p>
                //     </div>
                //   </div>
                //   <Button className="bg-primary hover:bg-primary/90">
                //     Visit
                //   </Button>
                // </div>

                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
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
                      <p className="text-xs text-gray-500 truncate">
                        {crwd.description}
                      </p>
                    </div>
                  </div>
                  <Button className="bg-blue-500 text-white text-xs h-8 px-4 md:px-6 flex-shrink-0">
                    Visit
                  </Button>
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
          <div className="px-4 mt-8 pb-8 md:px-0 md:mt-10">
            <h2 className="text-lg font-semibold mb-4">
              Causes and CRWD's near you
            </h2>
            <div className="space-y-4">
              {nearbyCauses.map((crwd, index) => (
                // <div key={index} className="flex items-center justify-between">
                //   <div className="flex items-center">
                //     <Avatar className="h-12 w-12 mr-3">
                //       <AvatarImage
                //         src={cause.image || "/placeholder.svg"}
                //         alt={cause.name}
                //       />
                //       <AvatarFallback>{cause.name.charAt(0)}</AvatarFallback>
                //     </Avatar>
                //     <div>
                //       <h3 className="font-medium">{cause.name}</h3>
                //       <p className="text-sm text-muted-foreground">
                //         {cause.description}
                //       </p>
                //     </div>
                //   </div>
                //   <Button className="bg-primary hover:bg-primary/90">
                //     Visit
                //   </Button>
                // </div>

                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
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
                      <p className="text-xs text-gray-500 truncate">
                        {crwd.description}
                      </p>
                    </div>
                  </div>
                  <Button className="bg-blue-500 text-white text-xs h-8 px-4 md:px-6 flex-shrink-0">
                    Visit
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Only visible on desktop */}
        <div className="hidden md:block md:col-span-4">
          <Card>
            <CardContent className="p-6">
              {/* <h2 className="text-xl font-bold mb-4">Trending Topics</h2> */}
              {/* <div className="space-y-4">
                {topics.slice(0, 3).map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
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
              </div> */}

              <TopicsList topics={topi} />
              <Button variant="link" className="text-primary p-0 h-auto mt-2">
                See all topics
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
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
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Create Your Own</h2>
              <p className="text-muted-foreground mb-4">
                Start your own CRWD to support a cause you care about or connect
                with like-minded individuals.
              </p>
              <Button className="w-full bg-[#2b7fff] hover:bg-primary/90">
                Create a CRWD
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mr-auto max-w-[50rem] px-4">
        <PopularPosts />
      </div>
    </div>
  );
}
