"use client"
import React, { useState } from 'react';
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, CreditCard, Trash2 } from "lucide-react";
import { toast } from "sonner";
import BackButton from "@/components/ui/BackButton";

// Mock data for payment methods
const mockPaymentMethods = [
  {
    id: 1,
    type: "credit_card",
    last4: "4242",
    brand: "Visa",
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true
  },
  {
    id: 2,
    type: "credit_card",
    last4: "5555",
    brand: "Mastercard",
    expiryMonth: 8,
    expiryYear: 2026,
    isDefault: false
  }
];

const PaymentMethodsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCard, setNewCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: ""
  });

  const handleAddCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to add a new card
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call

      toast.success("Payment method added successfully!");
      setShowAddForm(false);
      setNewCard({ number: "", name: "", expiry: "", cvc: "" });
    } catch (error) {
      toast.error("Failed to add payment method. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCard = async (id: number) => {
    setIsLoading(true);

    try {
      // Here you would typically make an API call to delete the card
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call

      toast.success("Payment method removed successfully!");
    } catch (error) {
      toast.error("Failed to remove payment method. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetDefault = async (id: number) => {
    setIsLoading(true);

    try {
      // Here you would typically make an API call to set the card as default
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call

      toast.success("Default payment method updated!");
    } catch (error) {
      toast.error("Failed to update default payment method. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ProfileNavbar title="Payment Methods" />

      <div className="flex-1 w-full bg-white md:rounded-2xl mt-0 md:mt-8 overflow-hidden">
        <div className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <BackButton variant="outlined" />
        </div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Payment Methods</h2>
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add New Payment Method</CardTitle>
                <CardDescription>
                  Enter your card details securely
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddCard} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      value={newCard.number}
                      onChange={(e) => setNewCard(prev => ({ ...prev, number: e.target.value }))}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Name on Card</Label>
                    <Input
                      id="card-name"
                      value={newCard.name}
                      onChange={(e) => setNewCard(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-expiry">Expiry Date</Label>
                      <Input
                        id="card-expiry"
                        value={newCard.expiry}
                        onChange={(e) => setNewCard(prev => ({ ...prev, expiry: e.target.value }))}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-cvc">CVC</Label>
                      <Input
                        id="card-cvc"
                        value={newCard.cvc}
                        onChange={(e) => setNewCard(prev => ({ ...prev, cvc: e.target.value }))}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Adding...
                        </>
                      ) : (
                        'Add Card'
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            {mockPaymentMethods.map((method) => (
              <Card key={method.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium">
                          {method.brand} ending in {method.last4}
                        </p>
                        <p className="text-sm text-gray-500">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!method.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSetDefault(method.id)}
                          disabled={isLoading}
                        >
                          Set as Default
                        </Button>
                      )}
                      {method.isDefault && (
                        <span className="text-sm text-green-600 font-medium">Default</span>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteCard(method.id)}
                        disabled={isLoading || method.isDefault}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mockPaymentMethods.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No payment methods added yet</p>
            </div>
          )}
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default PaymentMethodsPage;