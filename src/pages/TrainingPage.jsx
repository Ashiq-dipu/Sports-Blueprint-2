import React, { useState } from 'react';
import { 
  Zap, Activity, Cpu, ShieldAlert, HeartPulse, 
  ArrowUpRight, Clock, Calendar, CheckCircle2, Dumbbell 
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const TrainingPage = ({ setActivePage, openConsultation }) => {
  const [selectedDay, setSelectedDay] = useState(blueprintData.weeklySchedule[0]);

  return (
    <div className="training-page">
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
            Sports Science & Methodology
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            THE SCIENCE OF <span style={{ color: '#C8F31D' }}>BUILDING CHAMPIONS</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            Our training methodology is built on exercise physiology, force-velocity profiling, and a relentless commitment to measurable results.
          </p>
        </div>
      </section>

      {/* Training Philosophy Banner */}
      <section style={{ padding: '60px 0', background: '#FAF9F6', borderBottom: '1px solid #E4E7EE' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{
            background: '#FFFFFF',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid #E4E7EE',
            borderLeft: '5px solid #C8F31D',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0C0F14', marginBottom: '12px' }}>
              Periodized, Athlete-Centered Architecture
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#4A5162', lineHeight: 1.8 }}>
              At Sports Blueprint, we follow a <strong>periodized, athlete-centered training model</strong> that adapts to each individual's sport, position, age, and development stage. We combine the latest research in sports science with proven real-world methods to create training experiences that are both explosively effective and orthopedically sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Training Pillars */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Zap size={14} />
              SYSTEMIC FOUNDATION
            </div>
            <h2>FOUR TRAINING PILLARS</h2>
            <p>Every rep, set, recovery interval, and drill is anchored in our four systemic pillars.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {blueprintData.trainingPillars.map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  background: '#F8F9FB',
                  padding: '36px 28px',
                  borderRadius: '16px',
                  border: '1px solid #E4E7EE',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                }}
              >
                <div>
                  <div style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '2.8rem',
                    fontWeight: 900,
                    color: '#186AD3',
                    lineHeight: 1,
                    marginBottom: '16px'
                  }}>
                    {pillar.num}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#0C0F14', marginBottom: '12px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: '#5A6275', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Weekly Training Schedule */}
      <section style={{ padding: '90px 0', background: '#FAF9F6', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Calendar size={14} />
              MICROCYCLE BLUEPRINT
            </div>
            <h2>SAMPLE WEEKLY TRAINING SCHEDULE</h2>
            <p>A balanced periodized microcycle designed to peak central nervous system output while managing fatigue.</p>
          </div>

          {/* Interactive Day Selector */}
          <div style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '12px',
            marginBottom: '28px',
            justifyContent: 'center'
          }}>
            {blueprintData.weeklySchedule.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day)}
                style={{
                  background: selectedDay.day === day.day ? '#C8F31D' : '#FFFFFF',
                  color: '#0C0F14',
                  border: selectedDay.day === day.day ? '2px solid #0C0F14' : '1px solid #E4E7EE',
                  padding: '10px 22px',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                {day.day}
              </button>
            ))}
          </div>

          {/* Selected Day Details Card */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '36px',
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '2px solid #C8F31D',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{
                background: '#C8F31D',
                color: '#0C0F14',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>
                Day Focus: {selectedDay.badge}
              </span>
              <span style={{ fontSize: '0.88rem', color: selectedDay.intensity === 'Rest' ? '#059669' : '#D97706', fontWeight: 800 }}>
                Intensity Rating: {selectedDay.intensity}
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#0C0F14', marginBottom: '12px' }}>
              {selectedDay.day} Protocol: {selectedDay.focus}
            </h3>

            <p style={{ color: '#5A6275', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Every session starts with a 15-minute dynamic neuromuscular warm-up (hip mobility, ankle stiffness, CNS activation), followed by primary mechanical drills and concluded with dedicated regeneration.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={openConsultation}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.92rem' }}
              >
                Request Custom Athlete Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Facilities Section */}
      <section style={{ padding: '90px 0', background: '#FFFFFF', borderTop: '1px solid #E4E7EE' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Dumbbell size={14} />
              WORLD-CLASS ENVIRONMENT
            </div>
            <h2>TRAIN IN A WORLD-CLASS FACILITY</h2>
            <p>10,000 square feet of competition-grade turf, Olympic lifting platforms, and biomechanics tracking.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {blueprintData.facilityHighlights.map((fac, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E4E7EE',
                boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
              }}>
                <div style={{ height: '220px', position: 'relative' }}>
                  <img src={fac.image} alt={fac.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(12, 15, 20, 0.7) 100%)' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#0C0F14', marginBottom: '8px' }}>{fac.title}</h3>
                  <p style={{ color: '#5A6275', fontSize: '0.9rem', lineHeight: 1.6 }}>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={openConsultation}
              className="btn btn-secondary"
              style={{ padding: '14px 32px' }}
            >
              <span>Schedule a Facility Walkthrough</span>
              <ArrowUpRight size={18} className="arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
