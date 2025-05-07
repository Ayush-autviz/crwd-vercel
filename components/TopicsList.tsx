import React from "react";

interface Topic {
  id: string;
  name: string;
  posts: number;
  avatars: string[];
}

const TopicsList = ({ topics }: any) => {
  return (
    <div>
      <h2 className="text-base font-medium text-gray-800 mb-3 px-4">Topics</h2>
      <div className="space-y-3">
        {topics.map((topic: any) => (
          <div
            key={topic.id}
            className="flex justify-between items-center hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-colors"
          >
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {topic.avatars.map((avatar: any, index: any) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs text-gray-600">
                      {avatar.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">{topic.name}</span>
            </div>
            <span className="text-xs text-gray-500">{topic.posts} Posts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
