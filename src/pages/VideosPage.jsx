import React, { useState } from 'react';
import { Play, Eye, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';
import { blueprintData } from '../data/blueprintData';

export const VideosPage = ({ onOpenVideo, showToast }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Training', 'Coach Tips', 'Athlete Stories', 'Camp Recaps', 'Education'];

  const filteredVideos = activeCategory === 'All'
    ? blueprintData.videos
    : blueprintData.videos.filter(v => v.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const featuredVideo = blueprintData.videos[0];

  return (
    <div className="videos-page">
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
            Cinematic Performance Vault
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            SEE THE BLUEPRINT <span style={{ color: '#C8F31D' }}>IN ACTION</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Watch training sessions, athlete transformations, coach biomechanics breakdowns, and championship recaps.
          </p>
        </div>
      </section>

      {/* Featured Video (Hero Embed) */}
      <section style={{ padding: '50px 0 60px', background: '#FAF9F6' }}>
        <div className="container">
          <div
            onClick={() => onOpenVideo(featuredVideo)}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
              border: '2px solid #C8F31D'
            }}
          >
            <div style={{ position: 'relative', height: '480px' }}>
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(12, 15, 20, 0.92) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px'
              }}>
                <span style={{
                  alignSelf: 'flex-start',
                  background: '#C8F31D',
                  color: '#0C0F14',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  border: '1.5px solid #0C0F14'
                }}>
                  ⭐ FEATURED VAULT REEL
                </span>

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '50%',
                    background: '#C8F31D',
                    border: '2px solid #0C0F14',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <Play size={36} fill="#0C0F14" color="#0C0F14" style={{ marginLeft: '4px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#CBD5E1', fontSize: '0.88rem', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={15} color="#C8F31D" /> {featuredVideo.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Eye size={15} color="#C8F31D" /> {featuredVideo.views} views
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#FFFFFF', lineHeight: 1.2 }}>
                    {featuredVideo.title}
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '6px' }}>
                    {featuredVideo.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories & Grid */}
      <section style={{ padding: '60px 0 90px', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#C8F31D' : '#F4F6F9',
                  color: '#0C0F14',
                  border: activeCategory === cat ? '2px solid #0C0F14' : '1px solid #E4E7EE',
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {filteredVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => onOpenVideo(vid)}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={vid.thumbnail} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#C8F31D',
                      border: '2px solid #0C0F14',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                    }}>
                      <Play size={22} fill="#0C0F14" color="#0C0F14" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.85)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.78rem', color: '#FFFFFF', fontWeight: 700 }}>
                    {vid.duration}
                  </div>
                </div>

                <div style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{
                      background: 'rgba(24, 106, 211, 0.1)',
                      color: '#186AD3',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase'
                    }}>
                      {vid.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#5A6275', fontWeight: 600 }}>
                      {vid.views} views
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#0C0F14', lineHeight: 1.35, fontWeight: 800 }}>
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Subscribe CTA */}
      <section style={{ padding: '80px 0', background: '#FAF9F6', borderTop: '1px solid #E4E7EE', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#FEE2E2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <YoutubeIcon size={32} color="#DC2626" />
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#0C0F14', marginBottom: '14px' }}>
            NEVER MISS A TRAINING TIP
          </h2>
          <p style={{ color: '#5A6275', fontSize: '1.05rem', marginBottom: '28px' }}>
            Subscribe to our YouTube channel for weekly film breakdowns, speed drill tutorials, and combine preparations.
          </p>
          <button
            onClick={() => showToast('Opening YouTube channel in new window...')}
            className="btn btn-primary"
            style={{ padding: '14px 32px' }}
          >
            <span>Subscribe to Our YouTube Channel</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
