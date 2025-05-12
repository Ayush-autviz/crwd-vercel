import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { EllipsisIcon, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface Update {
  avatarUrl: string;
  username: string;
  time: string;
  org: string;
  orgUrl: string;
  text: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
}

interface ProfileActivityProps {
  updates: Update[];
}

const ProfileActivity: React.FC<ProfileActivityProps> = ({ updates }) => (
  <div className="w-full">
    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
    <div className="space-y-4">
      {updates.length > 0 && updates.map((update, idx) => (
        <Card key={idx} className="overflow-hidden border-0 shadow-sm">
          <CardContent className="">
            <div className="flex gap-3">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src={update.avatarUrl} alt={update.username} />
                <AvatarFallback>{update.username.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-sm">{update.username}</span>
                    <span className="text-xs text-muted-foreground ml-2">• {update.time}</span>
                  </div>
                  <EllipsisIcon className="h-4 w-4 text-muted-foreground cursor-pointer" />
                </div>
                <div className="text-xs text-primary hover:underline">{update.org}</div>

                <div className="text-sm mt-2 mb-3 whitespace-pre-line leading-snug">
                  {update.text}
                </div>

                {update.imageUrl && (
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
                    <img src={update.imageUrl} alt="Post" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex items-center gap-4 text-muted-foreground mt-2">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{update.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{update.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs">{update.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ProfileActivity;