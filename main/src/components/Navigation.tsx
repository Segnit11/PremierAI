import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trophy, Calendar, Table, BarChart2, Bell } from 'lucide-react';
import { Notifications } from './Notifications';
import { cn } from '../utils/cn';

export const Navigation: React.FC = () => {
  const navItems = [
    { to: '/', icon: Trophy, label: 'Overview' },
    { to: '/matches', icon: Calendar, label: 'Matches' },
    { to: '/standings', icon: Table, label: 'Standings' },
    { to: '/stats', icon: BarChart2, label: 'Stats' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PremierAI</span>
            </div>
            <div className="hidden md:flex space-x-4">
              {navItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center px-3 py-2 rounded-md text-sm font-medium',
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )
                  }
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <Notifications />
        </div>
      </div>
    </nav>
  );
};