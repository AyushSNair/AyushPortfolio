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

      // Determine active section
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
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-800 to-black flex items-center justify-center font-bold text-white text-lg shadow-sm group-hover:shadow-black/20 transition-shadow duration-300">
              A
            </div>
            <span className="font-bold text-black text-lg hidden sm:block">
              Ayush<span className="text-gray-500">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-black bg-black/8'
                    : 'text-gray-500 hover:text-black hover:bg-black/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/AyushNair_Resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-gray-800 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-black/15"
              aria-label="Download resume"
            >
              Resume
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-black hover:bg-black/8 transition-colors"
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
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`mobile-nav-link w-full text-left ${
                activeSection === link.href.slice(1) ? 'active' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-3 border-t border-black/6 mt-2">
            <a
              href="/AyushNair_Resume.pdf"
              download
              className="block w-full text-center px-4 py-2.5 rounded-lg bg-black text-white font-medium text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
