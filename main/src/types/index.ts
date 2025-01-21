export interface Team {
  id: number;
  name: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
}

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'SCHEDULED' | 'LIVE' | 'FINISHED';
  kickoff: string;
  matchday: number;
}

export interface Notification {
  id: string;
  type: 'GOAL' | 'MATCH_START' | 'MATCH_END' | 'POSITION_CHANGE';
  message: string;
  timestamp: Date;
  read: boolean;
}