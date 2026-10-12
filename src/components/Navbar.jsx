import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowUpRight, Phone, Award, 
  ChevronDown, ChevronRight, Flame, Camera, Video, 
  MessageSquare, BookOpen, Dumbbell, Users, Activity, Layers
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const Navbar = ({ activePage, setActivePage, openAssessment, openConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'about' | 'programs' | null
  const [mobileExpanded, setMobileExpanded] = useState({ about: true, programs: true });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeTop = activePage === 'home' && !scrolled;

  const aboutDropdownItems = [
    { id: 'about', label: 'About Us', desc: 'Our origin, 10-year legacy & mission', icon: Award },
    { id: 'photos', label: 'Photos', desc: 'Facility lab & high-octane action shots', icon: Camera },
    { id: 'videos', label: 'Videos', desc: 'Technique breakdowns & highlight vault', icon: Video },
    { id: 'testimonials', label: 'Testimonials', desc: 'Champion reviews & collegiate stories', icon: MessageSquare },
    { id: 'resources', label: 'Resources', desc: 'Athletic calculators & training standards', icon: BookOpen },
  ];

  const programsDropdownItems = [
    { id: 'programs', label: 'All Programs', desc: 'Youth foundation to high school elite', icon: Dumbbell },
    { id: 'athletes', label: 'Athletes', desc: 'Division I commits & scholarship roster', icon: Users },
    { id: 'coaches', label: 'Coaches', desc: 'Master CSCS staff & biomechanists', icon: Award },
    { id: 'training', label: 'Training', desc: 'Force plate lab & movement science', icon: Activity },
  ];

  const isAboutActive = ['about', 'photos', 'videos', 'testimonials', 'resources'].includes(activePage);
  const isProgramsActive = ['programs', 'athletes', 'coaches', 'training'].includes(activePage);

  return (
    <>
      {/* Clean Top Status Micro Bar (Shown on scroll or subpages) */}
      {!isHomeTop && (
        <div style={{
          background: '#0C0F14',
          padding: '7px 0',
          fontSize: '0.8rem',
          color: '#FFFFFF'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-volt)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-volt)', display: 'inline-block' }}></span>
                Fall 2026 Admissions Open
              </span>
              <span style={{ color: '#8E95A5' }} className="hidden-mobile">
                • Atlanta Athletic Development Lab
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <a href={`tel:${blueprintData.brand.phone}`} style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                <Phone size={12} color="var(--accent-volt)" />
                <span>{blueprintData.brand.phone}</span>
              </a>
              <button 
                onClick={openAssessment}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-volt)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Free Assessment <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header style={{
        position: isHomeTop ? 'absolute' : 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: isHomeTop ? 'transparent' : (scrolled ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF'),
        backdropFilter: isHomeTop ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: isHomeTop ? 'none' : 'blur(12px)',
        borderBottom: isHomeTop ? 'none' : '1px solid #E6E8ED',
        boxShadow: (!isHomeTop && scrolled) ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'all 0.25s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isHomeTop ? '86px' : '74px'
        }}>
          {/* Brand Logo: SPORTS BLUEPRINT */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            {/* Athletic Geometric Logo Mark */}
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: isHomeTop ? 'rgba(255,255,255,0.18)' : '#0C0F14',
              border: isHomeTop ? '1px solid rgba(255,255,255,0.35)' : 'none',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isHomeTop ? '#C8F31D' : 'var(--accent-volt)'
            }}>
              <Flame size={22} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.45rem',
                letterSpacing: '0.03em',
                lineHeight: 1,
                color: isHomeTop ? '#FFFFFF' : '#0C0F14'
              }}>
                SPORTS<span style={{ color: isHomeTop ? '#C8F31D' : '#186AD3' }}>BLUEPRINT</span>
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                color: isHomeTop ? 'rgba(255,255,255,0.85)' : '#656F84',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                Performance Academy
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {/* 1. HOME */}
            <button
              onClick={() => handleNavClick('home')}
              style={{
                background: 'transparent',
                border: 'none',
                color: isHomeTop ? '#FFFFFF' : (activePage === 'home' ? '#0C0F14' : '#454C5C'),
                padding: '8px 14px',
                fontSize: '0.92rem',
                fontWeight: activePage === 'home' ? 800 : 600,
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'all var(--transition-fast)',
                fontFamily: 'var(--font-sans)',
                opacity: isHomeTop ? (activePage === 'home' ? 1 : 0.92) : 1
              }}
              onMouseEnter={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = '#F1F3F7';
              }}
              onMouseLeave={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = 'transparent';
              }}
            >
              Home
            </button>

            {/* 2. ABOUT (DROPDOWN: Photos, Videos, Testimonials, Resources) */}
            <div 
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('about')}
                style={{
                  background: openDropdown === 'about' ? (isHomeTop ? 'rgba(255,255,255,0.14)' : '#F1F3F7') : 'transparent',
                  border: 'none',
                  color: isHomeTop ? '#FFFFFF' : (isAboutActive ? '#0C0F14' : '#454C5C'),
                  padding: '8px 14px',
                  fontSize: '0.92rem',
                  fontWeight: isAboutActive ? 800 : 600,
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all var(--transition-fast)',
                  fontFamily: 'var(--font-sans)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  opacity: isHomeTop ? (isAboutActive ? 1 : 0.92) : 1
                }}
              >
                <span>About</span>
                <ChevronDown 
                  size={14} 
                  style={{ 
                    transform: openDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0)', 
                    transition: 'transform 0.2s ease',
                    opacity: 0.7
                  }} 
                />
              </button>

              {/* Desktop Dropdown Card */}
              {openDropdown === 'about' && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '8px',
                    zIndex: 1100,
                    animation: 'fadeIn 0.15s ease-out'
                  }}
                >
                  <div style={{
                    width: '320px',
                    background: isHomeTop ? 'rgba(12, 18, 30, 0.95)' : '#FFFFFF',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: isHomeTop ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #E6E8ED',
                    borderRadius: '12px',
                    padding: '8px',
                    boxShadow: isHomeTop ? '0 20px 45px rgba(0, 0, 0, 0.5)' : '0 20px 45px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3px'
                  }}>
                    {aboutDropdownItems.map(item => {
                      const Icon = item.icon;
                      const isItemActive = activePage === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          style={{
                            background: isItemActive ? (isHomeTop ? 'rgba(200, 243, 29, 0.15)' : '#F1F4F9') : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '9px 12px',
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            width: '100%'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = isHomeTop ? 'rgba(255, 255, 255, 0.12)' : '#F5F7FB';
                            e.currentTarget.style.transform = 'translateX(3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isItemActive ? (isHomeTop ? 'rgba(200, 243, 29, 0.15)' : '#F1F4F9') : 'transparent';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            background: isHomeTop ? 'rgba(255, 255, 255, 0.1)' : '#EFF3F9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isHomeTop ? '#C8F31D' : '#186AD3',
                            flexShrink: 0
                          }}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <div style={{
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              color: isHomeTop ? '#FFFFFF' : '#0C0F14',
                              lineHeight: 1.2
                            }}>
                              {item.label}
                            </div>
                            <div style={{
                              fontSize: '0.74rem',
                              color: isHomeTop ? 'rgba(255, 255, 255, 0.65)' : '#6E7687',
                              marginTop: '2px'
                            }}>
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. PROGRAMS (DROPDOWN: Athletes, Coaches, Training, Services) */}
            <div 
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setOpenDropdown('programs')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('programs')}
                style={{
                  background: openDropdown === 'programs' ? (isHomeTop ? 'rgba(255,255,255,0.14)' : '#F1F3F7') : 'transparent',
                  border: 'none',
                  color: isHomeTop ? '#FFFFFF' : (isProgramsActive ? '#0C0F14' : '#454C5C'),
                  padding: '8px 14px',
                  fontSize: '0.92rem',
                  fontWeight: isProgramsActive ? 800 : 600,
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all var(--transition-fast)',
                  fontFamily: 'var(--font-sans)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  opacity: isHomeTop ? (isProgramsActive ? 1 : 0.92) : 1
                }}
              >
                <span>Programs</span>
                <ChevronDown 
                  size={14} 
                  style={{ 
                    transform: openDropdown === 'programs' ? 'rotate(180deg)' : 'rotate(0)', 
                    transition: 'transform 0.2s ease',
                    opacity: 0.7
                  }} 
                />
              </button>

              {/* Desktop Dropdown Card */}
              {openDropdown === 'programs' && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '8px',
                    zIndex: 1100,
                    animation: 'fadeIn 0.15s ease-out'
                  }}
                >
                  <div style={{
                    width: '320px',
                    background: isHomeTop ? 'rgba(12, 18, 30, 0.95)' : '#FFFFFF',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: isHomeTop ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #E6E8ED',
                    borderRadius: '12px',
                    padding: '8px',
                    boxShadow: isHomeTop ? '0 20px 45px rgba(0, 0, 0, 0.5)' : '0 20px 45px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3px'
                  }}>
                    {programsDropdownItems.map(item => {
                      const Icon = item.icon;
                      const isItemActive = activePage === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          style={{
                            background: isItemActive ? (isHomeTop ? 'rgba(200, 243, 29, 0.15)' : '#F1F4F9') : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '9px 12px',
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            width: '100%'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = isHomeTop ? 'rgba(255, 255, 255, 0.12)' : '#F5F7FB';
                            e.currentTarget.style.transform = 'translateX(3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isItemActive ? (isHomeTop ? 'rgba(200, 243, 29, 0.15)' : '#F1F4F9') : 'transparent';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            background: isHomeTop ? 'rgba(255, 255, 255, 0.1)' : '#EFF3F9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isHomeTop ? '#C8F31D' : '#186AD3',
                            flexShrink: 0
                          }}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <div style={{
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              color: isHomeTop ? '#FFFFFF' : '#0C0F14',
                              lineHeight: 1.2
                            }}>
                              {item.label}
                            </div>
                            <div style={{
                              fontSize: '0.74rem',
                              color: isHomeTop ? 'rgba(255, 255, 255, 0.65)' : '#6E7687',
                              marginTop: '2px'
                            }}>
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 4. SERVICES (Dedicated Top-Level Menu) */}
            <button
              onClick={() => handleNavClick('services')}
              style={{
                background: 'transparent',
                border: 'none',
                color: isHomeTop ? '#FFFFFF' : (activePage === 'services' ? '#0C0F14' : '#454C5C'),
                padding: '8px 14px',
                fontSize: '0.92rem',
                fontWeight: activePage === 'services' ? 800 : 600,
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'all var(--transition-fast)',
                fontFamily: 'var(--font-sans)',
                opacity: isHomeTop ? (activePage === 'services' ? 1 : 0.92) : 1
              }}
              onMouseEnter={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = '#F1F3F7';
              }}
              onMouseLeave={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = 'transparent';
              }}
            >
              Services
            </button>

            {/* 5. RESULTS */}
            <button
              onClick={() => handleNavClick('results')}
              style={{
                background: 'transparent',
                border: 'none',
                color: isHomeTop ? '#FFFFFF' : (activePage === 'results' ? '#0C0F14' : '#454C5C'),
                padding: '8px 14px',
                fontSize: '0.92rem',
                fontWeight: activePage === 'results' ? 800 : 600,
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'all var(--transition-fast)',
                fontFamily: 'var(--font-sans)',
                opacity: isHomeTop ? (activePage === 'results' ? 1 : 0.92) : 1
              }}
              onMouseEnter={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = '#F1F3F7';
              }}
              onMouseLeave={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = 'transparent';
              }}
            >
              Results
            </button>

            {/* 5. CONTACT */}
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                background: 'transparent',
                border: 'none',
                color: isHomeTop ? '#FFFFFF' : (activePage === 'contact' ? '#0C0F14' : '#454C5C'),
                padding: '8px 14px',
                fontSize: '0.92rem',
                fontWeight: activePage === 'contact' ? 800 : 600,
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'all var(--transition-fast)',
                fontFamily: 'var(--font-sans)',
                opacity: isHomeTop ? (activePage === 'contact' ? 1 : 0.92) : 1
              }}
              onMouseEnter={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = '#F1F3F7';
              }}
              onMouseLeave={(e) => {
                if (!isHomeTop) e.currentTarget.style.background = 'transparent';
              }}
            >
              Contact
            </button>
          </nav>

          {/* Right CTA Group (Start Your Journey >) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => handleNavClick('registration')}
              style={{
                background: '#FFFFFF',
                color: '#0C0F14',
                border: 'none',
                borderRadius: '999px',
                padding: '7px 7px 7px 18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: 800,
                fontSize: '0.92rem',
                cursor: 'pointer',
                boxShadow: isHomeTop ? '0 8px 24px rgba(0, 0, 0, 0.18)' : '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-sans)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>Start Your Journey</span>
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '4px',
                background: '#C8F31D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0C0F14'
              }}>
                <ChevronRight size={16} strokeWidth={3} />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: isHomeTop ? 'rgba(255,255,255,0.2)' : '#F1F3F7',
                border: isHomeTop ? '1px solid rgba(255,255,255,0.3)' : '1px solid #E1E4EA',
                color: isHomeTop ? '#FFFFFF' : '#0C0F14',
                borderRadius: '8px',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} color={isHomeTop ? "#FFFFFF" : "#0C0F14"} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with Accordions */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '86px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 999,
          padding: '20px',
          overflowY: 'auto',
          borderTop: '1px solid #E6E8ED',
          animation: 'fadeIn 0.2s ease-out',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* HOME */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: activePage === 'home' ? '#0C0F14' : '#F7F8FA',
              border: '1px solid #E4E7EE',
              color: activePage === 'home' ? '#FFFFFF' : '#0C0F14',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-condensed)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span>Home</span>
            <ArrowUpRight size={18} opacity={activePage === 'home' ? 1 : 0.4} />
          </button>

          {/* ABOUT ACCORDION */}
          <div style={{ border: '1px solid #E4E7EE', borderRadius: '8px', overflow: 'hidden' }}>
            <button
              onClick={() => setMobileExpanded(prev => ({ ...prev, about: !prev.about }))}
              style={{
                width: '100%',
                background: isAboutActive ? '#0C0F14' : '#F7F8FA',
                color: isAboutActive ? '#FFFFFF' : '#0C0F14',
                border: 'none',
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: 800,
                fontFamily: 'var(--font-condensed)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <span>About</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileExpanded.about ? 'rotate(180deg)' : 'rotate(0)', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
            </button>
            {mobileExpanded.about && (
              <div style={{ background: '#FFFFFF', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {aboutDropdownItems.map(item => {
                  const Icon = item.icon;
                  const isItemActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: isItemActive ? '#F1F4F9' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <Icon size={16} color={isItemActive ? '#186AD3' : '#6E7687'} />
                      <span style={{ fontSize: '0.9rem', fontWeight: isItemActive ? 800 : 600, color: '#0C0F14' }}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* PROGRAMS ACCORDION */}
          <div style={{ border: '1px solid #E4E7EE', borderRadius: '8px', overflow: 'hidden' }}>
            <button
              onClick={() => setMobileExpanded(prev => ({ ...prev, programs: !prev.programs }))}
              style={{
                width: '100%',
                background: isProgramsActive ? '#0C0F14' : '#F7F8FA',
                color: isProgramsActive ? '#FFFFFF' : '#0C0F14',
                border: 'none',
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: 800,
                fontFamily: 'var(--font-condensed)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <span>Programs</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileExpanded.programs ? 'rotate(180deg)' : 'rotate(0)', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
            </button>
            {mobileExpanded.programs && (
              <div style={{ background: '#FFFFFF', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {programsDropdownItems.map(item => {
                  const Icon = item.icon;
                  const isItemActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: isItemActive ? '#F1F4F9' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <Icon size={16} color={isItemActive ? '#186AD3' : '#6E7687'} />
                      <span style={{ fontSize: '0.9rem', fontWeight: isItemActive ? 800 : 600, color: '#0C0F14' }}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* SERVICES */}
          <button
            onClick={() => handleNavClick('services')}
            style={{
              background: activePage === 'services' ? '#0C0F14' : '#F7F8FA',
              border: '1px solid #E4E7EE',
              color: activePage === 'services' ? '#FFFFFF' : '#0C0F14',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-condensed)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span>Services</span>
            <ArrowUpRight size={18} opacity={activePage === 'services' ? 1 : 0.4} />
          </button>

          {/* RESULTS */}
          <button
            onClick={() => handleNavClick('results')}
            style={{
              background: activePage === 'results' ? '#0C0F14' : '#F7F8FA',
              border: '1px solid #E4E7EE',
              color: activePage === 'results' ? '#FFFFFF' : '#0C0F14',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-condensed)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span>Results</span>
            <ArrowUpRight size={18} opacity={activePage === 'results' ? 1 : 0.4} />
          </button>

          {/* CONTACT */}
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: activePage === 'contact' ? '#0C0F14' : '#F7F8FA',
              border: '1px solid #E4E7EE',
              color: activePage === 'contact' ? '#FFFFFF' : '#0C0F14',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-condensed)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span>Contact</span>
            <ArrowUpRight size={18} opacity={activePage === 'contact' ? 1 : 0.4} />
          </button>

          {/* CONTACT CARD */}
          <div style={{
            marginTop: '8px',
            padding: '16px',
            background: '#F1F3F7',
            border: '1px solid #E1E4EA',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0C0F14', fontWeight: 800 }}>
              <Phone size={16} color="var(--accent-volt-text)" />
              <span>{blueprintData.brand.phone}</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#4A5162', margin: 0 }}>
              {blueprintData.brand.address}
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
