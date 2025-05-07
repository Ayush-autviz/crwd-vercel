//@ts-nocheck

import { useState } from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";
import { Avatar } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Organization = {
  id: string;
  name: string;
  imageUrl: string;
  color?: string;
  shortDesc?: string;
};

const CROWDS: Organization[] = [
  {
    id: "1",
    name: "Making a difference",
    imageUrl: "",
    color: "#E16AFF",
    shortDesc: "T  k",
  },
  {
    id: "2",
    name: "Better Days",
    imageUrl: "",
    color: "#5A8CFF",
    shortDesc: "G  D",
  },
  //   {
  //     id: "3",
  //     name: "Get Power",
  //     imageUrl: "/lovable-uploads/d5634324-fc91-416b-a5f3-d21fec2bded2.png",
  //     shortDesc: "Get Power",
  //   },
];

const RECENTS: Organization[] = [
  { id: "101", name: "Red Cross", imageUrl: "" },
  { id: "102", name: "St. Judes", imageUrl: "" },
  { id: "103", name: "Community first", imageUrl: "" },
  { id: "104", name: "Community first", imageUrl: "" },
  { id: "105", name: "Make a Wish", imageUrl: "" },
  { id: "106", name: "Planned", imageUrl: "" },
  { id: "107", name: "Planned", imageUrl: "" },
  { id: "108", name: "Made with love", imageUrl: "" },
  { id: "109", name: "Made with love", imageUrl: "" },
];

const SUGGESTED: Organization[] = [
  { id: "201", name: "World Aid", imageUrl: "" },
  { id: "202", name: "Make a wish", imageUrl: "" },
  { id: "203", name: "Community first", imageUrl: "" },
  { id: "204", name: "Planned", imageUrl: "" },
  { id: "205", name: "Red Cross", imageUrl: "" },
  { id: "206", name: "St. Jude's", imageUrl: "" },
];

interface DonationBox2Props {
  initialAmount: number;
  onBack: () => void;
  step: number;
  setStep: (step: number) => void;
  selectedOrganizations: any;
  setSelectedOrganizations: any;
}

const DonationBox2 = ({
  initialAmount,
  onBack,
  step,
  setStep,
  selectedOrganizations,
  setSelectedOrganizations,
}: DonationBox2Props) => {
  // const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>(
  //   []
  // );
  const [donationAmount] = useState(7);
  const isMobile = useIsMobile();
  // Function to toggle selection of an organization
  const toggleOrganization = (orgId: string) => {
    setSelectedOrganizations((prev) =>
      prev.includes(orgId)
        ? prev.filter((id) => id !== orgId)
        : [...prev, orgId]
    );
  };

  // Function to get organization by ID
  const getOrganizationById = (orgId: string): Organization | undefined => {
    return [...CROWDS, ...RECENTS, ...SUGGESTED].find(
      (org) => org.id === orgId
    );
  };

  // Function to remove an organization from selected list
  const removeOrganization = (orgId: string) => {
    setSelectedOrganizations((prev) => prev.filter((id) => id !== orgId));
  };

  // Get all selected organizations objects
  const selectedOrgs = selectedOrganizations
    .map((id) => getOrganizationById(id))
    .filter(Boolean) as Organization[];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header with back button */}

      <div className="flex-1 overflow-auto bg-[#f5f5ff] rounded-lg pb-8 mt-5 mx-4">
        {/* Donation Amount Card */}
        <div className="bg-[#F5F8FF] p-6 rounded-xl mx-4 mt-4 text-center">
          <div className="bg-[#D3DEFF] inline-flex rounded-xl px-6 py-2 mb-2">
            <span className="text-blue-600 text-2xl font-bold">
              ${donationAmount}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            You can add up to 10 more causes to your donation box
          </p>
        </div>

        {/* Selected Organizations List */}
        {selectedOrgs.length > 0 && (
          <div className="mt-2 px-4 ">
            <h2 className="text-sm text-gray-500 mb-2">Selected Causes</h2>
            <div className="flex flex-wrap gap-2">
              {selectedOrgs.map((org) => (
                <Badge
                  key={org.id}
                  variant="outline"
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-white"
                >
                  {org.name}
                  <button
                    onClick={() => removeOrganization(org.id)}
                    className="ml-1 bg-gray-100 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* CROWDS Section */}
        <div className="mt-2 p-4 ">
          <h2 className="text-sm  text-[#8993bf] mb-3">
            Select from your CRWDS
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {CROWDS.map((org) => (
              <button
                key={org.id}
                className={cn(
                  "flex-shrink-0 flex flex-col items-center justify-center min-w-16 h-16 rounded-lg relative",
                  org.color ? `bg-[${org.color}]` : "bg-cover bg-center",
                  selectedOrganizations.includes(org.id) &&
                    "ring-2 ring-blue-500"
                )}
                style={{
                  backgroundColor: org.color || undefined,
                  backgroundImage:
                    org.imageUrl && !org.color
                      ? `url(${org.imageUrl})`
                      : undefined,
                }}
                onClick={() => toggleOrganization(org.id)}
              >
                {org.shortDesc && (
                  <span className="text-white text-xs">{org.shortDesc}</span>
                )}
                {selectedOrganizations.includes(org.id) && (
                  <div className="absolute top-1 right-1 w-3 h-3 bg-blue-500 rounded-full">
                    CR
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Recents Section */}
        <div className=" bg-[#ededfa] rounded-lg p-3">
          <div className="mt-6 px-4">
            <h2 className="text-sm text-gray-500 mb-3">
              Select from your Recents
            </h2>
            <div className="space-y-3 max-h-[150px] overflow-y-auto no-scrollbar">
              {RECENTS.map((org) => (
                <div key={org.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 bg-gray-300">
                      <div className="h-full w-full bg-gray-300 rounded-full" />
                      <img src="/redcross.png" alt="" />
                    </Avatar>
                    <span className="text-sm text-gray-700">{org.name}</span>
                  </div>
                  <Checkbox
                    checked={selectedOrganizations.includes(org.id)}
                    onCheckedChange={() => toggleOrganization(org.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* More Suggested */}
          <div className="mt-6 px-4">
            <h2 className="text-sm text-gray-500 mb-3">More Suggested</h2>
            <div className="space-y-3 max-h-[150px] overflow-y-auto no-scrollbar">
              {SUGGESTED.map((org) => (
                <div key={org.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 bg-gray-300">
                      <div className="h-full w-full bg-gray-300 rounded-full" />
                    </Avatar>
                    <span className="text-sm text-gray-700">{org.name}</span>
                  </div>
                  <Checkbox
                    checked={selectedOrganizations.includes(org.id)}
                    onCheckedChange={() => toggleOrganization(org.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-right">
          <a
            href="#"
            className="text-blue-500 text-sm flex items-center justify-end"
          >
            Discover more <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
      {/* Bottom Action Area */}
      <div className={` bg-white p-4 pb-9 w-full  ${isMobile ? "mb-20" : ""}`}>
        <Button
          onClick={() => setStep(3)}
          className={`bg-green-400 hover:bg-green-500 text-black w-full py-3 rounded-full font-medium mb-3${
            isMobile ? "mb-20" : ""
          } `}
        >
          Confirm
        </Button>

        <div className="flex items-center justify-center text-xs text-gray-500">
          <span className="mr-1">⚔️</span>
          <p className="mt-2">
            Your donation is protected and guaranteed.{" "}
            <a href="#" className="text-blue-500">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationBox2;
