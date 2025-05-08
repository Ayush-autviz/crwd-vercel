import React from 'react';
import Link from 'next/link';

interface SettingsGroupProps {
  heading: string;
  items: { label: string; href?: string }[];
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({ heading, items }) => (
  <div className="">
    <div className="flex items-center px-16 py-5 text-sm text-gray-500 font-semibold bg-white border-b border-gray-200">
      {heading}
    </div>
    {/* Mobile: vertical list, Desktop: grid of cards */}
    <div className="bg-white md:grid md:grid-cols-2 md:gap-6 md:px-8 md:py-6">
      {items.map((item, idx) =>
        item.href ? (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between px-32 py-5 md:px-6  text-sm font-medium text-gray-800 hover:bg-gray-50 transition border-b border-gray-200 md:border md:rounded-xl md:shadow-sm md:justify-center md:text-base md:font-semibold md:bg-white md:hover:bg-blue-50 md:border-gray-200 md:shadow-md md:py-8 md:px-0 md:mb-0 md:mt-0 md:mx-0 md:my-0 md:gap-0 md:transition-all md:duration-200 md:cursor-pointer md:border-b-0 md:border-t-0 md:border-l-0 md:border-r-0 md:mb-0"
          >
            <span className="md:text-center w-full">{item.label}</span>
          </Link>
        ) : (
          <div
            key={item.label}
            className="flex items-center px-32 py-3 text-sm font-medium  md:px-6 text-gray-800 bg-white select-none border-b border-gray-200 md:border md:rounded-xl md:shadow-sm md:justify-center md:text-base md:font-semibold md:bg-white md:py-8 md:px-0 md:mb-0 md:mt-0 md:mx-0 md:my-0 md:gap-0 md:border-b-0 md:border-t-0 md:border-l-0 md:border-r-0"
          >
            <span className="md:text-center w-full">{item.label}</span>
          </div>
        )
      )}
    </div>
  </div>
);

export default SettingsGroup; 