import React from 'react';
import { 
  Award, ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles, MessageSquare
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const CoachesPage = ({ setActivePage, openConsultation }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="coaches-page">
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
            Elite Pedagogical Staff
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            WORLD-CLASS COACHES.<br />
            <span style={{ color: '#C8F31D' }}>PROVEN METHODOLOGIES.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Our coaching staff brings decades of combined experience from professional, collegiate, and elite youth sports ecosystems.
          </p>
        </div>
      </section>

      {/* Full Coach Dossier Cards */}
      <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {blueprintData.coaches.map((coach) => (
              <div
                key={coach.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  alignItems: 'center',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
                }}
              >
                {/* Photo & Badge */}
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '420px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                  <img
                    src={coach.image}
                    alt={coach.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(12, 15, 20, 0.9) 100%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                    <div style={{
                      display: 'inline-block',
                      background: '#C8F31D',
                      color: '#0C0F14',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      marginBottom: '8px'
                    }}>
                      Certified Master Coach
                    </div>
                    <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>{coach.name}</h3>
                    <div style={{ fontSize: '0.9rem', color: '#C8F31D', fontWeight: 700 }}>
                      {coach.title}
                    </div>
                  </div>
                </div>

                {/* Dossier Information */}
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: '#F4F6F9',
                    border: '1px solid #E4E7EE',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    color: '#0C0F14',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '16px'
                  }}>
                    {coach.credentials}
                  </div>

                  <p style={{ fontSize: '1rem', color: '#5A6275', lineHeight: 1.7, marginBottom: '24px' }}>
                    {coach.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#0C0F14', marginBottom: '10px' }}>
                      Primary Specialties:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {coach.specialties.map((spec, i) => (
                        <span key={i} style={{
                          background: 'rgba(24, 106, 211, 0.08)',
                          color: '#186AD3',
                          border: '1px solid rgba(24, 106, 211, 0.2)',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 700
                        }}>
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Philosophy Quote */}
                  <div style={{
                    background: '#F8F9FB',
                    borderLeft: '4px solid #C8F31D',
                    padding: '16px 20px',
                    borderRadius: '0 10px 10px 0',
                    border: '1px solid #E4E7EE',
                    borderLeftWidth: '4px',
                    marginBottom: '28px'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#186AD3', marginBottom: '4px' }}>
                      Coaching Philosophy:
                    </div>
                    <div style={{ fontStyle: 'italic', color: '#0C0F14', fontSize: '1.05rem', fontWeight: 600 }}>
                      "{coach.quote}"
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={openConsultation}
                      className="btn btn-primary"
                      style={{ padding: '12px 24px', fontSize: '0.92rem' }}
                    >
                      <span>Book 1:1 Session</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Blueprint Coaching Standard */}
      <section style={{ padding: '80px 0', background: '#FFFFFF', borderTop: '1px solid #E4E7EE' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="section-eyebrow">
            <ShieldCheck size={14} />
            ETHICAL COMPACT
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#0C0F14', marginBottom: '20px' }}>
            THE BLUEPRINT COACHING STANDARD
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#5A6275', lineHeight: 1.8, marginBottom: '32px' }}>
            Every coach at Sports Blueprint is held to the highest standard of technical knowledge, sports psychology, and athlete-centered coaching. We don't just train bodies — we develop resilient, respectful, and empowered human beings capable of leading in athletics and life.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', textAlign: 'left' }}>
            {[
              "NSCA-CSCS Certified",
              "USATF Level 1 & 2 Staff",
              "100% Background Screened",
              "CPR & Concussion Protocols"
            ].map((std, idx) => (
              <div key={idx} style={{
                background: '#F8F9FB',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid #E4E7EE',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <CheckCircle2 size={18} color="#186AD3" />
                <span style={{ fontSize: '0.88rem', color: '#0C0F14', fontWeight: 700 }}>{std}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Coaching Staff CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: '#0C0F14', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', marginBottom: '16px' }}>
            ARE YOU A COACH WHO WANTS TO MAKE AN IMPACT?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '32px' }}>
            We are always scouting high-character performance coaches, speed specialists, and sports psychologists to join our Atlanta facility.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <span>Apply to Coach at Sports Blueprint</span>
            <ArrowUpRight size={18} className="arrow-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};
