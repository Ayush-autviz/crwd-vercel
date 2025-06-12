"use client";

// PaymentSection.tsx
// New component to handle Stripe card payment and Apple Pay (Payment Request API) within the checkout flow.

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CreditCard, Lock } from "lucide-react";

interface PaymentSectionProps {
  /** Amount in USD */
  amount: number;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ amount }) => {
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  // Handlers just update local state – no real payment logic
  const handleChange = (field: string, value: string) =>
    setCard((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="px-8 py-6 bg-gray-50">
      <Card className="p-6 shadow-lg border-0">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Details</h2>
          <p className="text-gray-500 text-sm">Choose your preferred payment method</p>
        </div>

        {/* Express Checkout */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Express Checkout</span>
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-gray-400" />
              <span className="text-xs text-gray-400">Secure payment</span>
            </div>
          </div>
          
          <Button
            className="w-full h-14 bg-black hover:bg-black/90 rounded-xl flex items-center justify-center gap-3 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <Image
              src="/apple-logo.svg"
              alt="Apple Pay"
              width={20}
              height={20}
              className="opacity-90"
            />
            <span className="text-base font-medium text-white">Pay with Apple Pay</span>
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-medium text-gray-400">OR PAY WITH CARD</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Card Details Form */}
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number" className="text-gray-700">
                Card Number
              </Label>
              <div className="relative">
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={card.number}
                  onChange={(e) => handleChange("number", e.target.value)}
                  className="pl-11 h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                />
                <CreditCard className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="card-name" className="text-gray-700">
                Cardholder Name
              </Label>
              <Input
                id="card-name"
                placeholder="Name on card"
                value={card.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="card-expiry" className="text-gray-700">
                  Expiry Date
                </Label>
                <Input
                  id="card-expiry"
                  placeholder="MM/YY"
                  value={card.expiry}
                  onChange={(e) => handleChange("expiry", e.target.value)}
                  className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-cvc" className="text-gray-700">
                  Security Code
                </Label>
                <Input
                  id="card-cvc"
                  placeholder="CVC"
                  value={card.cvc}
                  onChange={(e) => handleChange("cvc", e.target.value)}
                  className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                />
              </div>
            </div>
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium h-14 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md mt-6">
            Donate ${amount}
          </Button>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Lock size={14} className="text-gray-400" />
            <span className="text-xs text-gray-400">
              Your payment info is securely encrypted
            </span>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PaymentSection; 