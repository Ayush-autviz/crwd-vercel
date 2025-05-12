import React from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
interface PopularPost {
  id: string;
  username: string;
  handle: string;
  timeAgo: string;
  content: string;
  userImage?: string;
  postImage?: string;
  likes: number;
  comments: number;
  shares: number;
}

const PopularPosts = () => {
  const popularPosts: PopularPost[] = [
    {
      id: "1",
      username: "anyjones_01",
      handle: "natiparks",
      timeAgo: "1d",
      content:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk",
      // userImage: "/lovable-uploads/45ac48ea-8f0a-46dd-945f-64e987599162.png",
      postImage: "/view.png",
      likes: 1000,
      comments: 170,
      shares: 23,
    },
    {
      id: "2",
      username: "anyjones_01",
      handle: "natiparks",
      timeAgo: "1d",
      content:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk",
      // userImage: "/lovable-uploads/45ac48ea-8f0a-46dd-945f-64e987599162.png",
      postImage: "/view.png",
      likes: 1000,
      comments: 170,
      shares: 23,
    },
    {
      id: "3",
      username: "anyjones_01",
      handle: "natiparks",
      timeAgo: "1d",
      content:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk",
      // userImage: "/lovable-uploads/45ac48ea-8f0a-46dd-945f-64e987599162.png",
      postImage: "/view.png",
      likes: 1000,
      comments: 170,
      shares: 23,
    },
  ];

  // Format numbers with k for thousands
  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(0)}k` : num.toString();
  };

  return (
    <div className="w-full p-4 md:p-0">
      <h2 className="text-lg font-semibold mb-4">Popular Posts</h2>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden shadow-sm border-0 ">
            <CardContent className="px-4">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src="/starbucks.jpg" alt={post.username} />
                  <AvatarFallback>{post.username.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-sm">{post.username}</span>
                      <span className="text-xs text-muted-foreground ml-2">• {post.timeAgo}</span>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </div>
                  <div  className="text-xs text-primary hover:underline">@{post.handle}</div>

                  <div className="text-sm mt-2 mb-3 whitespace-pre-line leading-snug">
                    {post.content}
                  </div>

                  {post.postImage && (
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
                      <img src={post.postImage} alt="Post" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-muted-foreground mt-2">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{formatNumber(post.likes)}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{formatNumber(post.comments)}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-xs">{formatNumber(post.shares)}</span>
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
};

export default PopularPosts;
