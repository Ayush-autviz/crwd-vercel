import React from "react";
import { Heart, MessageSquare, Share, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import starbux from "/starbucks.jpg";
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
    <div>
      <h2 className="text-base font-medium text-gray-800 mb-3">Popular</h2>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 ">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img src="/starbucks.jpg" alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-sm font-medium">
                        {post.username}
                      </span>
                      <span className="text-xs text-gray-500">
                        · {post.timeAgo}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-blue-500">@{post.handle}</span>
                </div>
              </div>
              <button className="text-gray-500">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-gray-800 mb-3">{post.content}</p>

            {post.postImage && (
              <div className="mb-3 rounded-lg overflow-hidden">
                <img
                  src={post.postImage}
                  alt="Post content"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[180px] lg:max-h-[220px]"
                />
              </div>
            )}

            <div className="flex items-center gap-4 pt-2">
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-red-500">
                <Heart className="h-5 w-5" />
                <span className="text-xs">{formatNumber(post.likes)}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-blue-500">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs">{formatNumber(post.comments)}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-green-500">
                <Share className="h-5 w-5" />
                <span className="text-xs">{formatNumber(post.shares)}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
