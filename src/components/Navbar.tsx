import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
        boxShadow: isScrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Go to home"
          >
            <div style={{
              width: 36, height: 36, borderRadius: '0.625rem',
              background: 'linear-gradient(135deg,#333333,#000000)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, color: 'white', fontSize: '1.1rem',
            }}>
              A
            </div>
            <span style={{ fontWeight: 800, color: '#000000', fontSize: '1.05rem' }}>
              Ayush<span style={{ color: '#999999' }}>.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="hidden lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#000000' : '#777777',
                    background: isActive ? 'rgba(0,0,0,0.07)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#777777';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/AyushNair_Resume.pdf"
              download
              className="hidden sm:flex"
              style={{
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.75rem',
                borderRadius: '0.625rem',
                background: '#000000',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#222222'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.28)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)'; }}
              aria-label="Download resume"
            >
              Download CV
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden"
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                color: '#555555',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              aria-expanded={isMobileOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isMobileOpen ? '100vh' : '0',
          opacity: isMobileOpen ? 1 : 0,
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
        }}
        className="lg:hidden"
      >
        <div style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '0.75rem', paddingBottom: '1rem' }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`mobile-nav-link w-full text-left ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <div style={{ padding: '0.75rem 1.5rem 0', borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '0.5rem' }}>
            <a
              href="/AyushNair_Resume.pdf"
              download
              style={{
                display: 'block', width: '100%', textAlign: 'center',
                padding: '0.75rem', borderRadius: '0.625rem',
                background: '#000000', color: 'white',
                fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
