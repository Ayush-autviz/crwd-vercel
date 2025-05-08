import React from "react";
import { MapPin } from "lucide-react";

const CauseAboutCard: React.FC = () => (
  <div className="bg-white  p-5 mx-3 mb-2 flex flex-col gap-3">
    <div className="flex items-center gap-3 mb-1">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Helping humanity"
        className="w-12 h-12 rounded-lg object-cover"
      />
      <span className="font-semibold text-base text-gray-900">
        Helping humanity
      </span>
    </div>
    <div className="text-lg text-gray-700">
      This is a bio about Non Profit and how they give back to their community
      so that users can learn about how their money is supporting others. Here's
      more information about our non-profit. This is a long description so that
      you can learn about all the details of our organization. We love what we
      do and we hope you do too. Please reach out if you have any questions.
    </div>
    <div className="text-sm grid grid-cols-12   text-gray-600 ">
      <span className="font-semibold  gap-1 text-lg col-span-1">
        <MapPin />
      </span>

      <div className=" col-span-11 flex flex-col gap-6 ">
        <div className="text-sm flex flex-col gap-1  text-gray-600">
          <span className="font-semibold text-lg">Address</span>
          <span className="text-sm font-semibold">
            123 Main Street. USA 10010
          </span>
        </div>

        <div className="text-sm flex flex-col gap-1  text-gray-600">
          <span className="font-semibold">MAIN FOCUS</span>{" "}
          <span className="    text-blue-600 underline">Animal Welfare</span>
        </div>
        <div className="text-sm flex flex-col gap-1  text-gray-600">
          <span className="font-semibold">ESTABLISHED</span>{" "}
          <span className=" font-semibold">2012</span>
        </div>
        <div className="text-sm flex flex-col gap-1  text-gray-600">
          <span className="font-semibold">TAX ID</span>{" "}
          <span className=" font-semibold">10125-3129</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Helping Humanity is a 501(c)(3) public charity, EIN 13-1788491.
        </div>
      </div>
    </div>
  </div>
);

export default CauseAboutCard;
