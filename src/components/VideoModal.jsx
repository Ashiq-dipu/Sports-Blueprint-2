import React from 'react';
import { X, Play, Eye, Clock, Award, CheckCircle2 } from 'lucide-react';

export const VideoModal = ({ video, onClose, onEnroll }) => {
  if (!video) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '880px', padding: '0', overflow: 'hidden' }}>
        {/* Video Player Header / Simulated Screen */}
        <div style={{ position: 'relative', width: '100%', height: '420px', background: '#000000' }}>
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, #0E1017 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge-pill badge-volt">
                {video.category}
              </span>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)',
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
            </div>

            {/* Play trigger center */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'var(--accent-volt)',
                color: '#08090C',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px var(--accent-volt-glow)',
                cursor: 'pointer',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Play size={32} fill="#08090C" style={{ marginLeft: '4px' }} />
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem', marginTop: '12px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                Playing Preview Reel (HD 1080p)
              </div>
            </div>

            {/* Progress Bar Simulation */}
            <div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '45%', height: '100%', background: 'var(--accent-volt)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>
                <span>01:42</span>
                <span>{video.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Information Body */}
        <div style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={15} color="var(--accent-volt)" /> {video.views} Views
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} color="var(--accent-volt)" /> Duration: {video.duration}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={15} color="var(--accent-volt)" /> Official Blueprint Vault
            </span>
          </div>

          <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '10px' }}>
            {video.title}
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
            {video.desc || "Experience the exact biomechanics, mental conditioning, and high-intensity repetitions that define the Sports Blueprint performance method."}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                onClose();
                onEnroll();
              }}
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.92rem' }}
            >
              Train With Us Now
            </button>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '12px 20px', fontSize: '0.92rem' }}
            >
              Close Reel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
