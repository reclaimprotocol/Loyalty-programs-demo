import React from 'react';
import { Plane, Building2, CreditCard, Trophy } from 'lucide-react';

export const OgImage = (): JSX.Element => {
  return (
    // OG Image dimensions: 1200x630
    <div className="w-[1200px] h-[630px] bg-[#f6f9fc] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(79,70,229,0.12)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_-10%_-10%,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_100%)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* Logo */}
        <div className="mb-8">
          <img src="/vector.svg" alt="Reclaim Logo" className="h-12 mx-auto" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Connect All Your Rewards Programs
          <br />
          in One Place
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12">
          Manage your airline miles, hotel points, credit card rewards, and more
          <br />
          with Reclaim's unified loyalty platform
        </p>

        {/* Program Icons */}
        <div className="flex items-center justify-center gap-8">
          {[Plane, Building2, CreditCard, Trophy].map((Icon, index) => (
            <div
              key={index}
              className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center
                border border-gray-100"
            >
              <Icon className="w-8 h-8 text-indigo-600" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="text-lg font-semibold text-indigo-600">8+ Categories</span>
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="text-lg font-semibold text-indigo-600">50+ Programs</span>
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="text-lg font-semibold text-indigo-600">Instant Connect</span>
          </div>
        </div>
      </div>

      {/* URL at bottom */}
      <div className="absolute bottom-8 text-gray-500 text-lg">loyalty.reclaimprotocol.org</div>
    </div>
  );
};
