import React from 'react';
import CondoCard from '../molecules/CondoCard';

function CondoGrid({ condos, onSelectCondo, onReleaseCondo }) {
  return (
    <div className="condo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', padding: '2rem' }}>
      {condos.map((condo) => (
        <CondoCard 
          key={condo.id} 
          condo={condo} 
          onSelectCondo={onSelectCondo} 
          onReleaseCondo={onReleaseCondo} // 👈 Pass it down here
        />
      ))}
    </div>
  );
}

export default CondoGrid;