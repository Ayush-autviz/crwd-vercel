import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bookmark, Search, Share } from "lucide-react"


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
    ]
  
    return (
      <main className="pb-16 md:pb-0">
        {/* Mobile Content */}
        <div className="md:hidden">
          {/* Logo and Action Buttons */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <Avatar className="h-14 w-14 mr-3">
                <AvatarImage src="/placeholder.svg?height=60&width=60" alt="CRWD Logo" />
                <AvatarFallback>FH</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Feed the hungry</h1>
                <span className="text-muted-foreground">Members</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
  
          {/* Search Bar */}
          <div className="px-4 py-2">
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
          <ScrollArea className="px-4 py-2">
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
                <Button variant="outline" size="sm" disabled={member.connected}>
                  {member.connected ? "Connected" : "Connect"}
                </Button>
              </div>
            ))}
          </ScrollArea>
        </div>
  
        {/* Desktop Content */}
        <div className="hidden md:block">
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Members Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
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
  
                  {/* Search Bar */}
                  <div className="mb-6">
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
                        <Button variant="outline" size="sm" disabled={member.connected}>
                          {member.connected ? "Connected" : "Connect"}
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
  
            {/* Right Column - Member Stats */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Member Stats</h2>
                  <div className="text-center">
                    <div className="text-2xl font-bold">59</div>
                    <div className="text-muted-foreground">Total Members</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    )
  }