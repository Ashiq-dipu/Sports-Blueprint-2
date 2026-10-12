import React, { useState } from 'react';
import { Camera, ArrowUpRight, Maximize2 } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { blueprintData } from '../data/blueprintData';

export const PhotosPage = ({ onOpenLightbox, showToast }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Training', 'Competition', 'Camp', 'Culture', 'Facility'];

  const filteredPhotos = activeFilter === 'All'
    ? blueprintData.photos
    : blueprintData.photos.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="photos-page">
      {/* Page Hero */}
      <section style={{
        padding: '90px 0 60px',
        background: 'linear-gradient(180deg, #186AD3 0%, #2A7FE8 100%)',
        position: 'relative',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '5px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px'
          }}>
            Action Photography
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            MOMENTS THAT <span style={{ color: '#C8F31D' }}>DEFINE CHAMPIONS</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            A visual journey through the training grit, championship podiums, and electric team culture of Sports Blueprint.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section style={{ padding: '20px 0', background: '#FFFFFF', borderBottom: '1px solid #E4E7EE' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? '#C8F31D' : '#F4F6F9',
                  color: '#0C0F14',
                  border: activeFilter === cat ? '2px solid #0C0F14' : '1px solid #E4E7EE',
                  padding: '8px 22px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Bento Gallery Grid */}
      <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(photo, filteredPhotos)}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: '320px',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(12, 15, 20, 0.9) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px',
                  opacity: 0.95
                }}>
                  <div style={{ alignSelf: 'flex-end', background: 'rgba(0,0,0,0.6)', padding: '6px', borderRadius: '50%', color: '#C8F31D' }}>
                    <Maximize2 size={16} />
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      background: '#C8F31D',
                      color: '#0C0F14',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase'
                    }}>
                      {photo.category}
                    </span>
                    <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginTop: '6px', fontWeight: 800 }}>
                      {photo.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '2px' }}>
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Integration */}
      <section style={{ padding: '80px 0', background: '#FFFFFF', borderTop: '1px solid #E4E7EE', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#FDF2F8',
            border: '2px solid #F472B6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <InstagramIcon size={28} color="#E11D48" />
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#0C0F14', marginBottom: '8px' }}>
            FOLLOW OUR JOURNEY
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#186AD3', fontWeight: 800, marginBottom: '16px' }}>
            @SportsBlueprint
          </p>
          <p style={{ color: '#5A6275', fontSize: '1rem', marginBottom: '28px' }}>
            Daily stories from the turf, athlete workout snippets, combine speed times, and nutritional tips.
          </p>
          <button
            onClick={() => showToast('Opening Instagram profile in new tab...')}
            className="btn btn-primary"
            style={{ padding: '14px 32px' }}
          >
            <span>Follow Us on Instagram</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
