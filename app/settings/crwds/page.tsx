"use client"
import React, { useState } from 'react';
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, Search, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Mock data for CRWDs
const mockCrwds = [
  {
    id: 1,
    name: "Community Garden",
    members: 45,
    description: "A community garden initiative to promote sustainable living",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Local Food Bank",
    members: 120,
    description: "Supporting local communities through food donations",
    createdAt: "2024-02-01"
  },
  {
    id: 3,
    name: "Youth Education",
    members: 78,
    description: "Providing educational resources to underprivileged youth",
    createdAt: "2024-02-15"
  }
];

const CrwdsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCrwd, setNewCrwd] = useState({
    name: "",
    description: ""
  });
  const router = useRouter();

  const filteredCrwds = mockCrwds.filter(crwd =>
    crwd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crwd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateCrwd = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to create a new CRWD
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      toast.success("CRWD created successfully!");
      setShowCreateForm(false);
      setNewCrwd({ name: "", description: "" });
    } catch (error) {
      toast.error("Failed to create CRWD. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ProfileNavbar title="Your CRWDs" />
      
      <div className="flex-1 w-full bg-white md:rounded-2xl mt-0 md:mt-8 overflow-hidden">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search CRWDs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New CRWD
            </Button>
          </div>

          {showCreateForm && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Create New CRWD</CardTitle>
                <CardDescription>
                  Fill in the details to create a new CRWD
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateCrwd} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">CRWD Name</Label>
                    <Input
                      id="name"
                      value={newCrwd.name}
                      onChange={(e) => setNewCrwd(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter CRWD name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      value={newCrwd.description}
                      onChange={(e) => setNewCrwd(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Enter CRWD description"
                      required
                    />
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
                          Creating...
                        </>
                      ) : (
                        'Create CRWD'
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCreateForm(false)}
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCrwds.map((crwd) => (
              <Card key={crwd.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{crwd.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {crwd.members} members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{crwd.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Created on {new Date(crwd.createdAt).toLocaleDateString()}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => router.push(`/crwd/${crwd.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCrwds.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No CRWDs found</p>
            </div>
          )}
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default CrwdsPage; 