import React from 'react';
import { useTableStore } from '../store/tableStore';
import { format } from 'date-fns';

export const NextWeekMatches: React.FC = () => {
  const { matches } = useTableStore();
  const upcomingMatches = matches.filter((match) => match.status === 'SCHEDULED');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Next Week's Matches</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {upcomingMatches.map((match) => (
          <div key={match.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{match.homeTeam} vs {match.awayTeam}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(match.kickoff), 'dd MMM yyyy - HH:mm')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};