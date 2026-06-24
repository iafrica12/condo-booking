import React, { useState, useEffect } from 'react';
import CondoGrid from './components/organisms/CondoGrid';
import BookingModal from './components/organisms/BookingModal';
import { db } from './firebase'; 
import { collection, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore';
import './index.css';

function App() {
  const [condos, setCondos] = useState([]);
  const [selectedCondo, setSelectedCondo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch condo data automatically from Firestore when the application loads
  useEffect(() => {
    const fetchCondos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "condos"));
        const condoData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCondos(condoData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents from Firestore: ", error);
        setLoading(false);
      }
    };

    fetchCondos();
  }, []);

  const handleOpenModal = (condo) => {
    setSelectedCondo(condo);
  };

  const handleCloseModal = () => {
    setSelectedCondo(null);
  };

  // Action to book a condo
  const handleConfirmBooking = async (condoId, clientData) => {
    try {
      // 1. Log the entry into the "reservations" collection
      await addDoc(collection(db, "reservations"), {
        condoId: condoId,
        condoName: selectedCondo.name,
        guestName: clientData.name,
        guestEmail: clientData.email,
        checkIn: clientData.checkIn,
        checkOut: clientData.checkOut,
        timestamp: new Date()
      });

      // 2. Change the status field inside the chosen condo document to "Booked"
      const condoRef = doc(db, "condos", condoId);
      await updateDoc(condoRef, { status: "Booked" });

      // 3. Update local state UI instantly 
      setCondos(prevCondos =>
        prevCondos.map(condo =>
          condo.id === condoId ? { ...condo, status: 'Booked' } : condo
        )
      );

      alert(`Inquiry successfully registered! ${selectedCondo.name} has been secured.`);
      handleCloseModal();
    } catch (error) {
      console.error("Transaction deployment failed: ", error);
      alert("Reservation failed to sync.");
    }
  };

  // NEW: Action to clear a booking and make it available again
  const handleReleaseBooking = async (condoId, condoName) => {
    try {
      // 1. Update the cloud database document status back to "Available"
      const condoRef = doc(db, "condos", condoId);
      await updateDoc(condoRef, { status: "Available" });

      // 2. Instantly update local UI state
      setCondos(prevCondos =>
        prevCondos.map(condo =>
          condo.id === condoId ? { ...condo, status: 'Available' } : condo
        )
      );

      alert(`"${condoName}" is now available for rent again!`);
    } catch (error) {
      console.error("Failed to release listing:", error);
      alert("Failed to reset listing status.");
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', color: '#737880', letterSpacing: '0.1em' }}>
        LOADING ESTATE INVENTORY...
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LuxStay Condo Rentals</h1>
        <p>Find your next premium home away from home</p>
      </header>
      
      <main>
        {condos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#737880' }}>No estate listings found in database.</p>
        ) : (
          /* We pass the new handleReleaseBooking function down into your grid template layout */
          <CondoGrid 
            condos={condos} 
            onSelectCondo={handleOpenModal} 
            onReleaseCondo={handleReleaseBooking} 
          />
        )}
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