import React from 'react';
import { 
  Flame, Handshake, Shield, TrendingUp, Trophy, Heart, 
  Award, CheckCircle2, ArrowUpRight, Users, Sparkles
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const AboutPage = ({ setActivePage }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const valueIcons = {
    Flame, Handshake, Shield, TrendingUp, Trophy, Heart
  };

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section style={{
        padding: '90px 0 60px',
        background: 'linear-gradient(180deg, #186AD3 0%, #2A7FE8 100%)',
        position: 'relative',
        overflow: 'hidden',
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
            Est. 2014 • Atlanta, GA
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: '#FFFFFF', marginBottom: '20px' }}>
            WE ARE <span style={{ color: '#C8F31D' }}>SPORTS BLUEPRINT</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Born from passion. Built on results. Driven by the unyielding belief that every athlete deserves elite-level development.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <div className="section-eyebrow">
                <Sparkles size={14} />
                ORIGIN STORY
              </div>
              <h2 style={{ fontSize: '2.5rem', color: '#0C0F14', marginBottom: '20px' }}>
                FROM A LOCAL PARK TO 500+ ATHLETES ANNUALLY
              </h2>
              <div style={{ color: '#4A5162', fontSize: '1.02rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  Sports Blueprint was founded in 2014 by former collegiate athletes who saw a gaping void in the sports ecosystem — young, dedicated athletes with extraordinary potential who lacked access to structured, science-backed athletic development.
                </p>
                <p>
                  What started as weekend speed clinics and footwork drills in a local public park has grown into a 10,000 sq ft, full-scale athletic performance organization training over 500 competitive athletes annually.
                </p>
                <p style={{ color: '#0C0F14', fontWeight: 600, borderLeft: '3px solid #C8F31D', paddingLeft: '16px', background: '#F8F9FB', padding: '14px 16px', borderRadius: '0 8px 8px 0' }}>
                  "We believe that greatness isn't reserved for the gifted few. It's built — rep by rep, session by session, day by day. That is the Sports Blueprint philosophy."
                </p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #E4E7EE', boxShadow: '0 12px 35px rgba(0,0,0,0.08)' }}>
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                  alt="Sports Blueprint Training Lab"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: '#C8F31D',
                border: '2px solid #0C0F14',
                borderRadius: '14px',
                padding: '16px 24px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }}>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '2.4rem', fontWeight: 900, color: '#0C0F14', lineHeight: 1 }}>
                  10+ YEARS
                </div>
                <div style={{ fontSize: '0.8rem', color: '#0C0F14', fontWeight: 700, textTransform: 'uppercase', marginTop: '4px' }}>
                  Of Uncompromising Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Statements */}
      <section style={{ padding: '60px 0', background: '#FAF9F6' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{
              background: '#FFFFFF',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid #E4E7EE',
              borderLeft: '5px solid #C8F31D',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                display: 'inline-block',
                background: '#C8F31D',
                color: '#0C0F14',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>Our Mission</div>
              <h3 style={{ fontSize: '1.45rem', color: '#0C0F14', lineHeight: 1.5, fontStyle: 'italic' }}>
                "{blueprintData.about.mission}"
              </h3>
            </div>

            <div style={{
              background: '#FFFFFF',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid #E4E7EE',
              borderLeft: '5px solid #186AD3',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(24, 106, 211, 0.1)',
                color: '#186AD3',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>Our Vision</div>
              <h3 style={{ fontSize: '1.45rem', color: '#0C0F14', lineHeight: 1.5, fontStyle: 'italic' }}>
                "{blueprintData.about.vision}"
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Icon Grid) */}
      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Award size={14} />
              CULTURE CODE
            </div>
            <h2>OUR CORE VALUES</h2>
            <p>The six unshakeable pillars that govern our coaches, our programming, and every rep on the turf.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {blueprintData.about.values.map((v, i) => {
              const IconComp = valueIcons[v.icon] || Flame;
              return (
                <div key={i} style={{
                  background: '#F8F9FB',
                  padding: '32px 28px',
                  borderRadius: '16px',
                  border: '1px solid #E4E7EE',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: '#C8F31D',
                    border: '1.5px solid #0C0F14',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <IconComp size={24} color="#0C0F14" />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0C0F14', marginBottom: '10px' }}>
                    {v.name}
                  </h3>
                  <p style={{ color: '#4A5162', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Leadership Team — Charcoal Contrast Band matching Ace Tennis */}
      <section style={{ padding: '90px 0', background: '#0D0F15' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow" style={{ color: '#C8F31D' }}>
              <Users size={14} />
              EXECUTIVE STAFF
            </div>
            <h2 style={{ color: '#FFFFFF' }}>THE MINDS BEHIND THE BLUEPRINT</h2>
            <p style={{ color: '#8A92A6' }}>World-class coaches, sports scientists, and former collegiate competitors dedicated to your ascension.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {blueprintData.coaches.map((coach) => (
              <div key={coach.id} style={{
                background: '#151922',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
              }}>
                <div style={{ height: '300px', position: 'relative' }}>
                  <img src={coach.image} alt={coach.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, #151922 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>{coach.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#C8F31D', fontWeight: 700 }}>{coach.title}</div>
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#8A92A6', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    {coach.credentials}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '18px' }}>
                    {coach.bio}
                  </p>
                  <blockquote style={{ fontSize: '0.85rem', color: '#C8F31D', fontStyle: 'italic', borderLeft: '2px solid #C8F31D', paddingLeft: '12px' }}>
                    "{coach.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section style={{ padding: '70px 0', background: '#FAF9F6', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">ACCREDITED STANDARDS</div>
            <h3 style={{ fontSize: '2rem', color: '#0C0F14' }}>Certifications & National Affiliations</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {blueprintData.certifications.map((cert, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #E4E7EE',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <CheckCircle2 size={24} color="#186AD3" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '0.95rem' }}>{cert.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#5A6275' }}>{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: '#0C0F14', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', marginBottom: '16px' }}>
            WANT TO BE PART OF SOMETHING BIGGER?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '32px' }}>
            Whether you are an aspiring youth athlete or preparing for the collegiate combine, the journey begins here.
          </p>
          <button
            onClick={() => handleNav('registration')}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <span>Join the Blueprint Family</span>
            <ArrowUpRight size={18} className="arrow-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};
