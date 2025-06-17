"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define categories and their interests
const CATEGORIES = [
  {
    label: "Technology & Science",
    interests: [
      "Technology", "Science", "Programming", "AI", "Gadgets", "Space", "Engineering"
    ]
  },
  {
    label: "Arts & Entertainment",
    interests: [
      "Music", "Movies", "Books", "Art", "Photography", "Theater", "TV Shows"
    ]
  },
//   {
//     label: "Lifestyle & Wellness",
//     interests: [
//       "Travel", "Food", "Fashion", "Fitness", "Health", "DIY", "Home Decor"
//     ]
//   },
//   {
//     label: "Sports & Outdoors",
//     interests: [
//       "Sports", "Hiking", "Cycling", "Running", "Camping", "Fishing", "Yoga"
//     ]
//   },
//   {
//     label: "Society & Learning",
//     interests: [
//       "News", "Finance", "Education", "History", "Politics", "Philosophy", "Languages"
//     ]
//   }
];

const InterestsPage = () => {
    const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-2">
      <div className="w-full max-w-md bg-background rounded-2xl shadow-lg p-8">
        <div className="mb-6 text-center">
            <Image src="/logo3.png" width={80} height={80} alt="CRWD Logo" className="drop-shadow-sm mx-auto mb-3" />
          <h1 className="text-2xl font-bold mb-2">What are you passionate about?</h1>
          <p className="text-muted-foreground text-sm">
            Select a few interests to help us personalize your experience.
          </p>
        </div>
        <div className="space-y-6 mb-8">
          {CATEGORIES.map((category) => (
            <div key={category.label}>
              <div className="font-semibold text-base mb-2">{category.label}</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`rounded-full border px-3 py-2 text-sm font-medium transition
                      ${
                        selected.includes(interest)
                          ? "bg-black text-white border-black"
                          : "bg-background text-foreground border-border hover:bg-muted"
                      }
                    `}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button
          className="w-full bg-black text-white hover:bg-black/80 p-5"
          disabled={selected.length === 0}
          onClick={handleContinue} // Implement navigation or API call here
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default InterestsPage;