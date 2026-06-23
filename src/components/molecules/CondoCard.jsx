import React from 'react';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';

const CondoCard = ({ condo, onBookClick }) => {
  const { name, price, status, image, location } = condo;
  
  return (
    <div className="condo-card">
      <div className="image-wrapper">
        <img src={image} alt={name} className="condo-image" />
      </div>
      <div className="condo-info">
        <div className="condo-header">
          <h3>{name}</h3>
          <Badge status={status} />
        </div>
        <p className="condo-location">📍 {location}</p>
        <p className="condo-price"><strong>₱{price}</strong> / night</p>
        
        <Button 
          variant={status === 'Available' ? 'primary' : 'disabled'} 
          onClick={onBookClick}
          disabled={status !== 'Available'}
        >
          {status === 'Available' ? 'Request Reservation' : 'Fully Booked'}
        </Button>
      </div>
    </div>
  );
};

export default CondoCard;