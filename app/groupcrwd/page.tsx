import React from 'react';
import GroupCrwdHeader from '../../components/groupcrwd/GroupCrwdHeader';
import GroupCrwdSuggested from '../../components/groupcrwd/GroupCrwdSuggested';
import GroupCrwdUpdates from '../../components/groupcrwd/GroupCrwdUpdates';
import GroupCrwdEvent from '../../components/groupcrwd/GroupCrwdEvent';
import GroupCrwdBottomBar from '../../components/groupcrwd/GroupCrwdBottomBar';
import ProfileNavbar from '@/components/profile/ProfileNavbar';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function page() {
  return (
    // <div>
    <>
      <ProfileNavbar title='Group Crwd' />
    
    <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">

      {/* <ProfileNavbar title='Group Crwd' /> */}
      <GroupCrwdHeader />
      <GroupCrwdSuggested />
      <GroupCrwdUpdates />
      <GroupCrwdEvent />
      <GroupCrwdBottomBar />
      </div>

      <div className="lg:col-span-1 space-y-6 px-4 pb-35">
        {/* Donation Card */}
        <Card className='hidden md:block'>
          <CardContent>
            <h2 className="text-xl font-bold mb-4 text-center">
              Support this cause
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Your donation helps provide meals to families in need
              throughout the greater Atlanta area.
            </p>
            <Link href="/donation">
              <Button
                className="w-full py-6 text-lg bg-[#4367FF] hover:bg-[#4367FF] hover:opacity-85"
                size="lg"
              >
                Join
              </Button>
            </Link>
            <div className="text-center text-sm text-muted-foreground mt-4">
              100% of donations go directly to providing meals
            </div>
          </CardContent>
        </Card>

        {/* Related Causes */}
        <Card className='hidden md:block'>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Related Causes</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors bg-card  "
                >
                  <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 mr-2">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                      <img
                        src={`/placeholder.svg?height=60&width=60`}
                        alt={`Cause ${i}`}
                        className="object-cover"
                      />
                    </Avatar>
                    <div className="min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        Community Garden Project
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        42 members
                      </p>
                    </div>
                  </div>
                  <Link href="/cause">
                    <Button className="bg-primary text-white text-xs h-8 px-4 md:px-6 flex-shrink-0 cursor-pointer">
                      Visit
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className='hidden md:block'> 
          <CardContent className="">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Sarah J.</span> donated{" "}
                    <span className="font-medium">$50</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>MT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Michael T.</span> joined
                    the cause
                  </p>
                  <p className="text-xs text-muted-foreground">
                    5 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Lisa R.</span> donated{" "}
                    <span className="font-medium">$25</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
