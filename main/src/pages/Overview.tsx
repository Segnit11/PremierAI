import React from 'react';
import { LiveMatches } from '../components/LiveMatches';
import { LeagueTable } from '../components/LeagueTable';
import { AiChatBot } from '../components/AiChatBot';
import { NewsSection } from '../components/NewsSection';

export const Overview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <LiveMatches />
        <LeagueTable />
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <AiChatBot />
        <NewsSection />
      </div>
    </div>
  );
};