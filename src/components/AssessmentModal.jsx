import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Trophy } from 'lucide-react';

export const AssessmentModal = ({ isOpen, onClose, onSelectProgram }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    ageGroup: '',
    primaryGoal: '',
    commitmentLevel: ''
  });
  const [recommendation, setRecommendation] = useState(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !answers.ageGroup) return;
    if (step === 2 && !answers.primaryGoal) return;
    
    if (step === 3) {
      // Calculate recommendation
      let rec = 'Junior Elite Program';
      if (answers.ageGroup === '8-12') rec = 'Youth Foundation Program';
      else if (answers.ageGroup === '18+' || answers.ageGroup === 'adult') rec = 'Adult Performance Program';
      else if (answers.commitmentLevel === 'elite') rec = 'Elite Athlete Program';
      else if (answers.primaryGoal === 'mind') rec = 'Mental Performance Bootcamp';
      
      setRecommendation(rec);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ ageGroup: '', primaryGoal: '', commitmentLevel: '' });
    setRecommendation(null);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px', padding: '36px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {step < 4 ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-volt)', marginBottom: '8px' }}>
              <Sparkles size={18} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Athletic Assessment • Step {step} of 3
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#FFFFFF' }}>
              {step === 1 && "What is the athlete's age bracket?"}
              {step === 2 && "What is the #1 athletic objective?"}
              {step === 3 && "What is your weekly training commitment?"}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Our performance algorithm analyzes athlete physiology, developmental readiness, and seasonal competition windows.
            </p>

            {/* Step 1 */}
            {step === 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: "Youth Athlete (Ages 8–12)", value: "8-12", sub: "Movement & Coordination" },
                  { label: "Junior Competitor (Ages 13–17)", value: "13-17", sub: "Speed, Strength & Combine" },
                  { label: "Adult Athlete (Ages 18+)", value: "18+", sub: "Power & Athletic Longevity" },
                  { label: "College / Pro Prospect", value: "pro", sub: "Recruiting & Max Velocity" }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers({ ...answers, ageGroup: opt.value })}
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      border: answers.ageGroup === opt.value ? '2px solid var(--accent-volt)' : '1px solid var(--border-card)',
                      background: answers.ageGroup === opt.value ? 'rgba(212, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{opt.sub}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: "Pure Speed & Agility", value: "speed", sub: "Drop 0.2s - 0.4s off 40-yd" },
                  { label: "Power & Strength Gains", value: "strength", sub: "Vertical jump & barbell force" },
                  { label: "Mental Toughness & Focus", value: "mind", sub: "Poise under pressure" },
                  { label: "College Recruiting Prep", value: "recruiting", sub: "Film, metrics, exposure" }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers({ ...answers, primaryGoal: opt.value })}
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      border: answers.primaryGoal === opt.value ? '2px solid var(--accent-volt)' : '1px solid var(--border-card)',
                      background: answers.primaryGoal === opt.value ? 'rgba(212, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{opt.sub}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  { label: "2 Days / Week (Foundational)", value: "casual", sub: "Great for multi-sport in-season athletes" },
                  { label: "3–4 Days / Week (Accelerated)", value: "dedicated", sub: "Optimal for off-season transformation" },
                  { label: "5 Days / Week + 1:1 Coaching (Elite Prospect)", value: "elite", sub: "Targeting D1 collegiate scholarships" }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers({ ...answers, commitmentLevel: opt.value })}
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      border: answers.commitmentLevel === opt.value ? '2px solid var(--accent-volt)' : '1px solid var(--border-card)',
                      background: answers.commitmentLevel === opt.value ? 'rgba(212, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{opt.sub}</div>
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px' }}>
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="btn btn-outline"
                  style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                >
                  Back
                </button>
              ) : <div />}

              <button
                onClick={handleNext}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <span>{step === 3 ? "Generate Blueprint" : "Next Step"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Step 4: Recommendation */
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(212, 255, 0, 0.15)',
              border: '2px solid var(--accent-volt)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 0 25px var(--accent-volt-glow)'
            }}>
              <Trophy size={32} color="var(--accent-volt)" />
            </div>

            <div className="badge-pill badge-volt" style={{ marginBottom: '12px' }}>
              Algorithmic Match: 98% Compatibility
            </div>

            <h3 style={{ fontSize: '2rem', marginBottom: '8px', color: '#FFFFFF' }}>
              Recommended: <span style={{ color: 'var(--accent-volt)' }}>{recommendation}</span>
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 28px' }}>
              Based on your age group, goals, and training frequency, this program offers the exact velocity protocols and coaching frequency to maximize athletic breakthroughs.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => {
                  onClose();
                  onSelectProgram(recommendation);
                }}
                className="btn btn-primary"
                style={{ padding: '14px 28px' }}
              >
                Enroll In This Program
              </button>
              <button
                onClick={resetQuiz}
                className="btn btn-secondary"
                style={{ padding: '14px 20px' }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
