"use client";

// PaymentSection.tsx
// New component to handle Stripe card payment and Apple Pay (Payment Request API) within the checkout flow.

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

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
    <div className="px-8 py-8 bg-white  space-y-8">
      {/* Apple Pay / Google Pay mock button */}
      <div className="space-y-3">
        <Button
          className="w-full h-12 bg-black hover:bg-black/90 rounded-lg flex items-center justify-center gap-3"
        >
          <Image
            src="/apple-logo.svg"
            alt="Apple Pay"
            width={18}
            height={18}
            className=""
          />
          <span className="text-lg font-semibold text-white">Pay</span>
        </Button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          Or pay with card
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Card form */}
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="card-number">Card Number</Label>
          <Input
            id="card-number"
            placeholder="1234 5678 9012 3456"
            value={card.number}
            onChange={(e) => handleChange("number", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="card-name">Name on Card</Label>
          <Input
            id="card-name"
            placeholder="John Doe"
            value={card.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="card-expiry">Expiry Date</Label>
            <Input
              id="card-expiry"
              placeholder="MM/YY"
              value={card.expiry}
              onChange={(e) => handleChange("expiry", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-cvc">CVC</Label>
            <Input
              id="card-cvc"
              placeholder="123"
              value={card.cvc}
              onChange={(e) => handleChange("cvc", e.target.value)}
            />
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-black font-medium h-12">
          Donate ${amount}
        </Button>
      </form>
    </div>
  );
};

export default PaymentSection; 