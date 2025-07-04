import React from 'react';
import PostDetailHeader from '@/components/post/PostDetailHeader';
import { popularPosts, profileActivity } from '@/lib/profile/profileActivity';
import ProfileActivityCard from '@/components/profile/ProfileActivityCard';

// Generate static params for all post IDs
export async function generateStaticParams() {
  const allPosts = [...popularPosts, ...profileActivity];
  
  return allPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
  const {id} = await params;
    const post = [...popularPosts, ...profileActivity].find((post) => post.id === parseInt(id));
    if (!post) return <div className="text-center py-10">Post not found</div>;
  return (
    <div className="bg-white min-h-screen flex flex-col relative pb-16 ">
      <PostDetailHeader />
      <main className="flex-1">
        <ProfileActivityCard post={post} className=' rounded-none shadow-none border-b border-gray-200'/>
        {/* Status Row (example: show username is going) */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <img src={post.avatarUrl} alt={post.username} className="w-6 h-6 rounded-full border" />
          <span className="text-sm text-gray-700 font-medium">@{post.username}</span>
          <span className="text-sm text-gray-500">is going</span>
        </div>
        {/* Comment Block (show username and text) */}
        <div className="flex items-start gap-3 px-4 py-4 border-b">
          <img src={post.avatarUrl} alt={post.username} className="w-7 h-7 rounded-full border mt-1" />
          <div>
            <span className="font-semibold text-sm text-gray-800">@{post.username}</span>
            <p className="text-sm text-gray-700 leading-snug mt-1">{post.text}</p>
          </div>
        </div>
        {/* Spacer for sticky input */}
        <div className="h-20" />
      </main>
      {/* Sticky Input Bar */}
      <div className="fixed bottom-0 right-0 bg-white border-t px-4 py-3 flex items-center gap-2 w-[calc(100%-288px)] mx-auto">
        <div className="flex items-center gap-2 flex-1 bg-gray-100 rounded-full px-4 py-2">
          <img src={post.avatarUrl} alt={post.username} className="w-5 h-5 rounded-full border" />
          <input
            type="text"
            placeholder="Join the conversation"
            className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
