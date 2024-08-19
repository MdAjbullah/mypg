// import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;