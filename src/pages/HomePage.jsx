import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Play, Trophy, Users, Award, Sparkles, 
  Dumbbell, Brain, Activity, ShieldCheck, ChevronRight, Star,
  TrendingUp, ArrowRight, ArrowLeft, Zap, Target, Plus, Minus, Calendar, Check
} from 'lucide-react';
import { blueprintData } from '../data/blueprintData';

export const HomePage = ({ setActivePage, onOpenVideo, openAssessment }) => {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState('after');
  const [openFaq, setOpenFaq] = useState(null);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Auto-scroll hero slider cards every 4.5 seconds (pauses on user hover)
  useEffect(() => {
    if (isSliderPaused) return;
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSliderPaused]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Swift Ease Intersection Observer for section transitions on scroll
  useEffect(() => {
    const elements = document.querySelectorAll('.section-swift-ease');
    if (!elements.length) return;

    // Immediately mark sections already visible in the viewport
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add('is-visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroSlides = [
    {
      subtitle: '— Established 2014 • Atlanta, GA',
      title: 'Where Elite Training Meets Real Results',
      desc: "Sports Blueprint is the premier development platform. We don't just train athletes — we build complete champions."
    },
    {
      subtitle: '— 500+ Complete Champions',
      title: '120+ Championship Titles & Counting',
      desc: 'Science-backed athletic development from youth foundation to collegiate scholarship preparation.'
    },
    {
      subtitle: '— High-Performance Lab',
      title: 'Biomechanical Force & Speed Diagnostics',
      desc: '10,000 sq ft turf, force plates, laser velocity tracking, and master CSCS coach mentorship.'
    }
  ];

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setHeroSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setHeroSlideIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "How do I get started with Sports Blueprint?",
      a: "Getting started begins with our complimentary initial athletic assessment. We analyze speed mechanics, baseline strength, and movement patterns to place the athlete in the optimal program."
    },
    {
      q: "What age groups do you train?",
      a: "We train athletes ages 8 and older, spanning Youth Foundation (ages 8–12), Junior Elite (ages 13–17), and Adult Performance (ages 18+) through collegiate prospects."
    },
    {
      q: "Are the training programs sport-specific?",
      a: "Yes. While fundamental velocity and force production apply across disciplines, each program is periodized and customized to your specific sport and positional movement vectors."
    },
    {
      q: "What is your coach-to-athlete ratio?",
      a: "We maintain a strict maximum ratio of 1:6 for youth and junior group sessions to ensure individual biomechanical feedback and focused mentorship."
    },
    {
      q: "Do you offer collegiate recruiting support?",
      a: "Yes. Our Elite Athlete program includes film breakdown, combine profiling, and direct networking with NCAA, NAIA, and junior college coaches."
    }
  ];

  // ================= SMOOTH MULTI-LAYER PARALLAX CALCULATIONS =================
  // 1. Hero section parallax
  const heroScroll = Math.min(scrollY, 850);
  const athleteShiftX = heroScroll * 0.44; 
  const athleteShiftY = -heroScroll * 0.12; 
  const athleteTilt = Math.min(heroScroll * 0.006, 3.2);
  const textParallaxX = -heroScroll * 0.08;
  const textParallaxY = heroScroll * 0.18;
  const heroBgParallaxY = heroScroll * 0.22;
  const heroDotParallaxY = heroScroll * 0.12;
  const heroCardParallaxY = heroScroll * 0.14;

  // 2. Bento Grid image shifts (around scroll 600 - 1300)
  const bentoImgShift1 = Math.max(-45, Math.min(45, (scrollY - 750) * 0.1));
  const bentoImgShift2 = Math.max(-40, Math.min(40, (750 - scrollY) * 0.08));

  // 3. Section 3 Watermark horizontal glide (around scroll 1200 - 2400)
  const watermarkShift = (scrollY - 1600) * 0.25;

  // 4. Section 5 Court backdrop parallax (around scroll 2300 - 3200)
  const courtImgShift = Math.max(-55, Math.min(55, (scrollY - 2600) * 0.11));

  // 5. Section 7 Testimonials & Stamp (around scroll 3200 - 4200)
  const stampRotation = -15 + (scrollY * 0.035);
  const testimonialImgShift = Math.max(-35, Math.min(35, (scrollY - 3400) * 0.08));

  return (
    <div className="homepage-clean-root" style={{ background: '#FAF9F6' }}>
      {/* ================= HERO SECTION (PURE HTML/CSS CODE WITH REAL TEXT & ATHLETE CUTOUT) ================= */}
      <section 
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '94vh',
          height: 'clamp(640px, 94vh, 920px)',
          background: '#166ED3 url("/sky-backdrop.jpg") center bottom / cover no-repeat',
          backgroundPosition: `center calc(100% + ${heroBgParallaxY}px)`,
          overflow: 'hidden',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-position 0.08s ease-out'
        }}
        aria-label="Sports Blueprint Build Champions Hero"
      >
        {/* Subtle crisp dot matrix overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.45) 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
            transform: `translateY(${heroDotParallaxY}px)`,
            transition: 'transform 0.08s ease-out',
            willChange: 'transform',
            pointerEvents: 'none',
            zIndex: 2,
            opacity: 0.55
          }} 
        />

        {/* REAL HTML GIGANTIC TYPOGRAPHY: BUILD CHAMPIONS. (Subtle counter-parallax) */}
        <div 
          className="hero-giant-text-container"
          style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: `translate(calc(-50% + ${textParallaxX}px), calc(-50% + ${textParallaxY}px))`,
            transition: 'transform 0.08s cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'transform',
            width: '100%',
            textAlign: 'center',
            zIndex: 3,
            userSelect: 'none',
            pointerEvents: 'none',
            padding: '0 20px'
          }}
        >
          <div style={{
            fontSize: 'clamp(0.78rem, 1.3vw, 1.1rem)',
            fontWeight: 800,
            letterSpacing: '0.24em',
            color: '#C8F31D',
            textTransform: 'uppercase',
            marginBottom: '8px',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)'
          }}>
            SHAPE FUTURES • DEFINE LEGACY
          </div>
          <h1 style={{
            fontFamily: '"Bebas Neue", "Anton", "Barlow Condensed", sans-serif',
            fontSize: 'clamp(4.2rem, 12.5vw, 12.8rem)',
            fontWeight: 900,
            letterSpacing: '0.025em',
            lineHeight: 0.85,
            color: '#FFFFFF',
            margin: 0,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            textShadow: '0 8px 32px rgba(10, 45, 110, 0.25)'
          }}>
            BUILD CHAMPIONS.
          </h1>
        </div>

        {/* REAL FOREGROUND ATHLETE CUTOUT LAYER (Dynamic Sprint Parallax across the screen) */}
        <div 
          className="hero-athlete-layer"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: `translate(calc(-46% + ${athleteShiftX}px), ${athleteShiftY}px) rotate(${athleteTilt}deg)`,
            transition: 'transform 0.06s ease-out',
            willChange: 'transform',
            transformOrigin: 'bottom center',
            zIndex: 4,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <img 
            src="/athlete-sprint.png"
            alt="Sports Blueprint Elite Athletic Champion in Motion"
            className="hero-athlete-img"
            style={{
              height: '100%',
              width: 'auto',
              maxHeight: '100%',
              objectFit: 'contain',
              filter: `drop-shadow(${Math.round(-athleteShiftX * 0.08)}px ${Math.round(18 + heroScroll * 0.03)}px 40px rgba(8, 30, 75, 0.35))`
            }}
          />
        </div>

        {/* Interactive Floating Glass Card & Slider Buttons (Bottom-Left) */}
        <div 
          className="hero-floating-card-container"
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: 'max(24px, calc((100vw - 1280px) / 2 + 24px))',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '340px',
            transform: `translateY(${heroCardParallaxY}px)`,
            transition: 'transform 0.08s ease-out',
            willChange: 'transform'
          }}
        >
          <div 
            style={{
              background: 'rgba(12, 18, 30, 0.45)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              borderRadius: '14px',
              padding: '18px 20px',
              color: '#FFFFFF',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.22)',
              transition: 'all 0.25s ease',
              minHeight: '185px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div key={heroSlideIndex} className="hero-slide-content">
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#C8F31D',
                marginBottom: '5px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                {heroSlides[heroSlideIndex].subtitle}
              </div>
              <div style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                lineHeight: 1.25,
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em',
                marginBottom: '6px'
              }}>
                {heroSlides[heroSlideIndex].title}
              </div>
              <p style={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.45,
                margin: '0 0 14px 0'
              }}>
                {heroSlides[heroSlideIndex].desc}
              </p>
            </div>

            {/* CTAs inside card */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: 'auto' }}>
              <button
                onClick={() => handleNav('registration')}
                style={{
                  background: '#C8F31D',
                  color: '#0C0F14',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Start Journey</span>
                <ArrowUpRight size={13} />
              </button>

              <button
                onClick={() => onOpenVideo(blueprintData.videos[0])}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '6px',
                  padding: '7px 12px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              >
                <Play size={11} fill="#FFFFFF" />
                <span>Watch Story</span>
              </button>
            </div>
          </div>

          {/* Slider Arrow Navigation Controls [ ← ] [ → ] + Progress Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Highlight"
              style={{
                width: '36px',
                height: '36px',
                background: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0C0F14',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.14)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C8F31D';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={handleNextSlide}
              aria-label="Next Highlight"
              style={{
                width: '36px',
                height: '36px',
                background: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0C0F14',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.14)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C8F31D';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowRight size={16} />
            </button>

            {/* Subtle Progress Pill Dots */}
            <div style={{ display: 'flex', gap: '6px', marginLeft: '6px', alignItems: 'center' }}>
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHeroSlideIndex(idx);
                  }}
                  aria-label={`Go to highlight slide ${idx + 1}`}
                  style={{
                    width: heroSlideIndex === idx ? '22px' : '7px',
                    height: '6px',
                    borderRadius: '3px',
                    background: heroSlideIndex === idx ? '#C8F31D' : 'rgba(255, 255, 255, 0.45)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    boxShadow: heroSlideIndex === idx ? '0 0 8px rgba(200, 243, 29, 0.6)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BENTO GRID "BUILDING CHAMPIONS ON AND OFF THE COURT" ================= */}
      <section className="section-swift-ease" style={{ padding: '90px 0', background: '#FFFFFF', borderBottom: '1px solid #E6E8ED' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start',
            marginBottom: '48px'
          }}>
            <div>
              <div className="section-eyebrow">
                FOUNDATION & IMPACT
              </div>
              <h2 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 900,
                color: '#0C0F14',
                lineHeight: 1.04,
                letterSpacing: '0.01em'
              }}>
                BUILDING CHAMPIONS ON AND OFF THE TURF
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', color: '#4A5162', lineHeight: 1.7, marginBottom: '16px' }}>
                Sports Blueprint was founded in 2014 by former collegiate competitors with a single mission: to give dedicated athletes access to the highest tier of sports science, movement mastery, and mental conditioning.
              </p>
              <button
                onClick={() => handleNav('about')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0C0F14',
                  fontWeight: 800,
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: 0
                }}
                className="link-arrow"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Bento Collage inspired by reference */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}>
            {/* Card 1: Main Athlete Portrait with glass stat banner */}
            <div style={{
              gridColumn: 'span 6',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              minHeight: '440px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }} className="bento-col-12">
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1000&q=80"
                alt="Elite athlete training"
                style={{ 
                  width: '100%', 
                  height: '114%', 
                  position: 'absolute',
                  top: '-7%',
                  left: 0,
                  objectFit: 'cover',
                  transform: `translateY(${bentoImgShift1}px) scale(1.05)`,
                  transition: 'transform 0.08s ease-out',
                  willChange: 'transform'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(12,15,20,0.92) 100%)',
                padding: '30px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                color: '#FFFFFF'
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '2.5rem', fontWeight: 900, color: '#C8F31D', lineHeight: 1 }}>
                    500+
                  </div>
                  <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.8)' }}>
                    Athletes Developed
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                    25+
                  </div>
                  <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.8)' }}>
                    Certified Specialists
                  </div>
                </div>
                <button
                  onClick={() => handleNav('athletes')}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: '#C8F31D',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ArrowUpRight size={20} color="#0C0F14" />
                </button>
              </div>
            </div>

            {/* Card 2: Secondary Action Photo */}
            <div style={{
              gridColumn: 'span 3',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              minHeight: '440px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }} className="bento-col-12">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
                alt="Track sprinter accelerating"
                style={{ 
                  width: '100%', 
                  height: '114%', 
                  position: 'absolute',
                  top: '-7%',
                  left: 0,
                  objectFit: 'cover',
                  transform: `translateY(${bentoImgShift2}px) scale(1.05)`,
                  transition: 'transform 0.08s ease-out',
                  willChange: 'transform'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: '#FFFFFF',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#0C0F14',
                fontFamily: 'var(--font-condensed)',
                textTransform: 'uppercase'
              }}>
                Speed Lab
              </div>
            </div>

            {/* Card 3: Big Signature Chartreuse Lime Stat Block matching reference */}
            <div style={{
              gridColumn: 'span 3',
              background: '#C8F31D',
              borderRadius: '16px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#0C0F14',
              boxShadow: '0 8px 30px rgba(200, 243, 29, 0.3)'
            }} className="bento-col-12">
              <div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '6px' }}>
                  10+
                </div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '24px' }}>
                  Years of<br />Excellence
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0C0F14' }} />
                    <span>Dedicated Speed & Force Lab</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0C0F14' }} />
                    <span>Periodized LTAD Programming</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0C0F14' }} />
                    <span>Collegiate Recruiting Advisory</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleNav('programs')}
                className="btn btn-dark"
                style={{ width: '100%', marginTop: '32px', padding: '12px', fontSize: '0.95rem' }}
              >
                <span>View Programs</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: TRAINING PROGRAMS (HORIZONTAL CARDS WITH CLEAN EDGES) ================= */}
      <section className="section-swift-ease" style={{ padding: '90px 0', background: '#F8F9FA', position: 'relative', overflow: 'hidden' }}>
        {/* Dynamic Architectural Background Typographic Watermark (Glide Parallax) */}
        <div 
          style={{
            position: 'absolute',
            top: '25px',
            left: 0,
            width: '240%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            userSelect: 'none'
          }}
        >
          <div style={{
            fontFamily: '"Bebas Neue", "Anton", sans-serif',
            fontSize: 'clamp(6rem, 14vw, 13rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            color: 'rgba(12, 15, 20, 0.032)',
            whiteSpace: 'nowrap',
            lineHeight: 0.85,
            transform: `translateX(${watermarkShift}px)`,
            transition: 'transform 0.08s ease-out',
            willChange: 'transform'
          }}>
            SPORTS BLUEPRINT • SPEED & AGILITY • FORCE & VELOCITY • COMPLETE CHAMPIONS
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <div className="section-eyebrow">DEVELOPMENT TRACKS</div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: '#0C0F14' }}>
                CURRICULUMS DESIGNED FOR EVERY LEVEL
              </h2>
            </div>
            <button
              onClick={() => handleNav('programs')}
              className="btn btn-secondary"
              style={{ padding: '12px 24px' }}
            >
              <span>Explore All 6 Programs</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {blueprintData.featuredPrograms.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                className="clean-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ position: 'relative', height: '210px' }}>
                  <img
                    src={prog.image}
                    alt={prog.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: '#0C0F14',
                    color: '#C8F31D',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-condensed)',
                    textTransform: 'uppercase'
                  }}>
                    {prog.badge}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#667085', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                      {prog.age} • {prog.duration}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', color: '#0C0F14', marginBottom: '10px' }}>
                      {prog.name}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#4A5162', lineHeight: 1.55, marginBottom: '20px' }}>
                      {prog.desc}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid #EAECEF'
                  }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.8rem', fontWeight: 900, color: '#0C0F14' }}>
                        {prog.price}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: '#858E9E' }}>/{prog.period}</span>
                    </div>

                    <button
                      onClick={() => handleNav('registration')}
                      className="btn btn-primary"
                      style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                    >
                      <span>Enroll</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: UPCOMING COMBINES & CALENDAR ================= */}
      <section id="combines-section" className="section-swift-ease" style={{ padding: '70px 0', background: '#FFFFFF', borderTop: '1px solid #E6E8ED', borderBottom: '1px solid #E6E8ED' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '28px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.85rem', fontWeight: 800, color: '#1C6FE0', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Seasonal Calendar
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#0C0F14', marginTop: '2px' }}>
                Upcoming Combines & Showcases
              </h3>
            </div>
            <button
              onClick={() => handleNav('contact')}
              className="btn btn-outline"
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <span>View Full Calendar</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { title: "Spring Speed & Combine Showcase", date: "April 18, 2026", type: "Combine Trial" },
              { title: "Junior All-Star Football Clinic", date: "May 02, 2026", type: "Camp Intensive" },
              { title: "Summer Elite Performance Camp", date: "June 14–26, 2026", type: "2-Week Intensive" },
              { title: "Regional Track & Sprint Trials", date: "July 11, 2026", type: "Medal Invitational" }
            ].map((evt, i) => (
              <div
                key={i}
                style={{
                  background: '#F8F9FA',
                  border: '1px solid #E4E7EE',
                  padding: '20px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#1C6FE0', fontWeight: 800, textTransform: 'uppercase' }}>
                    {evt.type}
                  </div>
                  <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '1rem', marginTop: '2px' }}>
                    {evt.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#687285', marginTop: '4px' }}>
                    {evt.date}
                  </div>
                </div>
                <ArrowRight size={18} color="#0C0F14" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: MEMBERSHIP PLANS WITH ATHLETIC COURT BACKDROP ================= */}
      <section id="membership-section" className="section-swift-ease" style={{ padding: '90px 0', background: '#F8F9FA' }}>
        <div className="container">
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
          }}>
            {/* Background Court Photo with Smooth Window Parallax */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
                alt="Athletic training court"
                style={{ 
                  width: '100%', 
                  height: '124%', 
                  position: 'absolute',
                  top: '-12%',
                  left: 0,
                  objectFit: 'cover',
                  transform: `translateY(${courtImgShift}px) scale(1.04)`,
                  transition: 'transform 0.08s ease-out',
                  willChange: 'transform'
                }}
              />
            </div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(12,15,20,0.92) 0%, rgba(12,15,20,0.8) 50%, rgba(12,15,20,0.6) 100%)'
            }} />

            {/* Overlaid Membership Plans Content */}
            <div style={{
              position: 'absolute',
              inset: 0,
              padding: '60px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              alignItems: 'center',
              gap: '40px',
              color: '#FFFFFF'
            }}>
              <div>
                <div className="badge-pill badge-volt" style={{ marginBottom: '14px' }}>
                  Flexible Enrollment
                </div>
                <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '16px' }}>
                  MEMBERSHIP<br />PLANS
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '420px', marginBottom: '28px' }}>
                  Structured around seasonal competition cycles, school athletic schedules, and customized recovery protocols.
                </p>
                <button
                  onClick={() => handleNav('services')}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px' }}
                >
                  <span>Compare All Plans</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Tiers List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {blueprintData.servicePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => handleNav('registration')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(16px)',
                      border: pkg.popular ? '2px solid #C8F31D' : '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '20px 24px',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF' }}>{pkg.name}</span>
                        {pkg.popular && (
                          <span style={{ background: '#C8F31D', color: '#0C0F14', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '10px', textTransform: 'uppercase' }}>
                            Popular
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
                        {pkg.desc}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.6rem', fontWeight: 900, color: '#C8F31D' }}>
                        {pkg.price}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                        {pkg.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: COACHES SPOTLIGHT BAND (DEEP CHARCOAL ELEGANCE) ================= */}
      <section className="section-swift-ease" style={{ padding: '90px 0', background: '#0D0F15', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.88rem', fontWeight: 800, color: '#C8F31D', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                Elite Pedagogical Staff
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#FFFFFF' }}>
                TRAIN LIKE A PRO
              </h2>
            </div>
            <button
              onClick={() => handleNav('coaches')}
              style={{
                background: 'none',
                border: 'none',
                color: '#C8F31D',
                fontFamily: 'var(--font-condensed)',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <span>Swipe to See All Coaches</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {blueprintData.coaches.map((coach) => (
              <div
                key={coach.id}
                className="dark-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '320px' }}>
                  <img
                    src={coach.image}
                    alt={coach.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(13,15,21,0.95) 100%)'
                  }} />

                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(200, 243, 29, 0.15)',
                    border: '1px solid #C8F31D',
                    color: '#C8F31D',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}>
                    CSCS Certified
                  </div>

                  <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                    <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF' }}>
                      {coach.name}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: '#C8F31D', fontWeight: 700 }}>
                      {coach.title}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <blockquote style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', marginBottom: '20px' }}>
                    "{coach.quote}"
                  </blockquote>

                  <button
                    onClick={() => handleNav('coaches')}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
                  >
                    <span>Book a Session</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: TESTIMONIAL & SIGNATURE 2K+ STAMP BADGE ================= */}
      <section className="section-swift-ease" style={{ padding: '90px 0', background: '#FFFFFF', borderBottom: '1px solid #E6E8ED' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch'
          }}>
            {/* Athlete / Coach Photo card */}
            <div style={{
              gridColumn: 'span 4',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '340px',
              position: 'relative'
            }} className="bento-col-12">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Head of Athletic Performance"
                style={{ 
                  width: '100%', 
                  height: '115%', 
                  position: 'absolute',
                  top: '-7%',
                  left: 0,
                  objectFit: 'cover',
                  transform: `translateY(${testimonialImgShift}px) scale(1.05)`,
                  transition: 'transform 0.08s ease-out',
                  willChange: 'transform'
                }}
              />
            </div>

            {/* Main Testimonial Card */}
            <div style={{
              gridColumn: 'span 5',
              background: '#F8F9FA',
              border: '1px solid #E4E7EE',
              borderRadius: '16px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }} className="bento-col-12">
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#C8F31D" color="#9EB81E" />
                ))}
              </div>

              <blockquote style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#0C0F14',
                lineHeight: 1.3,
                textTransform: 'uppercase'
              }}>
                "THE COACHING AND TRAINING ENVIRONMENT HERE GAVE ME THE BELIEF, SPEED AND POWER TO COMPETE AT DIVISION 1."
              </blockquote>

              <div style={{ marginTop: '20px' }}>
                <div style={{ fontWeight: 800, color: '#0C0F14', fontSize: '1rem' }}>Marcus Thompson</div>
                <div style={{ fontSize: '0.82rem', color: '#687285' }}>Wide Receiver, State University Signee</div>
              </div>
            </div>

            {/* Signature Chartreuse Lime Square with Circular Stamp Watermark */}
            <div style={{
              gridColumn: 'span 3',
              background: '#C8F31D',
              borderRadius: '16px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              color: '#0C0F14'
            }} className="bento-col-12">
              {/* Circular Emblem Stamp Watermark (Smooth Dynamic Scroll Rotation) */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-25px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                border: '4px dashed rgba(12,15,20,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                transform: `rotate(${stampRotation}deg)`,
                transition: 'transform 0.08s ease-out',
                willChange: 'transform'
              }}>
                <div style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'rgba(12,15,20,0.25)',
                  textAlign: 'center'
                }}>
                  THE CLUB<br />CHAMPIONS
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '4.5rem', fontWeight: 900, lineHeight: 0.9 }}>
                  500+
                </div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>
                  Champions<br />Developed
                </div>
              </div>

              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(12,15,20,0.85)', position: 'relative', zIndex: 2 }}>
                Real telemetry. Real scholarships. Real speed improvements across every sport.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: ACCORDION FAQ ================= */}
      <section className="section-swift-ease" style={{ padding: '90px 0', background: '#F8F9FA' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header text-center">
            <div className="section-eyebrow">QUESTIONS & ANSWERS</div>
            <h2 style={{ fontSize: '2.8rem', color: '#0C0F14' }}>FREQUENTLY ASKED QUESTIONS</h2>
            <p>Everything you need to know about joining Sports Blueprint in Atlanta.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E4E7EE',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#0C0F14',
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>{faq.q}</span>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#C8F31D' : '#F1F3F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0C0F14'
                    }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: '#4A5162',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid #F1F3F6',
                      paddingTop: '16px'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: FINAL PRESTIGE CTA ================= */}
      <section className="section-swift-ease" style={{ padding: '90px 0', background: '#FFFFFF', borderTop: '1px solid #E6E8ED', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="badge-pill badge-volt" style={{ marginBottom: '16px' }}>
            Zero Commitment • Free Assessment
          </div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#0C0F14', marginBottom: '16px' }}>
            START YOUR ATHLETIC JOURNEY TODAY!
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#4A5162', lineHeight: 1.6, marginBottom: '36px' }}>
            Join hundreds of athletes who chose Sports Blueprint and never looked back. Your transformation begins with one session.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleNav('registration')}
              className="btn btn-primary"
              style={{ padding: '16px 36px', fontSize: '1.05rem' }}
            >
              <span>Register Now — Free Assessment</span>
              <ArrowUpRight size={18} />
            </button>
            <button
              onClick={openAssessment}
              className="btn btn-secondary"
              style={{ padding: '16px 28px', fontSize: '1.05rem' }}
            >
              <span>Take Free Assessment</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 991px) {
          .bento-col-12 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
