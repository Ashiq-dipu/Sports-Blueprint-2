import React, { useState } from 'react';
import { 
  FileText, Download, Headphones, Calculator, ArrowUpRight, 
  BookOpen, Sparkles, CheckCircle2, Play, Pause, RefreshCw 
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const ResourcesPage = ({ showToast, openAssessment }) => {
  const [activeTab, setActiveTab] = useState('downloads');
  const [playingPodcast, setPlayingPodcast] = useState(null);

  // BMI Calculator state
  const [calcHeight, setCalcHeight] = useState('70'); // inches
  const [calcWeight, setCalcWeight] = useState('175'); // lbs
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(calcHeight);
    const w = parseFloat(calcWeight);
    if (h > 0 && w > 0) {
      const bmi = ((w / (h * h)) * 703).toFixed(1);
      let status = 'Optimal Athletic Range';
      if (bmi < 18.5) status = 'Underweight (Mass protocol needed)';
      else if (bmi > 25) status = 'Power/Heavy build (Strength athlete)';
      setBmiResult({ bmi, status });
      showToast(`Athlete BMI calculated: ${bmi} (${status})`);
    }
  };

  const handleDownload = (docTitle) => {
    showToast(`Downloading "${docTitle}" (PDF)... Ready in seconds!`);
  };

  const togglePodcast = (id) => {
    if (playingPodcast === id) {
      setPlayingPodcast(null);
      showToast('Audio paused.');
    } else {
      setPlayingPodcast(id);
      showToast(`Now playing audio snippet from Blueprint Dispatch podcast.`);
    }
  };

  return (
    <div className="resources-page">
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
            Open Source Performance Intelligence
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            FREE TOOLS TO <span style={{ color: '#C8F31D' }}>ELEVATE YOUR GAME</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
            We believe in giving value first. Access our library of free download guides, sports science articles, podcasts, and interactive athletic calculators.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ padding: '18px 0', background: '#FFFFFF', borderBottom: '1px solid #E4E7EE', position: 'sticky', top: '76px', zIndex: 90, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { id: 'downloads', label: '📥 Free PDF Guides' },
              { id: 'articles', label: '📝 Articles & Blog' },
              { id: 'podcast', label: '🎙️ Podcast Audio' },
              { id: 'calculators', label: '📊 Athletic Calculators' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? '#C8F31D' : '#F4F6F9',
                  color: '#0C0F14',
                  border: activeTab === tab.id ? '2px solid #0C0F14' : '1px solid #E4E7EE',
                  padding: '10px 22px',
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
        </div>
      </section>

      {/* Tab 1: Free Downloads */}
      {activeTab === 'downloads' && (
        <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {blueprintData.resources.downloads.map((item) => (
                <div key={item.id} style={{
                  background: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{
                        background: '#C8F31D',
                        color: '#0C0F14',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        textTransform: 'uppercase'
                      }}>
                        {item.format} • {item.pages}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#5A6275', fontWeight: 600 }}>{item.size}</span>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: '#0C0F14', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#5A6275', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload(item.title)}
                    className="btn btn-primary"
                    style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                  >
                    <Download size={16} />
                    <span>Download Free Guide</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Articles */}
      {activeTab === 'articles' && (
        <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}>
              {blueprintData.resources.articles.map((art) => (
                <div key={art.id} style={{
                  background: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #E4E7EE',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{
                        background: 'rgba(24, 106, 211, 0.1)',
                        color: '#186AD3',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        textTransform: 'uppercase'
                      }}>{art.category}</span>
                      <span style={{ fontSize: '0.8rem', color: '#5A6275', fontWeight: 600 }}>{art.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: '#0C0F14', marginBottom: '12px' }}>
                      {art.title}
                    </h3>
                    <p style={{ color: '#5A6275', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {art.snippet}
                    </p>
                  </div>
                  <button
                    onClick={() => showToast(`Reading "${art.title}"... Full article unlocked.`)}
                    className="btn btn-secondary"
                    style={{ padding: '10px 16px', fontSize: '0.85rem' }}
                  >
                    <BookOpen size={16} />
                    <span>Read Article</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 3: Podcast */}
      {activeTab === 'podcast' && (
        <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {blueprintData.resources.podcasts.map((pod) => (
                <div
                  key={pod.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    flexWrap: 'wrap',
                    border: playingPodcast === pod.id ? '2px solid #C8F31D' : '1px solid #E4E7EE',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button
                      onClick={() => togglePodcast(pod.id)}
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        background: playingPodcast === pod.id ? '#C8F31D' : '#F4F6F9',
                        border: '1.5px solid #0C0F14',
                        color: '#0C0F14',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {playingPodcast === pod.id ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
                    </button>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#186AD3' }}>
                        {pod.ep} • Guest: {pod.guest}
                      </div>
                      <h4 style={{ fontSize: '1.2rem', color: '#0C0F14', marginTop: '4px', fontWeight: 800 }}>
                        {pod.title}
                      </h4>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#5A6275', fontWeight: 600 }}>{pod.duration}</span>
                    <button
                      onClick={() => togglePodcast(pod.id)}
                      className="btn btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                    >
                      {playingPodcast === pod.id ? 'Pause Clip' : 'Play Episode'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 4: Calculators */}
      {activeTab === 'calculators' && (
        <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
              {/* BMI & Body Comp Calculator */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid #E4E7EE',
                boxShadow: '0 6px 24px rgba(0,0,0,0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#186AD3', marginBottom: '12px' }}>
                  <Calculator size={22} />
                  <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.82rem' }}>Biometric Tool</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#0C0F14', marginBottom: '8px' }}>
                  Athlete Body Comp Calculator
                </h3>
                <p style={{ color: '#5A6275', fontSize: '0.88rem', marginBottom: '20px' }}>
                  Determine baseline body composition benchmarks for sprinting velocity and explosive force.
                </p>

                <form onSubmit={calculateBMI} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label>Height (Inches)</label>
                    <input
                      type="number"
                      value={calcHeight}
                      onChange={(e) => setCalcHeight(e.target.value)}
                      placeholder="e.g. 70 (5'10)"
                    />
                  </div>
                  <div>
                    <label>Body Weight (Lbs)</label>
                    <input
                      type="number"
                      value={calcWeight}
                      onChange={(e) => setCalcWeight(e.target.value)}
                      placeholder="e.g. 175"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '12px' }}>
                    Calculate Athletic Index
                  </button>
                </form>

                {bmiResult && (
                  <div style={{ marginTop: '20px', padding: '16px', background: '#FAFDE8', border: '1.5px solid #C8F31D', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#186AD3', fontWeight: 800 }}>
                      Index Result:
                    </div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '2rem', fontWeight: 900, color: '#0C0F14' }}>
                      BMI: {bmiResult.bmi}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#5A6275', fontWeight: 600 }}>
                      Classification: {bmiResult.status}
                    </div>
                  </div>
                )}
              </div>

              {/* Assessment Tool Card */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid #E4E7EE',
                boxShadow: '0 6px 24px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#186AD3', marginBottom: '12px' }}>
                    <Sparkles size={22} />
                    <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.82rem' }}>Interactive Quiz</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0C0F14', marginBottom: '8px' }}>
                    Athlete Readiness Assessment
                  </h3>
                  <p style={{ color: '#5A6275', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Evaluate your biomechanical readiness, training age, recovery protocols, and competitive timeline to determine program fit.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#0C0F14' }}>
                      <CheckCircle2 size={16} color="#186AD3" /> Takes under 60 seconds
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#0C0F14' }}>
                      <CheckCircle2 size={16} color="#186AD3" /> Instant algorithmic program match
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#0C0F14' }}>
                      <CheckCircle2 size={16} color="#186AD3" /> Free personalized report
                    </div>
                  </div>
                </div>

                <button
                  onClick={openAssessment}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px' }}
                >
                  <span>Launch Readiness Quiz</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
