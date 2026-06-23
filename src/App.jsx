import React, { useState } from 'react';
import CondoGrid from './components/organisms/CondoGrid';
import BookingModal from './components/organisms/BookingModal';
import './index.css';

const INITIAL_CONDOS = [
  { id: 1, name: "The Aurelia Residence Penthouse", location: "Bonifacio Global City, Taguig", price: "24,500", status: "Available", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { id: 2, name: "Shang Residences Studio Oasis", location: "Mandaluyong City", price: "8,200", status: "Available", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { id: 3, name: "Proscenium Signature Loft", location: "Rockwell Center, Makati", price: "14,000", status: "Booked", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" },
  { id: 4, name: "The Ritz-Carlton Estate", location: "Enterprise Center, Makati", price: "45,000", status: "Available", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" }
];

function App() {
  const [condos, setCondos] = useState(INITIAL_CONDOS);
  const [selectedCondo, setSelectedCondo] = useState(null);

  const handleOpenModal = (condo) => {
    setSelectedCondo(condo);
  };

  const handleCloseModal = () => {
    setSelectedCondo(null);
  };

  const handleConfirmBooking = (condoId, clientData) => {
    setCondos(prevCondos => 
      prevCondos.map(condo => 
        condo.id === condoId ? { ...condo, status: 'Booked' } : condo
      )
    );
    
    alert(`Success! ${selectedCondo.name} has been reserved for ${clientData.name}.`);
    handleCloseModal();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LuxStay Condo Rentals</h1>
        <p>Find your next premium home away from home</p>
      </header>
      
      <main>
        <CondoGrid condos={condos} onSelectCondo={handleOpenModal} />
      </main>

      <BookingModal 
        condo={selectedCondo} 
        onClose={handleCloseModal} 
        onSubmitBooking={handleConfirmBooking} 
      />
    </div>
  );
}

export default App;