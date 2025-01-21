import React from 'react';
import { useTableStore } from '../store/tableStore';
import { Link } from 'react-router-dom';

export const MatchReports: React.FC = () => {
  const { matches } = useTableStore();
  const finishedMatches = matches.filter((match) => match.status === 'FINISHED');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Match Reports</h2>
      <div className="space-y-4">
        {finishedMatches.map((match) => (
          <Link
            key={match.id}
            to={`/matches/${match.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{match.homeTeam} vs {match.awayTeam}</p>
                <p className="text-sm text-gray-500">Final Score: {match.homeScore} - {match.awayScore}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};