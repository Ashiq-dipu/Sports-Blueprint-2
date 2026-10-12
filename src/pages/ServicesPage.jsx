import React from 'react';
import { 
  Dumbbell, Zap, Brain, Apple, Video, Activity, 
  GraduationCap, Users, ArrowUpRight, Check, Sparkles, CheckCircle2 
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const ServicesPage = ({ setActivePage, openConsultation }) => {
  const serviceIcons = {
    Dumbbell, Zap, Brain, Apple, Video, Activity, GraduationCap, Users2: Users
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="services-page">
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
            Comprehensive Performance Solutions
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            MORE THAN TRAINING.<br />
            <span style={{ color: '#C8F31D' }}>A COMPLETE ATHLETIC ECOSYSTEM.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Every service we offer is designed with one relentless goal in mind — maximizing your athletic potential through cutting-edge sports science.
          </p>
        </div>
      </section>

      {/* 8 Services List */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Sparkles size={14} />
              SPECIALIZED DISCIPLINES
            </div>
            <h2>CORE ATHLETIC SERVICES</h2>
            <p>From velocity-based barbell training to high-speed movement biomechanics and college exposure.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {blueprintData.services.map((svc) => {
              const IconComp = serviceIcons[svc.icon] || Dumbbell;
              return (
                <div 
                  key={svc.number}
                  style={{
                    background: '#F8F9FB',
                    padding: '32px 28px',
                    borderRadius: '16px',
                    border: '1px solid #E4E7EE',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: '#C8F31D',
                        border: '1.5px solid #0C0F14',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <IconComp size={26} color="#0C0F14" />
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-condensed)',
                        fontSize: '1.4rem',
                        fontWeight: 900,
                        color: '#CBD5E1'
                      }}>
                        {svc.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: '#0C0F14', marginBottom: '12px' }}>
                      {svc.title}
                    </h3>

                    <p style={{ color: '#5A6275', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {svc.desc}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '16px',
                    borderTop: '1px solid #EAECEF',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.82rem', color: '#186AD3', fontWeight: 800 }}>
                      ⚡ {svc.metric}
                    </span>
                    <button
                      onClick={openConsultation}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#0C0F14',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>Inquire</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Packages Tier Grid */}
      <section style={{ padding: '90px 0', background: '#FAF9F6', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Zap size={14} />
              MEMBERSHIP PACKAGES
            </div>
            <h2>SERVICE TIERS</h2>
            <p>Transparent, flexible investment levels built around your athletic commitment.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch'
          }}>
            {blueprintData.servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  borderRadius: '20px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: pkg.popular ? '2px solid #C8F31D' : '1px solid #E4E7EE',
                  background: '#FFFFFF',
                  boxShadow: pkg.popular ? '0 12px 35px rgba(200, 243, 29, 0.2)' : '0 6px 24px rgba(0,0,0,0.04)',
                  position: 'relative'
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#C8F31D',
                    color: '#0C0F14',
                    padding: '4px 18px',
                    borderRadius: '20px',
                    border: '1.5px solid #0C0F14',
                    fontSize: '0.78rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    Most Selected Tier
                  </div>
                )}

                <div>
                  <div style={{
                    display: 'inline-block',
                    background: '#F4F6F9',
                    color: '#0C0F14',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px',
                    textTransform: 'uppercase'
                  }}>
                    {pkg.badge}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#0C0F14', marginBottom: '8px' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ color: '#5A6275', fontSize: '0.9rem', marginBottom: '24px' }}>
                    {pkg.desc}
                  </p>

                  <div style={{ marginBottom: '28px' }}>
                    <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '3rem', fontWeight: 900, color: '#0C0F14', lineHeight: 1 }}>
                      {pkg.price}
                    </span>
                    <span style={{ color: '#5A6275', fontSize: '0.88rem' }}> {pkg.period}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#0C0F14' }}>
                        <CheckCircle2 size={18} color="#186AD3" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleNav('registration')}
                  className={pkg.popular ? "btn btn-primary" : "btn btn-secondary"}
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  <span>{pkg.cta}</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
