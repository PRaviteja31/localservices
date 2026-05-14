import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        {/* Placeholder for the next page */}
        <Route path="/signup" element={<div style={{padding: '50px', textAlign: 'center'}}>Signup Page Ready</div>} />
      </Routes>
    </Router>
  );
}

export default App;