import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Overview } from './pages/Overview';
import { Matches } from './pages/Matches';
import { Standings } from './pages/Standings';
import { Stats } from './pages/Stats';
import { MatchDetails } from './pages/MatchDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/matches/:matchId" element={<MatchDetails />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;