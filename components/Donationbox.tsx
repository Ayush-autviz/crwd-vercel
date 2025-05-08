import { useState } from "react";
import { Minus, Plus, X, } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import DonationBox2 from "./DonationBox2";
import { DonationBox3 } from "./DonationBox3";
import OneTimeDonation from "./OneTimeDonation";
import { Checkout } from "./Checkout";
import Link from "next/link";


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
        <Checkout onBack={() => setCheckout(false)} />
      ) : (
        <>
          {/* <ProfileNavbar  /> */}
          <div className="flex items-center p-4 ">
          {/* {step   && ( */}
              <Link href="/" className="p-1 md:hidden">
          <X size={20} />
              </Link>
            {/* )} */}
            {/* {step > 1 && activeTab !== "onetime" && (  
              <button onClick={() => setStep((s) => s - 1)}>
               <X size={20} />
             </button>
            )} */}
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
                <div className="flex-1 mx-4 mt-4 mb-4 flex flex-col p-4">
                  {/* Info Card */}
                  <div className="bg-[#f5f6ff] rounded-xl  mb-4 p-8">
                    <h2 className="text-xl font-medium text-gray-700  py-1 my-2 p-4">
                      Welcome to your donation box
                    </h2>
                    <p className="text-gray-600 text-sm  p-4 ">
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
                      className={`bg-[#6cd89b] text-black px-8 py-4 rounded-2xl font-medium `}
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
                  <div className="bg-[#f5f6ff] rounded-xl  mb-4 ">
                    <h2 className="text-xl font-medium text-gray-700  py-1 my-2">
                      Welcome to your donation box
                    </h2>
                    <p className="text-gray-600 text-sm py-3 ">
                      Your donation box makes giving back easy! Just set your
                      price and you can add as many of your favorite causes at
                      any time. Your donation will be evenly distributed across
                      all of the organizations in your box. Let's get started!
                    </p>
                    <div className=" bg-[#e6e7f4] rounded-lg mt-6  flex justify-between items-center">
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
