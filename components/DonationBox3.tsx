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

  return (
    <div className="pb-10 mt-5 px-2 md:px-6 md:hidden">
      <Card className="w-full bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-[#564F6F] text-lg font-semibold mb-2">Your donation will support</h2>
          <span className="text-[#564F6F] text-base font-medium px-4 py-1 bg-[#F3F2FA] rounded-full mb-2">{selectedOrganizations.length} CAUSES</span>
        </div>
        <div className="space-y-6">
          {selectedOrgs?.map((org, index) => (
            <div key={org.id}>
              <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-3 shadow-sm">
                <div className="flex gap-4 items-center">
                  <Avatar className="h-14 w-14 rounded-xl ring-2 ring-blue-100 shadow-sm">
                    {org.imageUrl ? (
                      <AvatarImage src={org.imageUrl} alt={org.name} />
                    ) : (
                      <AvatarFallback
                        className="rounded-xl"
                        style={{ backgroundColor: org.color || "#E5E7EB" }}
                      >
                        {org.name.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#1A1F2C] mb-1">{org.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                      {org.description ||
                        "This is a non-profit mission statement that summarizes the company's goals and ..."}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onRemoveOrganization(org.id)}
                        className="text-xs text-gray-400 flex items-center hover:text-red-500 transition px-2 py-1 rounded-md bg-white border border-gray-100"
                      >
                        <Trash2 size={14} className="mr-1" />
                        <span>Remove</span>
                      </button>
                      <button
                        onClick={() =>
                          onBookmarkOrganization && onBookmarkOrganization(org.id)
                        }
                        className="text-gray-300 hover:text-blue-500 transition px-2 py-1 rounded-md bg-white border border-gray-100"
                      >
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {index < selectedOrganizations.length - 1 && (
                <div className="py-3" />
              )}
            </div>
          ))}
        </div>
      </Card>
      <div className="py-6 w-full">
        <Button
          onClick={() => setCheckout(true)}
          className="bg-[#6cd89b] hover:bg-green-500 text-black w-full py-4 rounded-full font-semibold text-lg shadow-md mb-4"
        >
          Checkout
        </Button>
        <div className="flex items-center justify-center text-sm text-gray-500 mt-2">
          <span className="mr-1">⚔️</span>
          <p className="">
            Your donation is protected and guaranteed.{' '}
            <a href="#" className="text-blue-500">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
