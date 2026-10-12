import React from 'react';
import { X, ChevronLeft, ChevronRight, Download, Camera } from 'lucide-react';

export const LightboxModal = ({ photo, photos, onClose, onNavigate }) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIdx]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIdx]);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 10005, background: 'rgba(0,0,0,0.95)' }}>
      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Controls */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge-pill badge-volt">{photo.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {currentIndex + 1} / {photos.length}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Display */}
        <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
          <img
            src={photo.image}
            alt={photo.title}
            style={{
              width: '100%',
              maxHeight: '68vh',
              objectFit: 'contain',
              background: '#000000',
              display: 'block'
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Caption */}
        <div style={{
          width: '100%',
          marginTop: '16px',
          background: 'rgba(17, 20, 29, 0.8)',
          padding: '16px 20px',
          borderRadius: '8px',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '4px' }}>{photo.title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{photo.caption}</p>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-volt)', fontWeight: 700, textTransform: 'uppercase' }}>
            Sports Blueprint Media
          </span>
        </div>
      </div>
    </div>
  );
};
