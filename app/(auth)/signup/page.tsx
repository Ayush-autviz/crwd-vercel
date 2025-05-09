import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SignupForm: React.FC = () => (
  <div className=" min-h-screen flex flex-col flex-1 justify-center md:justify-start items-center md:items-start ">
    {/* Header */}
    <div className="w-full h-16 flex  md:flex-none  items-center md:items-start bg-gray-200 px-4 py-3  border-b sticky top-0 z-10 md:hidden">
        <Link href="/">
      <button className="text-gray-700">
        <ArrowLeft size={22} />
      </button>
      </Link>
    </div>
    {/* Form */}
    <div className="h-full w-full flex-1 flex flex-col justify-start items-center pt-8 ">
      <div className="w-full max-w-md px-6 flex flex-col gap-8">
        <div className="text-base font-medium mb-2">You’re in! One last step:</div>
        <form className="flex flex-col gap-5">
          <input type="email" placeholder="Email" className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400" />
          <input type="password" placeholder="Password" className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400" />
          <input type="password" placeholder="Confirm Password" className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400" />
          <button type="submit" className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold text-base mt-2 shadow-lg hover:bg-blue-700 transition">Save</button>
        </form>
      </div>
    </div>
  </div>
);

export default SignupForm;
