import React from 'react';
import { LeagueTable } from '../components/LeagueTable';

export const Standings: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">League Standings</h1>
      <LeagueTable />
    </div>
  );
};