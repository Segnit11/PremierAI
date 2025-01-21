import { create } from 'zustand';
import type { Team, Match, Notification } from '../types';

interface TableState {
  teams: Team[];
  matches: Match[];
  notifications: Notification[];
  loading: boolean;
  error: string | null;
  setTeams: (teams: Team[]) => void;
  updateMatch: (match: Match) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (id: string) => void;
}

export const useTableStore = create<TableState>((set) => ({
  teams: [],
  matches: [],
  notifications: [],
  loading: false,
  error: null,
  setTeams: (teams) => set({ teams }),
  updateMatch: (updatedMatch) =>
    set((state) => ({
      matches: state.matches.map((match) =>
        match.id === updatedMatch.id ? updatedMatch : match
      ),
    })),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),
  markNotificationAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
}));