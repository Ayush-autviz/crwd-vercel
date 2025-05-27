"use client"
import React from 'react';
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";

const AboutPage = () => {
  return (
    <div className="h-full flex flex-col">
      <ProfileNavbar title="About" />

      <div className="flex-1 w-full bg-white md:rounded-2xl mt-0 md:mt-8 overflow-hidden">
        <div className="max-w-4xl mx-auto p-6">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
            <div className="mb-6">
              <BackButton variant="outlined" />
            </div>
              <div className="prose prose-blue max-w-none">
                {/* Hero Section */}
                <div className="text-center mb-12">
                  {/* <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src="/logo3.png"
                      alt="CRWD Logo"
                      width={128}
                      height={128}
                      className="object-contain"
                      priority
                    />
                  </div> */}
                  <h1 className="text-3xl font-bold mb-4">About CRWD</h1>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    CRWD is a platform dedicated to connecting people with causes they care about.
                    We believe in the power of community and collective action to create positive change.
                  </p>
                </div>

                {/* Mission Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-gray-600 mb-4">
                    To empower individuals and communities to make a difference by providing a platform
                    that facilitates meaningful connections, transparent donations, and impactful actions.
                  </p>
                </section>

                {/* Values Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">Transparency</h3>
                      <p className="text-gray-600">
                        We believe in complete transparency in all our operations and transactions.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">Community</h3>
                      <p className="text-gray-600">
                        Building strong, supportive communities is at the heart of everything we do.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">Impact</h3>
                      <p className="text-gray-600">
                        We measure our success by the positive impact we create in communities.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Team Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src="/post.jpg"
                          alt="Sarah Johnson"
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-medium mb-1">Sarah Johnson</h3>
                      <p className="text-gray-600 mb-2">Founder & CEO</p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src="/post2.jpg"
                          alt="Michael Chen"
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-medium mb-1">Michael Chen</h3>
                      <p className="text-gray-600 mb-2">CTO</p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src="/grocery.jpg"
                          alt="Emily Rodriguez"
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-medium mb-1">Emily Rodriguez</h3>
                      <p className="text-gray-600 mb-2">Community Manager</p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Globe className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="text-gray-600 mb-4">
                    Have questions or want to learn more about CRWD? We'd love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Contact Us
                    </Button>
                    <Button variant="outline">
                      Join Our Team
                    </Button>
                  </div>
                </section>

                {/* Version Info */}
                <div className="text-sm text-gray-500 mt-8">
                  Version 1.0.0 • Last updated: March 15, 2024
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default AboutPage;