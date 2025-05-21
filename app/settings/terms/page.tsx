"use client"
import React from 'react';
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import { Card, CardContent } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <div className="h-full flex flex-col">
      <ProfileNavbar title="Terms of Use" />
      
      <div className="flex-1 w-full bg-white md:rounded-2xl mt-0 md:mt-8 overflow-hidden">
        <div className="max-w-4xl mx-auto p-6">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="prose prose-blue max-w-none">
                <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
                
                <div className="text-sm text-gray-500 mb-8">
                  Last updated: March 15, 2024
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By accessing and using CRWD, you agree to be bound by these Terms of Use and all applicable laws and regulations. 
                    If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                  <p className="text-gray-600 mb-4">
                    Permission is granted to temporarily use CRWD for personal, non-commercial purposes. This is the grant of a license, 
                    not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software contained on CRWD</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                  <p className="text-gray-600 mb-4">
                    To access certain features of CRWD, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account and password</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
                  <p className="text-gray-600 mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Use CRWD for any illegal purpose</li>
                    <li>Harass, abuse, or harm another person</li>
                    <li>Post or transmit unauthorized commercial communications</li>
                    <li>Collect users' information without their consent</li>
                    <li>Interfere with the proper functioning of CRWD</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Content and Intellectual Property</h2>
                  <p className="text-gray-600 mb-4">
                    All content on CRWD, including text, graphics, logos, and software, is the property of CRWD or its content suppliers 
                    and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from 
                    this content without express permission.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Donations and Payments</h2>
                  <p className="text-gray-600 mb-4">
                    When making donations through CRWD:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>You must provide accurate payment information</li>
                    <li>All donations are final and non-refundable</li>
                    <li>We reserve the right to refuse or cancel any donation</li>
                    <li>You are responsible for any applicable taxes</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
                  <p className="text-gray-600 mb-4">
                    CRWD is provided "as is" without any warranties, expressed or implied. We do not warrant that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>The platform will be uninterrupted or error-free</li>
                    <li>Defects will be corrected</li>
                    <li>The platform is free of viruses or other harmful components</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    In no event shall CRWD or its suppliers be liable for any damages arising out of the use or inability to use the 
                    platform, even if we have been notified of the possibility of such damages.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the 
                    new Terms of Use on this page. Your continued use of CRWD after such modifications constitutes your acceptance of 
                    the new terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                  <p className="text-gray-600 mb-4">
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CRWD operates, 
                    without regard to its conflict of law provisions.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Use, please contact us at:
                  </p>
                  <p className="text-gray-600">
                    Email: legal@crwd.com<br />
                    Address: 123 CRWD Street, City, Country
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default TermsPage; 