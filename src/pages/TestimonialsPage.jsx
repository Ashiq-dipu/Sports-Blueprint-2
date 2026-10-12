import React, { useState } from 'react';
import { Star, Play, Quote, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const TestimonialsPage = ({ setActivePage, onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allTestimonials = [
    ...blueprintData.testimonials.athletes.map(t => ({ ...t, category: 'athlete', source: 'Athlete' })),
    ...blueprintData.testimonials.parents.map(t => ({ ...t, category: 'parent', source: 'Parent' })),
    ...blueprintData.testimonials.coaches.map(t => ({ ...t, category: 'coach', source: 'School Coach' }))
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? allTestimonials 
    : allTestimonials.filter(t => t.category === activeCategory);

  return (
    <div className="testimonials-page">
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
            Community Voices
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            DON'T TAKE <span style={{ color: '#C8F31D' }}>OUR WORD FOR IT</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Hear directly from the athletes, parents, and high school coaches who've experienced the Blueprint difference.
          </p>

          {/* Social Proof Star Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#FFFFFF',
            border: '2px solid #0C0F14',
            padding: '10px 24px',
            borderRadius: '30px',
            marginTop: '24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span style={{ fontWeight: 900, color: '#0C0F14', fontSize: '1.05rem' }}>
              4.9/5 Overall Rating
            </span>
            <span style={{ color: '#5A6275', fontSize: '0.85rem', fontWeight: 600 }}>
              (200+ Verified Reviews)
            </span>
          </div>
        </div>
      </section>

      {/* Video Testimonials Highlight */}
      <section style={{ padding: '70px 0', background: '#FAF9F6', borderBottom: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">VIDEO SPOTLIGHTS</div>
            <h2>Watch Athletes & Parents Speak</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {blueprintData.videos.slice(0, 3).map((vid) => (
              <div
                key={vid.id}
                onClick={() => onOpenVideo(vid)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <img src={vid.thumbnail} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                      width: '54px',
                      height: '54px',
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
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.8)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: 700 }}>
                    {vid.duration}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(24, 106, 211, 0.1)',
                    color: '#186AD3',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    {vid.category}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: '#0C0F14', fontWeight: 800 }}>{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Testimonials' },
              { id: 'athlete', label: 'From Athletes' },
              { id: 'parent', label: 'From Parents' },
              { id: 'coach', label: 'From School Coaches' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  background: activeCategory === tab.id ? '#C8F31D' : '#F4F6F9',
                  color: '#0C0F14',
                  border: activeCategory === tab.id ? '2px solid #0C0F14' : '1px solid #E4E7EE',
                  padding: '8px 22px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {filteredTestimonials.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  background: '#F8F9FB',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <span style={{
                      background: '#C8F31D',
                      color: '#0C0F14',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <blockquote style={{ fontSize: '1rem', color: '#0C0F14', lineHeight: 1.65, marginBottom: '24px', fontStyle: 'italic' }}>
                    "{item.quote}"
                  </blockquote>
                </div>

                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #EAECEF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '0.98rem' }}>{item.author}</div>
                    <div style={{ fontSize: '0.82rem', color: '#5A6275' }}>{item.role}</div>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#186AD3', fontWeight: 800, textTransform: 'uppercase' }}>
                    {item.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '54px' }}>
            <button
              onClick={() => handleNav('registration')}
              className="btn btn-primary"
              style={{ padding: '16px 36px' }}
            >
              <span>Experience The Blueprint Difference</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
