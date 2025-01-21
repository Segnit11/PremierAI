import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { mockTeams, mockMatches } from './utils/mockData';
import { useTableStore } from './store/tableStore';

// Initialize store with mock data
useTableStore.getState().setTeams(mockTeams);
useTableStore.getState().matches = mockMatches;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);