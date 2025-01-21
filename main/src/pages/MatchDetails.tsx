import React from 'react';
import { useParams } from 'react-router-dom';
import { useTableStore } from '../store/tableStore';

export const MatchDetails: React.FC = () => {
  const { matchId } = useParams();
  const { matches } = useTableStore();
  const match = matches.find((m) => m.id === Number(matchId));

  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {match.homeTeam} vs {match.awayTeam}
          </h1>
          {match.status === 'LIVE' && (
            <div className="text-4xl font-bold mb-4">
              {match.homeScore} - {match.awayScore}
            </div>
          )}
        </div>
        
        <div className="grid gap-8 mt-8 lg:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Head to Head</h2>
            {/* Head to head stats will go here */}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Form</h2>
            {/* Recent form will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};