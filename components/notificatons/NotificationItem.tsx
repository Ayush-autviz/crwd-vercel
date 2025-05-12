import { ArrowRightLeft } from "lucide-react";
import React from "react";
import Link from "next/link";

interface NotificationItemProps {
  type: "connect" | "donation" | "post" | "event";
  avatarUrl?: string;
  username?: string;
  message: string;
  time: string;
  groupName?: string;
  groupAvatar?: string;
  link?: string;
  eventDate?: string;
  eventTitle?: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  avatarUrl,
  username,
  message,
  time,
  groupName,
  groupAvatar,
  link,
  eventDate,
  eventTitle,
  onAccept,
  onDecline,
}) => {
  return (
    <div className="w-full bg-white grid grid-cols-1 md:grid-cols-1 md:flex-row md:items-center  ">
      {type === "connect" && (
        <div className="flex gap-3  border-t border-gray-200 py-5 px-4  ">
          <div className="col-span-1  flex h-11 w-11  rounded-full justify-center items-start">
            <img
              src={avatarUrl}
              alt={username}
              className="w-11 h-11 rounded-full object-cover border-2 border-gray-100"
            />
          </div>
          <div className="col-span-11  flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">
                @{`${username} .`}
              </span>
              <span className="text-xs text-gray-400 ">{time}</span>
            </div>
            <span className="text-gray-700 text-[0.98rem]">{message}</span>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-blue-600 text-white rounded-lg px-10 py-1.5 font-medium text-sm hover:bg-blue-700 transition"
                onClick={onAccept}
              >
                Follow Back
              </button>
            </div>
          </div>
        </div>
      )}
      {type === "donation" && (
        <Link href="/donation" className="w-full">
          <div className="flex gap-3 md:grid-cols-12 border-t border-gray-200 py-4 px-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="col-span-1 flex justify-center items-center">
              <ArrowRightLeft className="text-gray-700" />
            </div>
            <div className="col-span-11 flex-1 flex flex-col gap-1 justify-center">
              <span className="text-gray-700 ">{message}</span>
              <span className="text-xs text-gray-400">{time}</span>
            </div>
          </div>
        </Link>
      )}
      {type === "post" && (
        <div className="flex gap-3 border-t border-gray-200 py-5 px-4">
          <Link href="/profile" className="col-span-1 flex h-11 w-11 rounded-full justify-center items-start">
            <img
              src={avatarUrl}
              alt={username}
              className="w-11 h-11 rounded-full object-cover border-2 border-gray-100"
            />
          </Link>
          <div className="col-span-11 flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Link href="/profile">
                <span className="font-semibold text-gray-900 hover:underline cursor-pointer">
                  @{username}
                </span>
              </Link>
              <span className="text-xs text-gray-400">{time}</span>
            </div>
            <span className="text-gray-700 text-[0.98rem]">
              {message} <Link href={link || "#"} className="text-blue-600 hover:underline">{link}</Link>
            </span>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <Link href="/feed-hungry">
                  <img
                    src={groupAvatar}
                    alt={groupName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </Link>
                <Link href="/feed-hungry">
                  <span className="font-medium text-gray-900 hover:underline cursor-pointer">
                    {groupName}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "event" && (
        <div className="flex gap-3 border-t border-gray-200 py-5 px-4">
          <Link href="/profile" className="col-span-1 flex h-11 w-11 rounded-full justify-center items-start">
            <img
              src={avatarUrl}
              alt={username}
              className="w-11 h-11 rounded-full object-cover border-2 border-gray-100"
            />
          </Link>
          <div className="col-span-11 flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Link href="/profile">
                <span className="font-semibold text-gray-900 hover:underline cursor-pointer">
                  @{username}
                </span>
              </Link>
              <span className="text-xs text-gray-400">{time}</span>
            </div>
            <span className="text-gray-700 text-[0.98rem]">{message}</span>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Link href="/feed-hungry">
                  <img
                    src={groupAvatar}
                    alt={groupName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </Link>
                <Link href="/feed-hungry">
                  <span className="font-medium text-gray-900 hover:underline cursor-pointer">
                    {groupName}
                  </span>
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">{eventTitle}</span>
                <span className="text-sm text-gray-600">{eventDate}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
