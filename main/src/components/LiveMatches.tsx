import React from 'react';
import { useTableStore } from '../store/tableStore';
import { format } from 'date-fns';

export const LiveMatches: React.FC = () => {
  const { matches } = useTableStore();

  const liveMatches = matches.filter((match) => match.status === 'LIVE');
  const upcomingMatches = matches.filter((match) => match.status === 'SCHEDULED');

  return (
    <div className="space-y-6">
      {liveMatches.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Live Matches</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liveMatches.map((match) => (
              <div key={match.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-semibold">{match.homeTeam}</p>
                    <p className="font-semibold">{match.awayTeam}</p>
                  </div>
                  <div className="text-2xl font-bold">
                    <p>{match.homeScore}</p>
                    <p>{match.awayScore}</p>
                  </div>
                </div>
                <div className="mt-2 text-sm text-red-500 font-semibold">LIVE</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {upcomingMatches.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Upcoming Matches</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingMatches.slice(0, 3).map((match) => (
              <div key={match.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-semibold">{match.homeTeam}</p>
                    <p className="font-semibold">{match.awayTeam}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {format(new Date(match.kickoff), 'HH:mm')}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {format(new Date(match.kickoff), 'dd MMM yyyy')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};