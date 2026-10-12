import React, { useState } from 'react';
import { 
  Flame, ArrowUpRight, Mail, CheckCircle2, ShieldCheck, MapPin, Phone
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from './SocialIcons';
import { blueprintData } from '../data/blueprintData';

export const Footer = ({ setActivePage, showToast }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    showToast('Subscribed! Check your inbox for weekly training tips.');
    setNewsletterEmail('');
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E6E8ED',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: '40px',
      color: '#0C0F14'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          {/* Column 1 — Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div 
              onClick={() => handleNav('home')}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}
            >
              <div style={{
                width: '38px',
                height: '38px',
                background: '#0C0F14',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Flame size={20} color="var(--accent-volt)" />
              </div>
              <div style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 900,
                fontSize: '1.4rem',
                color: '#0C0F14'
              }}>
                SPORTS<span style={{ color: 'var(--accent-volt-text)' }}>BLUEPRINT</span>
              </div>
            </div>

            <p style={{ color: '#555E70', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              We don't just train athletes — we build complete champions. Developing physical speed, explosive power, and unshakeable mental poise since 2014.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
              {[
                { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
                { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={soc.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: '#F1F3F7',
                    border: '1px solid #E1E4EA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0C0F14',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#0C0F14';
                    e.currentTarget.style.borderColor = 'var(--accent-volt)';
                    e.currentTarget.style.background = 'var(--accent-volt)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#0C0F14';
                    e.currentTarget.style.borderColor = '#E1E4EA';
                    e.currentTarget.style.background = '#F1F3F7';
                  }}
                >
                  <soc.icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter Mini Form */}
            <form onSubmit={handleSubscribe}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0C0F14', marginBottom: '8px' }}>
                Join 3,000+ In The Blueprint Dispatch
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    fontSize: '0.85rem',
                    padding: '8px 12px',
                    background: '#F8F9FB',
                    border: '1px solid #D5DAE3'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'var(--accent-volt)',
                    color: '#0C0F14',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0 14px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '1.05rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0C0F14',
              marginBottom: '20px',
              borderLeft: '3px solid var(--accent-volt)',
              paddingLeft: '10px'
            }}>
              Core Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home Experience', id: 'home' },
                { label: 'Our Story & Mission', id: 'about' },
                { label: 'Training Programs', id: 'programs' },
                { label: 'Athletic Services', id: 'services' },
                { label: 'Science & Facilities', id: 'training' },
                { label: 'Proven Results & Stats', id: 'results' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#4B5565',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                      padding: 0
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#0C0F14'}
                    onMouseLeave={(e) => e.target.style.color = '#4B5565'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Athletes & Media */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '1.05rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0C0F14',
              marginBottom: '20px',
              borderLeft: '3px solid var(--accent-volt)',
              paddingLeft: '10px'
            }}>
              Athletes & Media
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Athlete Spotlights', id: 'athletes' },
                { label: 'World-Class Coaches', id: 'coaches' },
                { label: 'Reviews & Testimonials', id: 'testimonials' },
                { label: 'Training Video Vault', id: 'videos' },
                { label: 'Action Photo Gallery', id: 'photos' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#4B5565',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                      padding: 0
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#0C0F14'}
                    onMouseLeave={(e) => e.target.style.color = '#4B5565'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support & Facility */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '1.05rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0C0F14',
              marginBottom: '20px',
              borderLeft: '3px solid var(--accent-volt)',
              paddingLeft: '10px'
            }}>
              Facility & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#4B5565' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#0C0F14" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{blueprintData.brand.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#0C0F14" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 700, color: '#0C0F14' }}>{blueprintData.brand.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="#0C0F14" style={{ flexShrink: 0 }} />
                <span>{blueprintData.brand.email}</span>
              </div>

              <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => handleNav('registration')}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Register Now
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Brand Watermark Typography from Ace Tennis reference */}
        <div style={{
          textAlign: 'center',
          userSelect: 'none',
          padding: '30px 0 10px',
          borderTop: '1px solid #E6E8ED',
          overflow: 'hidden'
        }}>
          <div style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: 'clamp(3rem, 11vw, 10rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            background: 'linear-gradient(180deg, #C8F31D 0%, rgba(200, 243, 29, 0.25) 60%, rgba(200, 243, 29, 0.05) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase'
          }}>
            SPORTS BLUEPRINT
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          paddingTop: '20px',
          borderTop: '1px solid #EAECEF',
          fontSize: '0.82rem',
          color: '#6E7687'
        }}>
          <div>
            © 2026 Sports Blueprint. All Rights Reserved. Built for champions.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => showToast('Privacy Policy: All athlete and parental data is fully encrypted and never sold.')}>
              Privacy Policy
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => showToast('Terms of Use: Standard athletic training and facility participation agreements.')}>
              Terms of Use
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('resources')}>
              Sitemap & Resources
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
