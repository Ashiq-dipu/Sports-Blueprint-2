import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail } from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const ConsultationModal = ({ isOpen, onClose, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Consultation',
    preferredDate: '',
    timeSlot: 'Morning (9:00 AM - 12:00 PM)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
    showToast('Appointment request received! Coach will confirm within 2 hours.');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px', padding: '36px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-pill badge-volt" style={{ marginBottom: '12px' }}>
              Complimentary • Zero Obligation
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Schedule Facility Tour or Consultation
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Walk our 10,000 sq ft performance lab, meet head performance coaches, and receive a free baseline movement screening.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label>Booking Type</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {['Facility Tour', '1:1 Athlete Consultation'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      style={{
                        padding: '10px',
                        borderRadius: '6px',
                        border: formData.type === type ? '2px solid var(--accent-volt)' : '1px solid var(--border-card)',
                        background: formData.type === type ? 'rgba(212, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        color: formData.type === type ? 'var(--accent-volt)' : '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(404) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>
                <div>
                  <label>Preferred Window</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option>Morning (9:00 AM - 12:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening (5:30 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '12px', padding: '14px', width: '100%' }}
              >
                Confirm Booking Request
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(212, 255, 0, 0.15)',
              border: '2px solid var(--accent-volt)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 0 25px var(--accent-volt-glow)'
            }}>
              <CheckCircle2 size={34} color="var(--accent-volt)" />
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Appointment Reserved!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '420px', margin: '0 auto 24px' }}>
              Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Our director Coach David Reeves has received your {formData.type} request.
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: 'var(--accent-volt)',
              marginBottom: '24px'
            }}>
              📍 1250 Champion Drive, Suite 100, Atlanta, GA
            </div>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '12px 30px' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
