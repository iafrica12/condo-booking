import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const BookingModal = ({ condo, onClose, onSubmitBooking }) => {
  const [formData, setFormData] = useState({ name: '', email: '', checkIn: '', checkOut: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitBooking(condo.id, formData);
  };

  if (!condo) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header-luxury">
          <h2>Reservation Inquiry</h2>
          <p className="modal-subtitle">{condo.name} — <strong>₱{condo.price}/night</strong></p>
        </div>
        
        <form onSubmit={handleSubmit} className="booking-form-luxury">
          <FormField label="GUEST FULL NAME" name="name" placeholder="e.g. Maria Santos" value={formData.name} onChange={handleChange} required />
          <FormField label="EMAIL ADDRESS" name="email" type="email" placeholder="maria@luxury.ph" value={formData.email} onChange={handleChange} required />
          
          <div className="form-row-dates">
            <FormField label="CHECK-IN" name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} required />
            <FormField label="CHECK-OUT" name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} min={formData.checkIn} required />
          </div>
          
          <div className="modal-actions-luxury">
            <button type="button" className="btn-luxury-secondary" onClick={onClose}>Dismiss</button>
            <button type="submit" className="btn-luxury-primary">Submit Private Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;