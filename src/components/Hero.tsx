import { useState, useEffect } from 'react';
import { Mail, ArrowDown, Code2, Cpu, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const roles = [
  'Software Developer',
  'Full-Stack Engineer',
  'AI / ML Engineer',
  'Open Source Contributor',
];

const floatingTags = [
  { label: 'React',    color: '#111111', x: '7%',  y: '22%', delay: 0   },
  { label: 'Python',   color: '#333333', x: '84%', y: '18%', delay: 0.6 },
  { label: 'Node.js',  color: '#222222', x: '88%', y: '68%', delay: 1.1 },
  { label: 'YOLOv8',   color: '#000000', x: '5%',  y: '72%', delay: 1.7 },
  { label: 'MongoDB',  color: '#444444', x: '76%', y: '38%', delay: 0.35},
  { label: 'Docker',   color: '#555555', x: '13%', y: '48%', delay: 0.9 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex]   = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 55 : 95;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#ffffff 0%,#f8f8f8 50%,#ffffff 100%)' }} />
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          opacity: 0.6,
        }} />
        {/* Subtle glow blobs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(0,0,0,0.03) 0%,transparent 70%)', borderRadius: '50%' }} />
        <div className="absolute top-1/4 left-1/5"   style={{ width: 420, height: 420, background: 'radial-gradient(circle,rgba(0,0,0,0.02) 0%,transparent 70%)', borderRadius: '50%' }} />
        <div className="absolute bottom-1/5 right-1/5" style={{ width: 360, height: 360, background: 'radial-gradient(circle,rgba(0,0,0,0.02) 0%,transparent 70%)',  borderRadius: '50%' }} />

        {/* Floating tags – desktop only */}
        <div className="hidden xl:block">
          {floatingTags.map((tag, i) => (
            <div
              key={i}
              className="absolute tech-badge animate-float"
              style={{
                left: tag.x, top: tag.y,
                animationDelay: `${tag.delay}s`,
                borderColor: `${tag.color}40`,
                color: tag.color,
                background: `rgba(0,0,0,0.04)`,
                opacity: 0.7,
              }}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border text-sm font-medium mb-12 animate-fade-in-up"
          style={{ background: 'rgba(0,0,0,0.04)', borderColor: 'rgba(0,0,0,0.15)', color: '#222222' }}>
          <span className="w-2 h-2 rounded-full" style={{ background: '#22c55e', animation: 'pulse 2s ease-in-out infinite', boxShadow: '0 0 8px #22c55e' }} />
          Open to Full-time Opportunities
        </div>

        {/* Photo */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center justify-center" style={{ width: 176, height: 176 }}>
            <div className="orbit-ring" style={{ width: 176, height: 176 }} />
            <div className="orbit-ring" style={{ width: 216, height: 216, animationDirection: 'reverse', animationDuration: '16s', borderColor: 'rgba(0,0,0,0.07)' }} />
            <div className="rounded-full overflow-hidden border-2 animate-pulse-glow"
              style={{ width: 140, height: 140, borderColor: 'rgba(0,0,0,0.25)', boxShadow: '0 0 0 6px rgba(0,0,0,0.04)' }}>
              <img src="/profile.png" alt="Ayush Nair — Software Developer" className="w-full h-full object-cover" />
            </div>
            <div className="absolute rounded-full border-2"
              style={{ width: 18, height: 18, background: '#22c55e', borderColor: '#ffffff', bottom: 18, right: 18 }} />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-black tracking-tight mb-4" style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', lineHeight: 1.08 }}>
          <span style={{ color: '#000000' }}>Ayush </span>
          <span className="gradient-text">Nair</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center mb-6" style={{ height: '2.5rem' }}>
          <span style={{ fontSize: 'clamp(1rem,2.5vw,1.35rem)', color: '#444444', fontWeight: 500 }}>
            {displayText}
            <span className="typed-cursor" aria-hidden="true" />
          </span>
        </div>

        {/* Tagline */}
        <p style={{ color: '#666666', fontSize: '1rem', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          Final-year IT student with{' '}
          <span style={{ color: '#111111', fontWeight: 600 }}>CGPA 9.52/10</span>.
          {' '}Building production AI at{' '}
          <span style={{ color: '#333333', fontWeight: 600 }}>TIFR & IISER</span>.
          {' '}Hackathon winner. Open source contributor.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12" style={{ color: '#888888', fontSize: '0.85rem' }}>
          {[
            { icon: <Cpu size={13} />, label: 'CGPA', value: '9.52 / 10' },
            { icon: <Zap size={13} />, label: 'Experience', value: '2+ Years' },
            { icon: <Code2 size={13} />, label: 'Projects', value: '5+ Shipped' },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span style={{ color: '#555555' }}>{s.icon}</span>
              <span>{s.label}:</span>
              <span style={{ color: '#000000', fontWeight: 600 }}>{s.value}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
            style={{ background: '#111111', color: 'white', fontSize: '0.9rem', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#000000')}
            onMouseLeave={e => (e.currentTarget.style.background = '#111111')}
          >
            View My Work
          </a>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
            style={{ border: '1px solid rgba(0,0,0,0.2)', color: '#111111', fontSize: '0.9rem', background: 'transparent' }}
          >
            Get In Touch
          </a>
          <a href="/AyushNair_Resume.pdf" download
            className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
            style={{ border: '1px solid rgba(0,0,0,0.15)', color: '#444444', fontSize: '0.9rem', background: 'transparent' }}
          >
            Download CV
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4">
          {[
            { href: 'https://github.com/AyushSNair',                 icon: <GithubIcon size={19} />,   label: 'GitHub' },
            { href: 'https://linkedin.com/in/ayush-nair-b71699284',  icon: <LinkedinIcon size={19} />, label: 'LinkedIn' },
            { href: 'mailto:nairayush45@gmail.com',                  icon: <Mail size={19} />,          label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="flex items-center justify-center rounded-xl transition-all duration-200"
              style={{ width: 44, height: 44, background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.1)', color: '#888888' }}
              onMouseEnter={e => { e.currentTarget.style.color='#000000'; e.currentTarget.style.borderColor='rgba(0,0,0,0.3)'; e.currentTarget.style.background='rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color='#888888'; e.currentTarget.style.borderColor='rgba(0,0,0,0.1)'; e.currentTarget.style.background='rgba(0,0,0,0.04)'; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute flex flex-col items-center gap-2 transition-colors"
        style={{ bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', color: '#aaaaaa' }}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <ArrowDown size={15} style={{ animation: 'bounce 1.5s ease-in-out infinite' }} />
      </button>
    </section>
  );
}
