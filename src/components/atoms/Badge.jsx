import React from 'react';

const Badge = ({ status }) => {
  const isAvailable = status === 'Available';
  return (
    <span className={`badge ${isAvailable ? 'badge-available' : 'badge-booked'}`}>
      {status}
    </span>
  );
};

export default Badge;