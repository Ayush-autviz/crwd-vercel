import { useState } from "react";
import { Bell, Minus, Plus, X, StepBack, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import DonationBox2 from "./DonationBox2";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { DonationBox3 } from "./DonationBox3";
import OneTimeDonation from "./OneTimeDonation";
import { Checkout } from "./Checkout";
const DonationBox = () => {
  const [activeTab, setActiveTab] = useState<"setup" | "onetime">("setup");
  const [checkout, setCheckout] = useState(false);
  const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>(
    []
  );
  const [donationAmount, setDonationAmount] = useState(7);
  const [step, setStep] = useState(1);

  // const step = 2;
  const isMobile = useIsMobile();

  const incrementDonation = () => {
    setDonationAmount((prev) => prev + 1);
  };

  const decrementDonation = () => {
    if (donationAmount > 1) {
      setDonationAmount((prev) => prev - 1);
    }
  };

  console.log(selectedOrganizations, "ork");

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {checkout ? (
        <Checkout />
      ) : (
        <>
          {isMobile ? (
            <>
              <header className="flex items-center justify-between p-4 bg-card border-b sticky top-0 z-10">
                <Image
                  src="/logo3.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center relative">
                    <div className="w-3 h-3 rounded-full bg-destructive absolute top-1 right-1"></div>
                    <Bell className="h-5 w-5" />
                  </div>
                </div>
              </header>
            </>
          ) : (
            <>
              <header className="bg-card border-b p-[13.5px] flex items-center justify-between sticky top-0 z-10">
                <h1 className="text-xl font-bold">Donation</h1>

                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </Button>
                  <div className="relative">
                    <div className="absolute z-10 top-[-2] right-0 w-3 h-3 bg-destructive rounded-full"></div>
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </header>
            </>
          )}
          <div className="flex items-center p-4 border-b">
            {/* <button className="p-1">
          <X size={20} />
        </button> */}
            <button onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft />
            </button>
            <h1 className="text-center flex-1 font-medium">Donation Box</h1>
            <div className="w-5"></div> {/* Spacer for alignment */}
          </div>

          {/* Tab Navigation */}
          <div className="flex mx-4 mt-4 rounded-xl overflow-hidden border">
            <button
              className={cn(
                "flex-1 py-5 px- text-sm font-medium transition-all",
                activeTab === "setup"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500"
              )}
              onClick={() => setActiveTab("setup")}
            >
              <div className="flex items-center justify-center">
                {/* <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-400 mr-2"></div> */}
                Set up donation box
              </div>
            </button>
            <button
              className={cn(
                "flex-1 py-5 px-4 text-sm font-medium transition-all",
                activeTab === "onetime"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500"
              )}
              onClick={() => setActiveTab("onetime")}
            >
              One-Time Donation
            </button>
          </div>

          {/* Main Content */}

          {activeTab === "onetime" ? (
            <>
              <OneTimeDonation setCheckout={setCheckout} />
            </>
          ) : (
            <>
              {step === 1 ? (
                <div className="flex-1 mx-4 mt-4 mb-4 flex flex-col">
                  {/* Info Card */}
                  <div className="bg-[#f5f6ff] rounded-xl  mb-4 p-4">
                    <h2 className="text-xl font-medium text-gray-700  py-1 my-2">
                      Welcome to your donation box
                    </h2>
                    <p className="text-gray-600 text-sm py-3 ">
                      Your donation box makes giving back easy! Just set your
                      price and you can add as many of your favorite causes at
                      any time. Your donation will be evenly distributed across
                      all of the organizations in your box. Let's get started!
                    </p>
                    <div className=" bg-[#e6e7f4] rounded-lg mt-6 p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium mb-1">
                          Enter monthly donation
                        </p>
                        <p className="text-xs text-gray-500 ">
                          Input amount over $5
                        </p>
                      </div>
                      <div className="bg-[#dbddf6] flex items-center rounded-full border">
                        <button
                          onClick={decrementDonation}
                          className="flex items-center justify-center w-10 h-10  rounded-full"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="flex-1 flex justify-center items-center h-10 0 px-4">
                          <span className="text-blue-500 text-2xl font-bold">
                            ${donationAmount}
                          </span>
                        </div>
                        <button
                          onClick={incrementDonation}
                          className="flex items-center justify-center w-10 h-10  rounded-r-full"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Security Message */}
                    <div className="flex items-center mt-4 p-2">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300 mr-2">
                        <span className="text-xs">✓</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Your donation is protected and guaranteed.{" "}
                        <span className="text-blue-500">Learn More</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={`p-4 flex justify-between items-center ${
                      isMobile ? "mb-20" : ""
                    }`}
                  >
                    <p className={`text-gray-500`}>Now let's add some causes</p>
                    <button
                      onClick={() => setStep(2)}
                      className={`bg-green-500 text-white px-6 py-2 rounded-full font-medium `}
                    >
                      Next
                    </button>
                  </div>
                  {/* Donation Amount Selector */}
                </div>
              ) : step === 2 ? (
                //@ts-ignore
                <DonationBox2
                  step={step}
                  selectedOrganizations={selectedOrganizations}
                  setSelectedOrganizations={setSelectedOrganizations}
                  setStep={setStep}
                />
              ) : step === 3 ? (
                //@ts-ignore
                <DonationBox3
                  setCheckout={setCheckout}
                  step={step}
                  selectedOrganizations={selectedOrganizations}
                  setSelectedOrganizations={setSelectedOrganizations}
                  setStep={setStep}
                />
              ) : (
                <div className="flex-1 mx-4 mt-4 mb-4 flex flex-col">
                  {/* Info Card */}
                  <div className="bg-[#f5f6ff] rounded-xl  mb-4 p-4">
                    <h2 className="text-xl font-medium text-gray-700  py-1 my-2">
                      Welcome to your donation box
                    </h2>
                    <p className="text-gray-600 text-sm py-3 ">
                      Your donation box makes giving back easy! Just set your
                      price and you can add as many of your favorite causes at
                      any time. Your donation will be evenly distributed across
                      all of the organizations in your box. Let's get started!
                    </p>
                    <div className=" bg-[#e6e7f4] rounded-lg mt-6 p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium mb-1">
                          Enter monthly donation
                        </p>
                        <p className="text-xs text-gray-500 ">
                          Input amount over $5
                        </p>
                      </div>
                      <div className="bg-[#dbddf6] flex items-center rounded-full border">
                        <button
                          onClick={decrementDonation}
                          className="flex items-center justify-center w-10 h-10  rounded-full"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="flex-1 flex justify-center items-center h-10 0 px-4">
                          <span className="text-blue-500 text-2xl font-bold">
                            ${donationAmount}
                          </span>
                        </div>
                        <button
                          onClick={incrementDonation}
                          className="flex items-center justify-center w-10 h-10  rounded-r-full"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Security Message */}
                    <div className="flex items-center mt-4 p-2">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300 mr-2">
                        <span className="text-xs">✓</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Your donation is protected and guaranteed.{" "}
                        <span className="text-blue-500">Learn More</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={`p-4 flex justify-between items-center ${
                      isMobile ? "mb-20" : ""
                    }`}
                  >
                    <p className={`text-gray-500`}>Now let's add some causes</p>
                    <button
                      onClick={() => setStep(2)}
                      className={`bg-green-500 text-white px-6 py-2 rounded-full font-medium `}
                    >
                      Next
                    </button>
                  </div>
                  {/* Donation Amount Selector */}
                </div> // Optional default
              )}
            </>
          )}
        </>
      )}

      {/* Header with close button */}

      {/* Next Button Section */}
    </div>
  );
};

export default DonationBox;
