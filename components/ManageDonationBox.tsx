import React from "react";
import { ArrowLeft, Minus, Plus, CreditCard, Calendar, DollarSign, Trash2, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cause {
  id: string;
  name: string;
  imageUrl?: string;
  via?: string;
  color?: string;
}

interface ManageDonationBoxProps {
  amount: number;
  causes: Cause[];
  onBack: () => void;
}

const ManageDonationBox: React.FC<ManageDonationBoxProps> = ({ amount, causes, onBack }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Blue Header */}
      <div className="bg-blue-600 rounded-b-3xl px-4 pt-20 pb-15 relative">
        <button onClick={onBack} className="absolute left-4 top-4 p-2 rounded-full text-white hover:bg-blue-500/30">
          <ArrowLeft size={22} />
        </button>
        <a href="#" className="absolute right-4 top-4 text-xs text-white/80 underline">See full transaction history</a>
        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-4 mb-4 ">
            <button className="bg-white/20 rounded-full p-2 text-white"><Minus size={20} /></button>
            <span className="text-4xl font-bold text-white">${amount}</span>
            <button className="bg-white/20 rounded-full p-2 text-white"><Plus size={20} /></button>
          </div>
          <div className="text-white/80 text-sm mb-6">on the 26th of every month</div>
          <div className="flex w-full max-w-xs justify-between gap-2">
            <button className="flex flex-col items-center flex-1 bg-white/10 rounded-xl py-3 text-white">
              <DollarSign size={22} className="mb-1" />
              <span className="text-xs">Edit amount</span>
            </button>
            <button className="flex flex-col items-center flex-1 bg-white/10 rounded-xl py-3 text-white">
              <Calendar size={22} className="mb-1" />
              <span className="text-xs">Edit date</span>
            </button>
            <button className="flex flex-col items-center flex-1 bg-white/10 rounded-xl py-3 text-white">
              <CreditCard size={22} className="mb-1" />
              <span className="text-xs">Edit payment</span>
            </button>
          </div>
        </div>
      </div>
      {/* Edit Causes Button */}
      <div className="flex  mt-6 pb-4 px-8">
        <Button variant="outline" className="rounded-full px-6 py-2 text-blue-700 border-blue-200 bg-blue-50 hover:bg-blue-100 font-semibold">Edit Causes</Button>
      </div>
      {/* Causes List */}
      <div className=" flex-1 overflow-auto">
        <h2 className="text-base font-semibold text-gray-700 uppercase mb-4 tracking-wide px-8">
          CAUSES
        </h2>
        <div className="space-y-2 ">
          {causes.map((org) => (
            <div key={org.id} className="flex gap-4 items-center bg-white  px-8 py-4 border-b border-gray-200    ">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden shadow">
                {org.imageUrl ? (
                  <img
                    src={org.imageUrl}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-lg font-bold text-white"
                    style={{ backgroundColor: org.color || "#e2e8f0" }}
                  >
                    {org.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 text-base">{org.name}</h3>
                    <span className="text-xs text-gray-500">
                      @{org.name.replace(/\s+/g, "").toLowerCase()}
                    </span>
                  </div>
                 
                </div>
                <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Remove</span>

                <Trash2 size={16} className="" /> 
                </div>
              </div>
            </div>
          ))}
       
         
        </div>
      </div>
              <div className="text-xs text-gray-400 text-center pt-5 ml-auto px-4">Allocations will automatically adjust for 100% distribution</div>

      {/* Footer */}
      <div className="px-4 py-6 pb-30">
        <div className="grid grid-cols-2 gap-2">
          <button className="col-span-1 text-xs text-gray-400 ">Deactivate donation box</button>
          <Button className="col-span-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-20 w-1/2 mx-auto">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageDonationBox; 