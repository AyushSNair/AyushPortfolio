import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.07)' }} role="contentinfo">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

          {/* Brand */}
          <div>
            <div style={{ color: '#000000', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.3rem' }}>
              Ayush <span className="gradient-text">Nair</span>
            </div>
            <p style={{ color: '#aaaaaa', fontSize: '0.75rem' }}>Software Developer · Navi Mumbai, India</p>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {[
              { href: 'https://github.com/AyushSNair',                label: 'GitHub',   icon: <GithubIcon size={17} /> },
              { href: 'https://linkedin.com/in/ayush-nair-b71699284', label: 'LinkedIn', icon: <LinkedinIcon size={17} /> },
              { href: 'mailto:nairayush45@gmail.com',                 label: 'Email',    icon: <Mail size={17} /> },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={s.label}
                style={{ width: 38, height: 38, borderRadius: '0.625rem', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaaaaa', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color='#000000'; e.currentTarget.style.borderColor='rgba(0,0,0,0.25)'; e.currentTarget.style.background='rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color='#aaaaaa'; e.currentTarget.style.borderColor='rgba(0,0,0,0.08)'; e.currentTarget.style.background='rgba(0,0,0,0.04)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#aaaaaa', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.78rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color='#000000')}
            onMouseLeave={e => (e.currentTarget.style.color='#aaaaaa')}
            aria-label="Back to top">
            <ArrowUp size={13} /> Back to top
          </button>
        </div>

        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <p style={{ color: '#dddddd', fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
            Built with <Heart size={10} style={{ color: 'rgba(239,68,68,0.5)' }} /> using React, TypeScript & Tailwind CSS
            &nbsp;·&nbsp; © 2025 Ayush Nair
          </p>
        </div>
      </div>
    </footer>
  );
}
