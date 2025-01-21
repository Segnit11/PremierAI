import { Team, Match } from '../types';

export const mockTeams: Team[] = [
  {
    id: 1,
    name: 'Liverpool',
    position: 1,
    played: 27,
    won: 19,
    drawn: 6,
    lost: 2,
    goalsFor: 63,
    goalsAgainst: 25,
    goalDifference: 38,
    points: 63,
    form: ['W', 'W', 'W', 'D', 'W']
  },
  {
    id: 2,
    name: 'Manchester City',
    position: 2,
    played: 27,
    won: 18,
    drawn: 6,
    lost: 3,
    goalsFor: 62,
    goalsAgainst: 26,
    goalDifference: 36,
    points: 60,
    form: ['W', 'W', 'W', 'W', 'D']
  },
  {
    id: 3,
    name: 'Arsenal',
    position: 3,
    played: 27,
    won: 18,
    drawn: 4,
    lost: 5,
    goalsFor: 65,
    goalsAgainst: 24,
    goalDifference: 41,
    points: 58,
    form: ['W', 'W', 'W', 'L', 'W']
  }
];

export const mockMatches: Match[] = [
  {
    id: 1,
    homeTeam: 'Liverpool',
    awayTeam: 'Manchester City',
    homeScore: 2,
    awayScore: 1,
    status: 'LIVE',
    kickoff: '2024-03-10T16:30:00Z',
    matchday: 28
  },
  {
    id: 2,
    homeTeam: 'Arsenal',
    awayTeam: 'Brentford',
    homeScore: 0,
    awayScore: 0,
    status: 'SCHEDULED',
    kickoff: '2024-03-17T14:00:00Z',
    matchday: 29
  }
];