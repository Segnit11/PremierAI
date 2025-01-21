import React from 'react';
import { useTableStore } from '../store/tableStore';
import { BarChart2, Goal, Trophy, Timer } from 'lucide-react';

export const Stats: React.FC = () => {
  const { teams, matches } = useTableStore();

  // Calculate top scorer
  const topScorer = {
    name: "Erling Haaland",
    goals: 18,
    team: "Manchester City"
  };

  // Calculate most clean sheets
  const mostCleanSheets = {
    name: "Ederson",
    cleanSheets: 11,
    team: "Manchester City"
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Statistics</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Top Scorer */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Top Scorer</h2>
            <Goal className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{topScorer.name}</p>
            <p className="text-gray-600">{topScorer.team}</p>
            <p className="mt-2 text-blue-600 font-semibold">{topScorer.goals} goals</p>
          </div>
        </div>

        {/* Most Clean Sheets */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Clean Sheets</h2>
            <Trophy className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{mostCleanSheets.name}</p>
            <p className="text-gray-600">{mostCleanSheets.team}</p>
            <p className="mt-2 text-blue-600 font-semibold">{mostCleanSheets.cleanSheets} clean sheets</p>
          </div>
        </div>

        {/* Average Goals Per Game */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Avg. Goals/Game</h2>
            <BarChart2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">2.8</p>
            <p className="text-gray-600">Season 2023/24</p>
            <p className="mt-2 text-blue-600 font-semibold">Total Games: {matches.length}</p>
          </div>
        </div>

        {/* Average Match Time */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Avg. Match Time</h2>
            <Timer className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">96.5 min</p>
            <p className="text-gray-600">Season 2023/24</p>
            <p className="mt-2 text-blue-600 font-semibold">Including Added Time</p>
          </div>
        </div>
      </div>

      {/* Additional Stats Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Team Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Team Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Most Goals Scored</span>
              <span className="font-semibold">Manchester City (52)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Fewest Goals Conceded</span>
              <span className="font-semibold">Liverpool (20)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Most Clean Sheets</span>
              <span className="font-semibold">Arsenal (12)</span>
            </div>
          </div>
        </div>

        {/* Form Guide */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Form Guide</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Best Form</span>
              <span className="font-semibold">Liverpool (WWWDW)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Worst Form</span>
              <span className="font-semibold">Sheffield United (LLLLD)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Longest Win Streak</span>
              <span className="font-semibold">Arsenal (6 games)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};