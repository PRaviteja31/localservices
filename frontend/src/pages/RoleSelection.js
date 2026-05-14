import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleSelection.css'; // Path to the CSS folder

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    // Navigate to signup with the role as a URL parameter
    navigate(`/signup?role=${role}`);
  };

  return (
    <div className="role-container">
      <div className="role-header">
        <h1>Welcome to <span>LocalSetu</span> 👋</h1>
        <p>How do you want to use the app?</p>
      </div>

      <div className="role-card customer" onClick={() => handleSelect('customer')}>
        <div className="icon-box">📱</div>
        <div className="role-content">
          <h2>I need a service</h2>
          <p>Book trusted local services near you.</p>
        </div>
      </div>

      <div className="role-card provider" onClick={() => handleSelect('provider')}>
        <div className="icon-box">🛠️</div>
        <div className="role-content">
          <h2>I want to work</h2>
          <p>Find jobs and earn in your area.</p>
        </div>
      </div>

      <div className="role-footer">
        LocalSetu © 2026 – Hyperlocal Services Platform
      </div>
    </div>
  );
};

export default RoleSelection;