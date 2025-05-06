import Image from "next/image";
import { Minus, Plus, Bookmark, ChevronRight, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function OneTimeDonation({ setCheckout }: any) {
  const isMobile = useIsMobile();
  return (
    <div className=" bg-[#f5f5ff] flex flex-col items-center justify-center p-4 mx-4 mt-4 mb-4 rounded-lg">
      <div className="w-full max-w-md mx-auto space-y-5 md:hidden">
        {/* Mobile view - exactly as in the screenshot */}
        <h1 className="text-base font-medium text-gray-800">
          Your donation will support
        </h1>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="relative h-10 w-10 rounded-md overflow-hidden flex items-center">
                <Image
                  src="/redcross.png"
                  alt="Red Cross logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Red Cross</h3>
                <p className="text-sm text-gray-500">
                  This is a non-profit mission statement that aligns with the
                  company's goals and...
                </p>
              </div>
            </div>
            <button className="text-gray-400">
              <Bookmark size={20} />
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <button className="text-xs text-gray-400">Remove</button>
          </div>
        </div>

        <div className="text-sm text-blue-600">
          <p>You can add up to 10 more causes to this donation</p>
          <div className="flex items-center mt-1">
            <span>See More</span>
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-medium text-gray-800 mb-3">
            Enter donation amount
          </h2>
          <div className="bg-[#e8e8ff] rounded-xl p-3 flex items-center justify-between">
            <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blue-600">
              <Minus size={16} />
            </button>
            <div className="text-xl font-semibold text-blue-600">$7</div>
            <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blue-600">
              <Plus size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Input amount over $5</p>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4">
          <span className="text-sm font-medium">TOTAL:</span>
          <span className="text-lg font-bold">$7.00</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mt-4 border-t pt-4">
          <Shield size={14} />
          <span>Your donation is protected and guaranteed.</span>
          <Link href="#" className="text-blue-600">
            Learn More
          </Link>
        </div>
      </div>

      {/* Desktop view - better adapted layout */}
      <div className="hidden md:block w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-2xl font-medium text-gray-800">
              Your donation will support
            </h1>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                      src="/redcross.png"
                      alt="Red Cross logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Red Cross</h3>
                    <p className="text-sm text-gray-500">
                      This is a non-profit mission statement that aligns with
                      the company's goals and mission to help people in need
                      around the world.
                    </p>
                  </div>
                </div>
                <button className="text-gray-400">
                  <Bookmark size={24} />
                </button>
              </div>
              <div className="flex justify-end mt-3">
                <button className="text-sm text-gray-400">Remove</button>
              </div>
            </div>

            <div className="text-base text-blue-600">
              <p>You can add up to 10 more causes to this donation</p>
              <div className="flex items-center mt-2">
                <span>See More</span>
                <ChevronRight size={20} className="ml-1" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-medium text-gray-800 mb-4">
                Enter donation amount
              </h2>
              <div className="bg-[#e8e8ff] rounded-xl p-5 flex items-center justify-between">
                <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors">
                  <Minus size={24} />
                </button>
                <div className="text-2xl font-semibold text-blue-600">$7</div>
                <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors">
                  <Plus size={24} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">Input amount over $5</p>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <span className="text-base font-medium">TOTAL:</span>
              <span className="text-2xl font-bold">$7.00</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors">
              Complete Donation
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Shield size={18} />
              <span>Your donation is protected and guaranteed.</span>
              <Link href="#" className="text-blue-600 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`  py-4  w-full  ${isMobile ? "mb-20" : ""}`}>
        <Button
          onClick={() => setCheckout(true)}
          className={`bg-green-400 hover:bg-green-500 text-black w-full py-3 rounded-full font-medium mb-3${
            isMobile ? "mb-20" : ""
          } `}
        >
          Checkout
        </Button>

        {/* <div className="flex items-center justify-center text-xs text-gray-500">
          <span className="mr-1">⚔️</span>
          <p className="mt-2">
            Your donation is protected and guaranteed.{" "}
            <a href="#" className="text-blue-500">
              Learn More
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
