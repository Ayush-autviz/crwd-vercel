import { ArrowRightLeft } from "lucide-react";
import React from "react";

interface NotificationItemProps {
  type: "connect" | "donation";
  avatarUrl?: string;
  username?: string;
  message: string;
  time: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  avatarUrl,
  username,
  message,
  time,
  onAccept,
  onDecline,
}) => {
  return (
    <div className="w-full bg-white grid grid-cols-1 md:grid-cols-1 md:flex-row md:items-center  ">
      {type === "connect" && (
        <div className="grid grid-cols-12 gap-3  border-t border-gray-200 py-5 px-6  ">
          <div className="col-span-1 flex justify-center items-start">
            <img
              src={avatarUrl}
              alt={username}
              className="w-11 h-11 rounded-full object-cover border-2 border-gray-100"
            />
          </div>
          <div className="col-span-11 flex-1 flex flex-col gap-1">
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
                Accept
              </button>
              <button
                className="bg-gray-100 text-gray-900 rounded-lg px-10 py-1.5 font-medium text-sm hover:bg-gray-200 transition"
                onClick={onDecline}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
      {type === "donation" && (
        <div className="grid grid-cols-12 gap-3 md:grid-cols-12 border-t border-gray-200 py-4 px-6 ">
          <div className="col-span-1 flex justify-center items-center">
            <ArrowRightLeft className="text-gray-700" />
          </div>
          <div className="col-span-11 flex-1 flex flex-col gap-1 justify-center">
            <span className="text-gray-700 ">{message}</span>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
