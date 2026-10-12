import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, 
  Calendar, Building, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from '../components/SocialIcons';
import { blueprintData } from '../data/blueprintData';

export const ContactPage = ({ openConsultation, showToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Athlete',
    subject: '',
    message: '',
    bestTime: 'Afternoon'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      showToast('Please fill out all required fields (*)');
      return;
    }
    setSubmitted(true);
    showToast('Message sent! Our coaching team will reach out within 4 hours.');
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section style={{
        padding: '90px 0 65px',
        background: 'linear-gradient(135deg, #186AD3 0%, #2A7FE8 100%)',
        position: 'relative',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
          <div className="badge-pill" style={{ 
            marginBottom: '16px',
            background: '#C8F31D',
            color: '#0D0F15',
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '6px 18px'
          }}>
            DIRECT PERFORMANCE LINE
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 5.2vw, 4rem)', 
            color: '#FFFFFF', 
            marginBottom: '18px',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            lineHeight: 1.05
          }}>
            LET'S TALK ABOUT YOUR GOALS
          </h1>
          <p style={{ fontSize: '1.18rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}>
            Whether you have questions, want a private tour of our Atlanta lab, or are ready to schedule an initial combine assessment — we're here for you.
          </p>
        </div>
      </section>

      {/* Quick Action Bar (3 Big CTAs) */}
      <section style={{ padding: '32px 0', background: '#FFFFFF', borderBottom: '1px solid #E4E7EE' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            <button
              onClick={openConsultation}
              style={{
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                textAlign: 'left',
                background: '#FAF9F6',
                border: '1px solid #E4E7EE',
                borderRadius: '16px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#186AD3'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E4E7EE'}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#C8F31D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Calendar size={22} color="#0D0F15" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '1.02rem', fontFamily: 'var(--font-heading)' }}>
                  Book Free Consultation
                </div>
                <div style={{ fontSize: '0.82rem', color: '#5A6275' }}>1:1 athletic diagnostic meeting</div>
              </div>
            </button>

            <button
              onClick={openConsultation}
              style={{
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                textAlign: 'left',
                background: '#FAF9F6',
                border: '1px solid #E4E7EE',
                borderRadius: '16px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#186AD3'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E4E7EE'}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#C8F31D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Building size={22} color="#0D0F15" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '1.02rem', fontFamily: 'var(--font-heading)' }}>
                  Schedule Facility Tour
                </div>
                <div style={{ fontSize: '0.82rem', color: '#5A6275' }}>Walk our 10,000 sq ft turf lab</div>
              </div>
            </button>

            <a
              href={`tel:${blueprintData.brand.phone}`}
              style={{
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
                textAlign: 'left',
                background: '#FAF9F6',
                border: '1px solid #E4E7EE',
                borderRadius: '16px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#186AD3'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E4E7EE'}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#C8F31D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={22} color="#0D0F15" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '1.02rem', fontFamily: 'var(--font-heading)' }}>
                  Call Us Directly
                </div>
                <div style={{ fontSize: '0.82rem', color: '#5A6275' }}>{blueprintData.brand.phone}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section style={{ padding: '80px 0', background: '#FAF9F6' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}>
            {/* Contact Information Block */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: '#186AD3',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}>
                <MapPin size={14} />
                DIRECT CONTACT
              </div>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
                color: '#0C0F14', 
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                REACH OUR COACHING DESK
              </h2>
              <p style={{ color: '#5A6275', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '32px' }}>
                We respond to all athlete and parent inquiries within 4 business hours. You can also walk into our Atlanta performance facility during active operational windows.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                <div style={{
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(24, 106, 211, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} color="#186AD3" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#7D8699', fontWeight: 700, letterSpacing: '0.05em' }}>Location</div>
                    <div style={{ fontWeight: 700, color: '#0C0F14', fontSize: '0.95rem' }}>{blueprintData.brand.address}</div>
                  </div>
                </div>

                <div style={{
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(24, 106, 211, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} color="#186AD3" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#7D8699', fontWeight: 700, letterSpacing: '0.05em' }}>Direct Telephone</div>
                    <div style={{ fontWeight: 700, color: '#0C0F14', fontSize: '0.95rem' }}>{blueprintData.brand.phone}</div>
                  </div>
                </div>

                <div style={{
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(24, 106, 211, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} color="#186AD3" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#7D8699', fontWeight: 700, letterSpacing: '0.05em' }}>Electronic Mail</div>
                    <div style={{ fontWeight: 700, color: '#0C0F14', fontSize: '0.95rem' }}>{blueprintData.brand.email}</div>
                  </div>
                </div>

                <div style={{
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(24, 106, 211, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={20} color="#186AD3" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#7D8699', fontWeight: 700, letterSpacing: '0.05em' }}>Facility Hours</div>
                    <div style={{ fontWeight: 700, color: '#0C0F14', fontSize: '0.95rem' }}>{blueprintData.brand.hours}</div>
                    <div style={{ fontSize: '0.8rem', color: '#186AD3', fontWeight: 600, marginTop: '2px' }}>💬 {blueprintData.brand.chatHours}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#7D8699', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  Official Digital Handles
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { icon: InstagramIcon, label: '@SportsBlueprint' },
                    { icon: FacebookIcon, label: '/SportsBlueprint' },
                    { icon: YoutubeIcon, label: '/SportsBlueprint' },
                    { icon: TwitterIcon, label: '@SportsBlueprintHQ' }
                  ].map((soc, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E4E7EE',
                        padding: '9px 14px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#0C0F14'
                      }}
                    >
                      <soc.icon size={15} color="#186AD3" />
                      <span>{soc.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div>
              <div style={{
                background: '#FFFFFF',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid #E4E7EE',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
              }}>
                {!submitted ? (
                  <div>
                    <h3 style={{ 
                      fontSize: '1.7rem', 
                      color: '#0C0F14', 
                      marginBottom: '8px',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '-0.01em'
                    }}>
                      Send an Inquiry
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: '#5A6275', marginBottom: '24px' }}>
                      Our director or head speed coach will follow up with personalized guidance.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Jordan Miller"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: '#F8F9FB',
                            border: '1px solid #E4E7EE',
                            borderRadius: '10px',
                            fontSize: '0.95rem',
                            color: '#0C0F14'
                          }}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              background: '#F8F9FB',
                              border: '1px solid #E4E7EE',
                              borderRadius: '10px',
                              fontSize: '0.95rem',
                              color: '#0C0F14'
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="(404) 555-0182"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              background: '#F8F9FB',
                              border: '1px solid #E4E7EE',
                              borderRadius: '10px',
                              fontSize: '0.95rem',
                              color: '#0C0F14'
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                            I Am A:
                          </label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              background: '#F8F9FB',
                              border: '1px solid #E4E7EE',
                              borderRadius: '10px',
                              fontSize: '0.95rem',
                              color: '#0C0F14'
                            }}
                          >
                            <option>Athlete</option>
                            <option>Parent of Athlete</option>
                            <option>High School / Club Coach</option>
                            <option>School Administrator</option>
                            <option>Media / Scout</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                            Best Time to Reach You
                          </label>
                          <select
                            value={formData.bestTime}
                            onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              background: '#F8F9FB',
                              border: '1px solid #E4E7EE',
                              borderRadius: '10px',
                              fontSize: '0.95rem',
                              color: '#0C0F14'
                            }}
                          >
                            <option>Morning (8AM - 12PM)</option>
                            <option>Afternoon (12PM - 5PM)</option>
                            <option>Evening (5PM - 8PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Inquiring about Junior Elite speed program"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: '#F8F9FB',
                            border: '1px solid #E4E7EE',
                            borderRadius: '10px',
                            fontSize: '0.95rem',
                            color: '#0C0F14'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0C0F14', marginBottom: '6px' }}>
                          Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Describe the athlete's current goals, sport, and any specific questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: '#F8F9FB',
                            border: '1px solid #E4E7EE',
                            borderRadius: '10px',
                            fontSize: '0.95rem',
                            color: '#0C0F14',
                            resize: 'vertical'
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ padding: '14px', fontSize: '1rem', marginTop: '8px', justifyContent: 'center' }}
                      >
                        <span>Send Message</span>
                        <ArrowUpRight size={18} />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(200, 243, 29, 0.2)',
                      border: '2px solid #C8F31D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <CheckCircle2 size={34} color="#0C0F14" />
                    </div>
                    <h3 style={{ fontSize: '1.8rem', color: '#0C0F14', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
                      Message Dispatched!
                    </h3>
                    <p style={{ color: '#5A6275', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                      Thank you for contacting Sports Blueprint. Coach David Reeves and admissions will respond to <strong style={{ color: '#0C0F14' }}>{formData.email}</strong> promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary"
                      style={{ padding: '10px 24px' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Interactive Map Simulation */}
          <div style={{ marginTop: '60px' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #E4E7EE', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ position: 'relative', height: '340px', background: '#EAECEF' }}>
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
                  alt="Atlanta Facility Location Map"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EE',
                  padding: '22px 32px',
                  borderRadius: '16px',
                  boxShadow: '0 14px 40px rgba(0,0,0,0.12)',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    display: 'inline-block',
                    background: '#C8F31D',
                    color: '#0D0F15',
                    fontWeight: 800, 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    marginBottom: '8px'
                  }}>
                    Performance HQ
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0C0F14', fontFamily: 'var(--font-heading)' }}>
                    1250 Champion Drive, Suite 100
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#5A6275', marginTop: '4px' }}>
                    Atlanta, GA 30301 (Free Athlete Parking Available)
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
