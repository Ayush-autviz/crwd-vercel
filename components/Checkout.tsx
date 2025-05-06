import { ArrowLeft, ArrowRight, HelpCircle, Menu } from "lucide-react";
import { useState } from "react";
// import { Organization } from "../types/Organization";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface DonationOverviewProps {
  donationAmount?: number;

  onBack?: () => void;
  onManage?: () => void;
}

const organizations = [
  {
    id: "101",
    name: "Red Cross",
    imageUrl: "/redcross.png",
    description:
      "This is a non-profit mission statement that summarizes the company's goals and...",
  },
  {
    id: "102",
    name: "Green Thumb",
    imageUrl: "",
    color: "#2A9D8F",
    description:
      "This is a non-profit mission statement that summarizes the company's goals",
  },
  {
    id: "103",
    name: "Hands on Deck",
    imageUrl: "",
    color: "#457B9D",
    description:
      "This is a non-profit mission statement that summarizes the company's goals",
  },
  {
    id: "104",
    name: "Robin Hood",
    imageUrl: "",
    color: "#E63946",
    description:
      "This is a non-profit mission statement that summarizes the company's goals",
  },
  {
    id: "105",
    name: "Food 4 All",
    imageUrl: "",
    color: "#F4A261",
    description:
      "This is a non-profit mission statement that summarizes the company's goals",
  },
];

const crowds = [
  {
    id: "1",
    name: "Making a difference",
    imageUrl: "",
    color: "#E16AFF",
  },
  {
    id: "2",
    name: "Better Days",
    imageUrl: "",
    color: "#5A8CFF",
  },
  {
    id: "3",
    name: "Get Power",
    imageUrl: "/lovable-uploads/d5634324-fc91-416b-a5f3-d21fec2bded2.png",
    color: "#F9C74F",
  },
];

export const Checkout = ({
  donationAmount = 25,

  onBack = () => {},
  onManage = () => {},
}: DonationOverviewProps) => {
  const [isMonthly] = useState(true);
  const isMobile = useIsMobile();
  // Calculate equal distribution percentage
  const distributionPercentage =
    organizations.length > 0 ? Math.floor(100 / organizations.length) : 0;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 pb-6 rounded-b-lg">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onBack} className="p-1">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-medium text-lg">Chad Fotana's Donation Box</h1>
          <button className="p-1">
            <Menu size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center mt-4">
          <div className="text-5xl font-bold mb-1">${donationAmount}</div>
          <div className="text-sm flex items-center gap-1">
            per month <HelpCircle size={14} />
          </div>
        </div>

        <div className="flex mt-6 mb-2">
          <div className="flex-1 border-r border-white/20 text-center">
            <div className="text-2xl font-bold">{organizations.length}</div>
            <div className="text-sm">Causes</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-2xl font-bold">{crowds.length}</div>
            <div className="text-sm">CROWDS</div>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Button
              onClick={onManage}
              size="sm"
              className="bg-blue-400/30 text-white hover:bg-blue-400/50"
            >
              Manage →
            </Button>
          </div>
        </div>
      </div>

      {/* CROWDS Section */}
      <div className="px-4 mt-4">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-medium text-gray-700 uppercase">CRWDS</h2>
          <HelpCircle size={14} className="ml-1 text-gray-500" />
        </div>

        <div className="flex gap-3 mb-6">
          {crowds.map((crowd) => (
            <div
              key={crowd.id}
              className="w-14 h-14 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: crowd.color || "#e2e8f0",
                backgroundImage: crowd.imageUrl
                  ? `url(${crowd.imageUrl})`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="text-white text-sx font-normal">
                {crowd.name[0].split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CAUSES Section */}
      <div className="px-4 flex-1 overflow-auto">
        <h2 className="text-sm font-medium text-gray-700 uppercase mb-2">
          CAUSES
        </h2>

        <div className="space-y-4">
          {organizations.map((org) => (
            <div key={org.id} className="flex gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-md overflow-hidden">
                {org.imageUrl ? (
                  <img
                    src={org.imageUrl}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: org.color || "#e2e8f0" }}
                  >
                    {org.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1">
                    <h3 className="font-medium text-gray-900">{org.name}</h3>
                    <span className="text-xs text-gray-500">
                      @{org.name.replace(/\s+/g, "").toLowerCase()}
                    </span>
                  </div>
                  <Badge className="bg-gray-100 text-gray-600 font-normal hover:bg-gray-100">
                    {distributionPercentage}% distribution
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  {org.description ||
                    "This is a non-profit mission statement that summarizes the company's goals"}
                </p>
              </div>
            </div>
          ))}
          <p className="text-sm text-gray-500 text-left">
            Add up to 45 more causes to this box
          </p>
          <div className="pt-2 pb-2 text-left  ">
            <button className="flex">
              Discover{" "}
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <Button
              //   onClick={() => setStep(3)}
              className={`bg-blue-600  text-white rounded-full font-medium  ${
                isMobile ? "mb-30" : "mb-5"
              } `}
            >
              Create a CRWD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
