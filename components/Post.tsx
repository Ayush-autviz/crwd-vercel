import {
  Heart,
  MessageSquare,
  MoreHorizontal,
  Share2,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Post() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-start mb-3">
        <div className="flex-shrink-0 mr-3">
          {/* <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Profile picture"
            width={48}
            height={48}
            className="rounded-full"
          /> */}

          <User />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <span className="font-medium">mynameismya</span>
              <span className="text-gray-500 text-sm ml-1">· 17h</span>
            </div>
            <button className="text-gray-500">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="text-blue-500 font-medium mt-1">#feedthehungry</div>
          <p className="mt-2">
            The quick, brown fox jumps over a lazy dog. DJs flock by animal
            welfare quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
            flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-gray-500">
        <button className="flex items-center space-x-2">
          <Heart className="h-5 w-5" />
          <span>258</span>
        </button>
        <button className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <span>15</span>
        </button>
        <button className="flex items-center space-x-2">
          <Share2 className="h-5 w-5" />
          <span>3</span>
        </button>
      </div>
    </div>
  );
}
