import React from 'react';
import CondoCard from '../molecules/CondoCard';

const CondoGrid = ({ condos, onSelectCondo }) => {
  return (
    <section className="condo-grid-container">
      <h2>Available Condo Units</h2>
      <div className="condo-grid">
        {condos.map((condo) => (
          <CondoCard 
            key={condo.id} 
            condo={condo} 
            onBookClick={() => onSelectCondo(condo)} 
          />
        ))}
      </div>
    </section>
  );
};

export default CondoGrid;