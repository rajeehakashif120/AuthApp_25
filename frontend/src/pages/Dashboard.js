import React from 'react';

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the protected dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}