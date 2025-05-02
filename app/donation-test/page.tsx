"use client";

import DonationFlow from "@/components/DonationFlow";

export default function DonationTestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden relative">
        <DonationFlow />
      </div>
    </div>
  );
}
