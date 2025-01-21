import React from 'react';
import { MatchReports } from '../components/MatchReports';
import { MatchInsights } from '../components/MatchInsights';
import { NextWeekMatches } from '../components/NextWeekMatches';

export const Matches: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <MatchReports />
        <MatchInsights />
      </div>
      <NextWeekMatches />
    </div>
  );
};