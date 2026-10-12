import React, { useState } from 'react';
import { 
  ArrowUpRight, Check, X, Shield, Clock, Calendar, 
  DollarSign, Sparkles, Filter, CheckCircle2
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const ProgramsPage = ({ setActivePage, openAssessment, onSelectProgramToRegister }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterMap = {
    'All': () => true,
    'Youth': (p) => p.id === 'youth',
    'Teen': (p) => p.id === 'junior-elite',
    'Adult': (p) => p.id === 'adult-performance',
    'Elite': (p) => p.id === 'elite-athlete',
    'Sport-Specific': (p) => p.id === 'camps' || p.id === 'mental-bootcamp'
  };

  const filteredPrograms = blueprintData.featuredPrograms.filter(filterMap[activeFilter] || (() => true));

  const handleEnroll = (programName) => {
    if (onSelectProgramToRegister) {
      onSelectProgramToRegister(programName);
    }
    setActivePage('registration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="programs-page">
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
            Curriculums & Development Tracks
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            PROGRAMS BUILT FOR <span style={{ color: '#C8F31D' }}>EVERY STAGE</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            From first-time youth athletes to seasoned competitors — we have a program engineered for your level, your goals, and your sport.
          </p>
        </div>
      </section>

      {/* Program Filter Bar */}
      <section style={{ background: '#FFFFFF', padding: '18px 0', borderBottom: '1px solid #E4E7EE', position: 'sticky', top: '76px', zIndex: 90, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            {['All', 'Youth', 'Teen', 'Adult', 'Elite', 'Sport-Specific'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: activeFilter === filter ? '#C8F31D' : '#F4F6F9',
                  color: '#0C0F14',
                  border: activeFilter === filter ? '1.5px solid #0C0F14' : '1px solid #E4E7EE',
                  padding: '8px 22px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Cards */}
      <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}>
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: prog.id === 'junior-elite' ? '2px solid #C8F31D' : '1px solid #E4E7EE',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ position: 'relative', height: '220px' }}>
                  <img
                    src={prog.image}
                    alt={prog.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(12, 15, 20, 0.85) 100%)' }} />
                  
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: '#C8F31D',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    border: '1.5px solid #0C0F14',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#0C0F14',
                    textTransform: 'uppercase'
                  }}>
                    {prog.badge}
                  </div>

                  <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                    <div style={{ fontSize: '0.85rem', color: '#C8F31D', fontWeight: 800, textTransform: 'uppercase' }}>
                      {prog.age}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginTop: '2px' }}>
                      {prog.name}
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Meta bar */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      background: '#F8F9FB',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      marginBottom: '18px',
                      border: '1px solid #E4E7EE'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#4A5162' }}>
                        <Clock size={16} color="#186AD3" />
                        <span>{prog.duration}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#4A5162' }}>
                        <Calendar size={16} color="#186AD3" />
                        <span>{prog.sessions}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#5A6275', lineHeight: 1.6, marginBottom: '20px' }}>
                      {prog.desc}
                    </p>

                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#0C0F14', marginBottom: '10px' }}>
                        Program Curriculum Includes:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {prog.includes.map((inc, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#0C0F14' }}>
                            <CheckCircle2 size={16} color="#186AD3" style={{ flexShrink: 0 }} />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid #EAECEF'
                  }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '2.2rem', fontWeight: 900, color: '#0C0F14', lineHeight: 1 }}>
                        {prog.price}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#5A6275', marginTop: '2px' }}>/{prog.period}</div>
                    </div>

                    <button
                      onClick={() => handleEnroll(prog.name)}
                      className="btn btn-primary"
                      style={{ padding: '12px 24px', fontSize: '0.92rem' }}
                    >
                      <span>Enroll Now</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison Table */}
      <section style={{ padding: '90px 0', background: '#FFFFFF', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Sparkles size={14} />
              FEATURE MATRIX
            </div>
            <h2>PROGRAM COMPARISON</h2>
            <p>Compare our core developmental tracks side-by-side to determine the optimal fit for your seasonal goals.</p>
          </div>

          <div style={{
            background: '#F8F9FB',
            padding: '32px',
            borderRadius: '20px',
            border: '1px solid #E4E7EE',
            overflowX: 'auto',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E4E7EE' }}>
                  <th style={{ padding: '16px', color: '#0C0F14', fontSize: '1.05rem', fontWeight: 900 }}>Feature / Service</th>
                  <th style={{ padding: '16px', color: '#186AD3', fontSize: '1rem', fontWeight: 800, textAlign: 'center' }}>Youth (8–12)</th>
                  <th style={{ padding: '16px', color: '#0C0F14', fontSize: '1rem', fontWeight: 800, textAlign: 'center' }}>Junior Elite (13–17)</th>
                  <th style={{ padding: '16px', color: '#0C0F14', fontSize: '1rem', fontWeight: 800, textAlign: 'center' }}>Adult (18+)</th>
                  <th style={{ padding: '16px', color: '#186AD3', fontSize: '1rem', fontWeight: 800, textAlign: 'center' }}>Elite Athlete</th>
                </tr>
              </thead>
              <tbody>
                {blueprintData.programsComparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #EAECEF', background: idx % 2 === 0 ? '#FFFFFF' : 'transparent' }}>
                    <td style={{ padding: '16px', color: '#0C0F14', fontWeight: 600, fontSize: '0.92rem' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {row.youth ? <Check size={20} color="#186AD3" style={{ margin: '0 auto' }} /> : <span style={{ color: '#A0AEC0' }}>—</span>}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {row.junior ? <Check size={20} color="#186AD3" style={{ margin: '0 auto' }} /> : <span style={{ color: '#A0AEC0' }}>—</span>}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {row.adult ? <Check size={20} color="#186AD3" style={{ margin: '0 auto' }} /> : <span style={{ color: '#A0AEC0' }}>—</span>}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {row.elite ? <Check size={20} color="#186AD3" style={{ margin: '0 auto' }} /> : <span style={{ color: '#A0AEC0' }}>—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Assessment CTA Banner */}
      <section style={{ padding: '80px 0', background: '#0C0F14', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', marginBottom: '16px' }}>
            NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '32px' }}>
            Our 60-second interactive assessment analyzes your sport, athletic age, and season schedule to prescribe the perfect track.
          </p>
          <button
            onClick={openAssessment}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <span>Take Our Free Assessment</span>
            <ArrowUpRight size={18} className="arrow-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};
