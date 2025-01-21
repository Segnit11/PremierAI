import React from 'react';
import { useTableStore } from '../store/tableStore';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export const LeagueTable: React.FC = () => {
  const { teams } = useTableStore();

  const getFormIcon = (result: string) => {
    switch (result) {
      case 'W':
        return <ArrowUpRight className="w-4 h-4 text-green-500" />;
      case 'L':
        return <ArrowDownRight className="w-4 h-4 text-red-500" />;
      case 'D':
        return <Minus className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">MP</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">D</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">GF</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">GA</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">GD</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pts</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teams.map((team) => (
            <tr key={team.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.position}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.played}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.won}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.drawn}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.lost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalsFor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalsAgainst}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalDifference}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-900">{team.points}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                <div className="flex items-center justify-center space-x-1">
                  {team.form.map((result, index) => (
                    <span key={index}>{getFormIcon(result)}</span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};