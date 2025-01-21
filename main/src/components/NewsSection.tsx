import React from 'react';

export const NewsSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4">
        {/* News items will be mapped here */}
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Loading news...</h3>
          <p className="text-gray-600 text-sm">Stay tuned for the latest updates!</p>
        </div>
      </div>
    </div>
  );
};