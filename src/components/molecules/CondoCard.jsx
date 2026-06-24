import React from 'react';
import Button from '../atoms/Button';

function CondoCard({ condo, onSelectCondo, onReleaseCondo }) {
  const { id, name, location, price, status, image } = condo;
  const isBooked = status === 'Booked';

  return (
    <div className="condo-card" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem' }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: isBooked ? '#d9534f' : '#5cb85c', fontWeight: 'bold' }}>
          • {status}
        </span>
        <h3 style={{ margin: '0.5rem 0 0.25rem 0', fontFamily: 'serif', fontSize: '1.4rem' }}>{name}</h3>
        <p style={{ color: '#737880', fontSize: '0.9rem', margin: '0 0 1rem 0' }}>{location}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '0 0 1.5rem 0' }}>₱{price} <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#737880' }}>/ night</span></p>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {/* Main Booking Button */}
          <Button 
            onClick={() => onSelectCondo(condo)} 
            disabled={isBooked}
            style={{ flex: 1, backgroundColor: isBooked ? '#ccc' : '#1a1a1a', color: '#fff' }}
          >
            {isBooked ? 'Unavailable' : 'Request Reservation'}
          </Button>

          {/* NEW: Clean admin option to clear the reservation instantly */}
          {isBooked && (
            <Button 
              onClick={() => onReleaseCondo(id, name)} 
              style={{ backgroundColor: '#fff', color: '#d9534f', border: '1px solid #d9534f' }}
            >
              Release
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CondoCard;