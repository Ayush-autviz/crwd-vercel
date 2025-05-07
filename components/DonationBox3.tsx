"use client";
import { useState } from "react";
import { Bookmark, Trash2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CROWDS, RECENTS, SUGGESTED } from "@/constants";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type Organization = {
  id: string;
  name: string;
  imageUrl: string;
  color?: string;
  shortDesc?: string;
  description?: string;
};

interface DonationSummaryProps {
  selectedOrganizations: any;
  setSelectedOrganizations: any;
  step: any;
  setCheckout: any;
  onRemoveOrganization: (id: string) => void;
  onBookmarkOrganization?: (id: string) => void;
  setStep: any;
}

export const DonationBox3 = ({
  selectedOrganizations,
  setCheckout,
  onRemoveOrganization,
  onBookmarkOrganization,
}: DonationSummaryProps) => {
  const isMobile = useIsMobile();
  const getOrganizationById = (orgId: string): Organization | undefined => {
    return [...CROWDS, ...RECENTS, ...SUGGESTED].find(
      (org) => org.id === orgId
    );
  };
  const selectedOrgs = selectedOrganizations
    .map((id: any) => getOrganizationById(id))
    .filter(Boolean) as Organization[];

  console.log(selectedOrganizations, "33");
  return (
    <div className="pb-8 mt-5 px-4">
      <Card className="w-full bg-[#F8F7FD] rounded-xl p-4 shadow-sm ">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[#564F6F] text-base font-medium">
            Your donation will support
          </h2>
          <span className="text-[#564F6F] text-sm font-medium px-2 py-0.5 bg-[#E8E6F8] rounded-md">
            {selectedOrganizations.length} CAUSES
          </span>
        </div>

        <div className="space-y-3">
          {selectedOrgs?.map((org, index) => (
            <div key={org.id}>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Avatar className="h-10 w-10 rounded-md mt-0.5">
                      {org.imageUrl ? (
                        <AvatarImage src={org.imageUrl} alt={org.name} />
                      ) : (
                        <AvatarFallback
                          className="rounded-md"
                          style={{ backgroundColor: org.color || "#E5E7EB" }}
                        >
                          {org.name.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h3 className="text-sm font-medium text-[#1A1F2C]">
                        {org.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {org.description ||
                          "This is a non-profit mission statement that summarizes the company's goals and ..."}
                      </p>
                      <button
                        onClick={() => onRemoveOrganization(org.id)}
                        className="text-xs text-gray-500 flex items-center mt-1 hover:text-gray-700"
                      >
                        <Trash2 size={12} className="mr-1" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      onBookmarkOrganization && onBookmarkOrganization(org.id)
                    }
                    className="text-gray-400 hover:text-gray-600 self-start"
                  >
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>
              {index < selectedOrganizations.length - 1 && (
                <div className="py-1">
                  {/* This empty div provides spacing */}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
      <div className={`py-3  w-full  ${isMobile ? "mb-20" : ""}`}>
        <Button
          onClick={() => setCheckout(true)}
          className={`bg-[#6cd89b] hover:bg-green-500 text-black w-full py-3 rounded-full font-medium mb-3${
            isMobile ? "mb-20" : ""
          } `}
        >
          Checkout
        </Button>

        <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
          <span className="mr-1">⚔️</span>
          <p className="">
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
