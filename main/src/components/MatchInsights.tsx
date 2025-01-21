import React from 'react';

export const MatchInsights: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Match Insights</h2>
      <div className="space-y-4">
        {/* AI-generated insights will go here */}
        <div className="p-4 border rounded-lg">
          <p className="text-gray-600">Loading match insights...</p>
        </div>
      </div>
    </div>
  );
};