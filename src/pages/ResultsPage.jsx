import React from 'react';
import { 
  TrendingUp, Award, Trophy, ArrowUpRight, CheckCircle2, 
  Sparkles, GraduationCap, ShieldCheck 
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const ResultsPage = ({ setActivePage }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="results-page">
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
            Verified Athletic Telemetry
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            THE NUMBERS <span style={{ color: '#C8F31D' }}>DON'T LIE</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Real results from real athletes who put in real work on our turf and lifting platforms.
          </p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <TrendingUp size={14} />
              BENCHMARK TELEMETRY
            </div>
            <h2>AGGREGATE PERFORMANCE IMPACT</h2>
            <p>Measured across 500+ athletes enrolled across our foundation, junior elite, and high school tracks.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {blueprintData.resultsMetrics.map((met, idx) => (
              <div key={idx} style={{
                background: '#F8F9FB',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #E4E7EE',
                borderLeft: '5px solid #C8F31D',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '3.6rem',
                  fontWeight: 900,
                  color: '#186AD3',
                  lineHeight: 1,
                  marginBottom: '10px'
                }}>
                  {met.value}
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C0F14', marginBottom: '6px' }}>
                  {met.label}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#5A6275' }}>
                  {met.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Championship & Competition Results */}
      <section style={{ padding: '80px 0', background: '#FAF9F6', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Trophy size={14} />
              PODIUM HONORS
            </div>
            <h2>2025 SEASON HIGHLIGHTS</h2>
            <p>State champions, combine winners, and tournament champions forged inside the Blueprint system.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {blueprintData.seasonHighlights.map((hl, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '28px',
                borderRadius: '16px',
                border: '1px solid #E4E7EE',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>{hl.medal}</span>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0C0F14', marginBottom: '6px' }}>{hl.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: '#186AD3', fontWeight: 800 }}>{hl.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Placement Wall */}
      <section style={{ padding: '90px 0', background: '#FFFFFF', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <GraduationCap size={14} />
              NEXT LEVEL TALENT
            </div>
            <h2>COLLEGE PLACEMENT WALL</h2>
            <p>Universities and athletic programs where Blueprint athletes have signed collegiate athletic commitments.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {blueprintData.collegesPlaced.map((college, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#0C0F14',
                  background: '#F8F9FB',
                  borderRadius: '12px',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ color: '#186AD3', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 800 }}>
                  NCAA Division I
                </div>
                {college}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => handleNav('registration')}
              className="btn btn-primary"
              style={{ padding: '14px 32px' }}
            >
              <span>Join The Roster</span>
              <ArrowUpRight size={18} className="arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
