import React, { useState } from 'react';
import { 
  Trophy, ArrowUpRight, TrendingUp, Award, Zap, 
  CheckCircle2, Sparkles, Star
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const AthletesPage = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState('all');

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="athletes-page">
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
            Wall of Champions
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            MEET THE ATHLETES OF <span style={{ color: '#C8F31D' }}>SPORTS BLUEPRINT</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            These aren't just our athletes — they're our proof. Real people. Real work. Real results.
          </p>
        </div>
      </section>

      {/* Alumni Metrics Strip */}
      <section style={{ background: '#FAF9F6', padding: '36px 0', borderBottom: '1px solid #E4E7EE' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '3.2rem', fontWeight: 900, color: '#0C0F14', lineHeight: 1 }}>
                {blueprintData.alumniMetrics.collegePlaced}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#5A6275', marginTop: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                Collegiate Placements
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '3.2rem', fontWeight: 900, color: '#186AD3', lineHeight: 1 }}>
                {blueprintData.alumniMetrics.proAthletes}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#5A6275', marginTop: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                Pro / Semi-Pro Athletes
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '3.2rem', fontWeight: 900, color: '#0C0F14', lineHeight: 1 }}>
                {blueprintData.alumniMetrics.nationalTeams}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#5A6275', marginTop: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                National / Regional Teams
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '3.2rem', fontWeight: 900, color: '#186AD3', lineHeight: 1 }}>
                {blueprintData.alumniMetrics.scholarshipsValue}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#5A6275', marginTop: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                Scholarships Secured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athlete Deep-Dives */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Trophy size={14} />
              ATHLETE SPOTLIGHTS
            </div>
            <h2>REAL ATHLETE TRANSFORMATIONS</h2>
            <p>Direct before and after performance telemetry verified by laser gates and electronic jump mats.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {blueprintData.featuredAthletes.map((ath) => (
              <div
                key={ath.id}
                style={{
                  background: '#F8F9FB',
                  padding: '36px',
                  borderRadius: '20px',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.04)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '36px',
                  alignItems: 'center'
                }}
              >
                {/* Photo */}
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                  <img src={ath.image} alt={ath.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(12, 15, 20, 0.85) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                    <span style={{
                      display: 'inline-block',
                      background: '#C8F31D',
                      color: '#0C0F14',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      textTransform: 'uppercase'
                    }}>
                      {ath.sport}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginTop: '6px' }}>{ath.name}, {ath.age}</h3>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(24, 106, 211, 0.1)',
                    color: '#186AD3',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    marginBottom: '14px'
                  }}>
                    {ath.achievement}
                  </div>
                  <blockquote style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.5,
                    color: '#0C0F14',
                    fontStyle: 'italic',
                    marginBottom: '24px'
                  }}>
                    "{ath.quote}"
                  </blockquote>

                  {/* Before / After Table */}
                  <div style={{
                    background: '#FFFFFF',
                    border: '1px solid #E4E7EE',
                    borderRadius: '14px',
                    padding: '20px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#186AD3', marginBottom: '12px' }}>
                      Performance Telemetry Breakdown
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ background: '#F4F6F9', padding: '14px', borderRadius: '10px' }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#5A6275', marginBottom: '6px', fontWeight: 700 }}>
                          Baseline Stats (Day 1)
                        </div>
                        {Object.entries(ath.beforeStats).map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#5A6275', padding: '3px 0' }}>
                            <span style={{ textTransform: 'capitalize' }}>{k}:</span>
                            <strong style={{ color: '#0C0F14' }}>{v}</strong>
                          </div>
                        ))}
                      </div>

                      <div style={{ background: '#FAFDE8', border: '1.5px solid #C8F31D', padding: '14px', borderRadius: '10px' }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#0C0F14', marginBottom: '6px', fontWeight: 900 }}>
                          Blueprint Result
                        </div>
                        {Object.entries(ath.afterStats).map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#0C0F14', padding: '3px 0' }}>
                            <span style={{ textTransform: 'capitalize' }}>{k}:</span>
                            <strong style={{ color: '#186AD3' }}>{v}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      onClick={() => handleNav('registration')}
                      className="btn btn-primary"
                      style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                    >
                      <span>Start Your Blueprint</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Wall (Action Grid) */}
      <section style={{ padding: '90px 0', background: '#FAF9F6', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Zap size={14} />
              THE BLUEPRINT ROSTER
            </div>
            <h2>ATHLETE WALL</h2>
            <p>From soccer playmakers and track sprinters to gridiron linebackers.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {blueprintData.photos.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '280px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  border: '1px solid #E4E7EE'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(12, 15, 20, 0.85) 100%)'
                }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <span style={{
                    display: 'inline-block',
                    background: '#C8F31D',
                    color: '#0C0F14',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '12px',
                    textTransform: 'uppercase'
                  }}>
                    {item.category}
                  </span>
                  <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1.05rem', marginTop: '4px' }}>
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: '#0C0F14', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', marginBottom: '16px' }}>
            YOUR STORY COULD BE NEXT
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '32px' }}>
            Ready to test your limits and write your name alongside these champions?
          </p>
          <button
            onClick={() => handleNav('registration')}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <span>Start Your Blueprint</span>
            <ArrowUpRight size={18} className="arrow-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};
