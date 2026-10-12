import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, 
  Sparkles, Trophy, Calendar, Clock, AlertCircle 
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const RegistrationPage = ({ preselectedProgram, showToast }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Personal
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Male',
    email: '',
    phone: '',
    // Step 2: Athletic
    primarySport: 'Football',
    position: '',
    currentLevel: 'High School',
    experienceYears: '3-5 years',
    schoolTeam: '',
    // Step 3: Program & Schedule
    program: preselectedProgram || 'Junior Elite Program',
    startDate: '',
    trainingDays: ['Mon', 'Wed', 'Fri'],
    timePreference: 'Afternoon (4:00 PM - 6:00 PM)',
    // Step 4: Parent & Health & Waiver
    parentName: '',
    parentRelationship: 'Mother',
    parentEmail: '',
    parentPhone: '',
    medicalNotes: '',
    emergencyContact: '',
    emergencyPhone: '',
    heardAbout: 'Social Media',
    goalsNotes: '',
    agreeTerms: false,
    agreeWaiver: false,
    agreePhoto: false
  });

  const handleDayToggle = (day) => {
    if (formData.trainingDays.includes(day)) {
      setFormData({
        ...formData,
        trainingDays: formData.trainingDays.filter(d => d !== day)
      });
    } else {
      setFormData({
        ...formData,
        trainingDays: [...formData.trainingDays, day]
      });
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        showToast('Please fill out all required personal fields (*)');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.primarySport) {
        showToast('Please specify primary sport.');
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.program) {
        showToast('Please select a program.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.agreeWaiver) {
      showToast('Please check the required agreements (*)');
      return;
    }

    setIsSubmitted(true);
    showToast('Registration submitted successfully! Welcome to Sports Blueprint.');
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4FF00', '#FFFFFF', '#00F0FF', '#3B82F6']
    });
  };

  return (
    <div className="registration-page">
      {/* Page Hero */}
      <section style={{
        padding: '90px 0 50px',
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
            Official Athlete Enrollment
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#FFFFFF', marginBottom: '18px' }}>
            TAKE THE FIRST STEP <span style={{ color: '#C8F31D' }}>TOWARD YOUR BLUEPRINT</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
            Registration takes less than 3 minutes. Your transformation starts today.
          </p>
        </div>
      </section>

      {/* Main Registration Form Body */}
      <section style={{ padding: '60px 0 100px', background: '#FAF9F6' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'flex-start'
          }}>
            {/* Form Column */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '20px', border: '1px solid #E4E7EE', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                {!isSubmitted ? (
                  <div>
                    {/* Stepper Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '36px',
                      paddingBottom: '20px',
                      borderBottom: '1px solid #EAECEF'
                    }}>
                      {[
                        { num: 1, label: 'Personal' },
                        { num: 2, label: 'Athletic' },
                        { num: 3, label: 'Program' },
                        { num: 4, label: 'Waivers' }
                      ].map((s) => (
                        <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: currentStep >= s.num ? 'var(--accent-volt)' : '#F1F3F6',
                            color: '#0C0F14',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem'
                          }}>
                            {s.num}
                          </div>
                          <span style={{
                            fontSize: '0.82rem',
                            fontWeight: currentStep === s.num ? 800 : 600,
                            color: currentStep === s.num ? '#0C0F14' : '#8A92A6',
                            textTransform: 'uppercase'
                          }}>
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* STEP 1: Personal Information */}
                      {currentStep === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          <h3 style={{ fontSize: '1.4rem', color: '#0C0F14', marginBottom: '4px' }}>
                            Step 1: Athlete Personal Information
                          </h3>
                          <p style={{ fontSize: '0.88rem', color: '#4A5162', marginBottom: '12px' }}>
                            Tell us who is stepping onto the training turf.
                          </p>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>First Name *</label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Marcus"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              />
                            </div>
                            <div>
                              <label>Last Name *</label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Thompson"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              />
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>Date of Birth *</label>
                              <input
                                type="date"
                                required
                                value={formData.dob}
                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                              />
                            </div>
                            <div>
                              <label>Gender *</label>
                              <select
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                              >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer not to say</option>
                              </select>
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>Email Address *</label>
                              <input
                                type="email"
                                required
                                placeholder="athlete@domain.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              />
                            </div>
                            <div>
                              <label>Phone Number *</label>
                              <input
                                type="tel"
                                required
                                placeholder="(404) 555-0182"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 2: Athletic Information */}
                      {currentStep === 2 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          <h3 style={{ fontSize: '1.4rem', color: '#0C0F14', marginBottom: '4px' }}>
                            Step 2: Athletic Background & Objectives
                          </h3>
                          <p style={{ fontSize: '0.88rem', color: '#4A5162', marginBottom: '12px' }}>
                            We tailor our force vectors and conditioning directly to your competitive discipline.
                          </p>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>Primary Sport *</label>
                              <select
                                value={formData.primarySport}
                                onChange={(e) => setFormData({ ...formData, primarySport: e.target.value })}
                              >
                                <option>Football</option>
                                <option>Basketball</option>
                                <option>Track & Field / Sprinting</option>
                                <option>Soccer</option>
                                <option>Baseball / Softball</option>
                                <option>Tennis</option>
                                <option>Volleyball</option>
                                <option>Lacrosse</option>
                                <option>Other Sport</option>
                              </select>
                            </div>
                            <div>
                              <label>Position or Event</label>
                              <input
                                type="text"
                                placeholder="e.g. Wide Receiver / 100m Dash"
                                value={formData.position}
                                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                              />
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>Current Competition Level *</label>
                              <select
                                value={formData.currentLevel}
                                onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                              >
                                <option>Youth (Ages 8–12)</option>
                                <option>Middle School (Ages 12–14)</option>
                                <option>High School Junior Varsity</option>
                                <option>High School Varsity</option>
                                <option>College (NCAA / NAIA)</option>
                                <option>Adult / Master</option>
                                <option>Professional Competitor</option>
                              </select>
                            </div>
                            <div>
                              <label>Years of Athletic Experience</label>
                              <select
                                value={formData.experienceYears}
                                onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                              >
                                <option>Under 1 year (Beginner)</option>
                                <option>1–2 years</option>
                                <option>3–5 years</option>
                                <option>5+ years (Advanced)</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label>Current School or Club Team</label>
                            <input
                              type="text"
                              placeholder="e.g. Westside High School / Atlanta United Academy"
                              value={formData.schoolTeam}
                              onChange={(e) => setFormData({ ...formData, schoolTeam: e.target.value })}
                            />
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Program Selection */}
                      {currentStep === 3 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          <h3 style={{ fontSize: '1.4rem', color: '#0C0F14', marginBottom: '4px' }}>
                            Step 3: Program & Schedule Preferences
                          </h3>
                          <p style={{ fontSize: '0.88rem', color: '#4A5162', marginBottom: '12px' }}>
                            Select the curriculum and weekly training availability that suits your athlete.
                          </p>

                          <div>
                            <label>Program of Interest *</label>
                            <select
                              value={formData.program}
                              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                            >
                              <option>Youth Foundation Program (Ages 8–12) — $149/mo</option>
                              <option>Junior Elite Program (Ages 13–17) — $199/mo</option>
                              <option>Adult Performance Program (Ages 18+) — $179/mo</option>
                              <option>Elite Athlete Program (Custom Pricing)</option>
                              <option>Sport-Specific Seasonal Camps — $299-$499</option>
                              <option>Mental Performance Bootcamp — $99</option>
                            </select>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>Preferred Start Date *</label>
                              <input
                                type="date"
                                required
                                value={formData.startDate}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                              />
                            </div>
                            <div>
                              <label>Training Time Preference</label>
                              <select
                                value={formData.timePreference}
                                onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                              >
                                <option>Morning (6:30 AM - 9:00 AM)</option>
                                <option>Afternoon (4:00 PM - 6:00 PM)</option>
                                <option>Evening (6:30 PM - 8:30 PM)</option>
                                <option>Weekend Mornings (Sat 8:00 AM)</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label>Preferred Training Days (Select all available)</label>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '6px' }}>
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => {
                                const isSelected = formData.trainingDays.includes(day);
                                return (
                                  <button
                                    key={day}
                                    type="button"
                                    onClick={() => handleDayToggle(day)}
                                    style={{
                                      padding: '10px 18px',
                                      borderRadius: '8px',
                                      border: isSelected ? '2px solid #0C0F14' : '1px solid #E4E7EE',
                                      background: isSelected ? '#C8F31D' : '#F4F6F9',
                                      color: '#0C0F14',
                                      fontWeight: 800,
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease'
                                    }}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 4: Parent & Health & Agreements */}
                      {currentStep === 4 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          <h3 style={{ fontSize: '1.4rem', color: '#0C0F14', marginBottom: '4px' }}>
                            Step 4: Parent Info, Health & Agreements
                          </h3>
                          <p style={{ fontSize: '0.88rem', color: '#4A5162', marginBottom: '12px' }}>
                            Safety is our priority. Please supply emergency details and complete the waivers.
                          </p>

                          <div style={{
                            background: '#F8F9FB',
                            padding: '18px',
                            borderRadius: '12px',
                            border: '1px solid #E4E7EE'
                          }}>
                            <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#186AD3', marginBottom: '10px' }}>
                              Parent/Guardian Details (If athlete is under 18)
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                              <div>
                                <label>Parent/Guardian Name</label>
                                <input
                                  type="text"
                                  placeholder="e.g. Sandra Thompson"
                                  value={formData.parentName}
                                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                />
                              </div>
                              <div>
                                <label>Parent Phone</label>
                                <input
                                  type="tel"
                                  placeholder="(404) 555-0199"
                                  value={formData.parentPhone}
                                  onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label>Emergency Contact Name *</label>
                              <input
                                type="text"
                                required
                                placeholder="Contact Name"
                                value={formData.emergencyContact}
                                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                              />
                            </div>
                            <div>
                              <label>Emergency Contact Phone *</label>
                              <input
                                type="tel"
                                required
                                placeholder="(404) 555-0000"
                                value={formData.emergencyPhone}
                                onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                              />
                            </div>
                          </div>

                          <div>
                            <label>Any Past Injuries or Medical Conditions?</label>
                            <textarea
                              rows={2}
                              placeholder="e.g. Left hamstring strain 4 months ago, asthma (inhaler carried)"
                              value={formData.medicalNotes}
                              onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                            />
                          </div>

                          <div>
                            <label>How Did You Hear About Us?</label>
                            <select
                              value={formData.heardAbout}
                              onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
                            >
                              <option>Social Media (Instagram / TikTok)</option>
                              <option>Google Search</option>
                              <option>Friend or Teammate Referral</option>
                              <option>High School Coach Recommendation</option>
                              <option>Tournament or Combine Event</option>
                              <option>Other</option>
                            </select>
                          </div>

                          {/* Agreements Checkboxes */}
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            background: '#F8F9FA',
                            padding: '18px',
                            borderRadius: '12px',
                            border: '1px solid #E4E7EE',
                            marginTop: '8px'
                          }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'none', cursor: 'pointer', color: '#0C0F14' }}>
                              <input
                                type="checkbox"
                                required
                                checked={formData.agreeTerms}
                                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                                style={{ width: '18px', height: '18px', accentColor: '#186AD3' }}
                              />
                              <span>I agree to the <strong>Terms & Conditions</strong> and athlete code of conduct *</span>
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'none', cursor: 'pointer', color: '#0C0F14' }}>
                              <input
                                type="checkbox"
                                required
                                checked={formData.agreeWaiver}
                                onChange={(e) => setFormData({ ...formData, agreeWaiver: e.target.checked })}
                                style={{ width: '18px', height: '18px', accentColor: '#186AD3' }}
                              />
                              <span>I agree to the standard <strong>Athletic Participation Liability Waiver</strong> *</span>
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'none', cursor: 'pointer', color: '#5A6275' }}>
                              <input
                                type="checkbox"
                                checked={formData.agreePhoto}
                                onChange={(e) => setFormData({ ...formData, agreePhoto: e.target.checked })}
                                style={{ width: '18px', height: '18px', accentColor: '#186AD3' }}
                              />
                              <span>I consent to photo/video recording for biomechanics analysis and promotional use</span>
                            </label>
                          </div>
                        </div>
                      )}

                      {/* Navigation buttons */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '36px',
                        paddingTop: '20px',
                        borderTop: '1px solid #EAECEF'
                      }}>
                        {currentStep > 1 ? (
                          <button
                            type="button"
                            onClick={() => setCurrentStep(currentStep - 1)}
                            className="btn btn-secondary"
                            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
                          >
                            <ArrowLeft size={16} />
                            <span>Previous</span>
                          </button>
                        ) : <div />}

                        {currentStep < 4 ? (
                          <button
                            type="button"
                            onClick={handleNext}
                            className="btn btn-primary"
                            style={{ padding: '12px 28px', fontSize: '0.95rem' }}
                          >
                            <span>Continue to Step {currentStep + 1}</span>
                            <ArrowRight size={16} />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ padding: '14px 36px', fontSize: '1.05rem' }}
                          >
                            <span>Complete Registration</span>
                            <CheckCircle2 size={18} />
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Confirmed Success State matching the prompt */
                  <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: '#C8F31D',
                      border: '2px solid #0C0F14',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px'
                    }}>
                      <Trophy size={40} color="#0C0F14" />
                    </div>

                    <div style={{
                      display: 'inline-block',
                      background: '#C8F31D',
                      color: '#0C0F14',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '14px'
                    }}>
                      Official Enrollment Confirmed
                    </div>

                    <h2 style={{ fontSize: '2.4rem', color: '#0C0F14', marginBottom: '14px' }}>
                      🎉 Welcome to the Blueprint Family!
                    </h2>

                    <blockquote style={{
                      maxWidth: '560px',
                      margin: '0 auto 32px',
                      color: '#4A5162',
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      background: '#F8F9FB',
                      padding: '20px 24px',
                      borderRadius: '12px',
                      border: '1px solid #E4E7EE'
                    }}>
                      "You've taken the first step toward becoming the athlete you're meant to be. A member of our team will contact you within 24 hours to confirm your spot and answer any questions."
                    </blockquote>

                    {/* Registration Summary Card */}
                    <div style={{
                      maxWidth: '500px',
                      margin: '0 auto 32px',
                      textAlign: 'left',
                      background: '#F4F6F9',
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid #E4E7EE',
                      fontSize: '0.88rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E2E6EC' }}>
                        <span style={{ color: '#5A6275' }}>Athlete Name:</span>
                        <strong style={{ color: '#0C0F14' }}>{formData.firstName} {formData.lastName}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E2E6EC' }}>
                        <span style={{ color: '#5A6275' }}>Enrolled Program:</span>
                        <strong style={{ color: '#186AD3' }}>{formData.program}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E2E6EC' }}>
                        <span style={{ color: '#5A6275' }}>Sport / Position:</span>
                        <strong style={{ color: '#0C0F14' }}>{formData.primarySport} {formData.position && `(${formData.position})`}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                        <span style={{ color: '#5A6275' }}>Confirmation Status:</span>
                        <strong style={{ color: '#059669' }}>Active • Free Assessment Scheduled</strong>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-secondary"
                      style={{ padding: '12px 28px' }}
                    >
                      Register Another Athlete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Trust Signals matching the prompt */}
            <div>
              <div style={{
                background: '#FFFFFF',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid #E4E7EE',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: '#0C0F14', marginBottom: '20px', borderLeft: '4px solid #C8F31D', paddingLeft: '12px' }}>
                  The Blueprint Guarantee
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: "No commitment required to start", desc: "Test the training waters with total confidence." },
                    { label: "Free initial assessment included", desc: "Comprehensive force plate & speed gate evaluation." },
                    { label: "Certified coaches", desc: "NSCA-CSCS and USATF Olympic-track staff." },
                    { label: "Flexible scheduling", desc: "Morning, afternoon, and weekend slots available." },
                    { label: "Money-back guarantee", desc: "100% refund policy within the first 2 weeks." }
                  ].map((signal, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                      <CheckCircle2 size={20} color="#186AD3" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0C0F14' }}>{signal.label}</div>
                        <div style={{ fontSize: '0.8rem', color: '#5A6275', marginTop: '2px' }}>{signal.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '28px',
                  background: '#F8F9FB',
                  padding: '18px',
                  borderRadius: '12px',
                  border: '1px solid #E4E7EE'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#186AD3', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Need Immediate Help?
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#5A6275' }}>
                    Call admissions directly at <strong style={{ color: '#0C0F14' }}>{blueprintData.brand.phone}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
