"use client"
import React from 'react';
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
  return (
    <div className="h-full flex flex-col">
      <ProfileNavbar title="Privacy Policy" />
      
      <div className="flex-1 w-full bg-white md:rounded-2xl mt-0 md:mt-8 overflow-hidden">
        <div className="max-w-4xl mx-auto p-6">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="prose prose-blue max-w-none">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    At CRWD, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Payment information</li>
                    <li>Profile information</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-2">2.2 Usage Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Provide and maintain our services</li>
                    <li>Process your transactions</li>
                    <li>Send you important updates</li>
                    <li>Improve our platform</li>
                    <li>Protect against fraud</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                  <p className="text-gray-600 mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Service providers</li>
                    <li>Payment processors</li>
                    <li>Legal authorities when required</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-gray-600">
                    Email: privacy@crwd.com<br />
                    Address: 123 Privacy Street, Security City, SC 12345
                  </p>
                </section>

                <div className="text-sm text-gray-500 mt-8">
                  Last updated: March 15, 2024
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

export default PrivacyPolicyPage; 