import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const stats = [
  { value: '9.52', suffix: '/10', label: 'CGPA' },
  { value: '2+',   suffix: ' Yrs', label: 'Experience' },
  { value: '5+',   suffix: '',     label: 'Projects' },
  { value: '1st',  suffix: '',     label: 'Hackathon' },
];

const interests = [
  'Computer Vision', 'Full-Stack Development', 'Machine Learning',
  'Open Source', 'System Design', 'Real-time Systems',
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: '#f8f8f8' }} aria-label="About section">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">01 — Who Am I</span>
          <h2>About <span className="gradient-text">Me</span></h2>
          <div className="section-divider" />
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,3fr)', gap: '4rem', alignItems: 'start' }}
          className="grid-cols-1 lg:grid-cols-5">

          {/* ── Left column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Photo */}
            <div className="glass" style={{ borderRadius: '1.25rem', overflow: 'hidden', padding: 4 }}>
              <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/5', maxHeight: 340 }}>
                <img src="/profile.png" alt="Ayush Nair" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem' }}>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: 2 }}>Ayush Sukhadan Nair</p>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem' }}>Software Developer · AI/ML Engineer</p>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="glass" style={{ borderRadius: '1.25rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { icon: <MapPin size={15} />,  label: 'Vashi, Navi Mumbai' },
                { icon: <Mail size={15} />,    label: 'nairayush45@gmail.com', href: 'mailto:nairayush45@gmail.com' },
                { icon: <Phone size={15} />,   label: '+91 9321061394',         href: 'tel:+919321061394' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.82rem', color: '#666666' }}>
                  <span style={{ color: '#333333', flexShrink: 0 }}>{item.icon}</span>
                  {item.href
                    ? <a href={item.href} style={{ color: '#666666' }} onMouseEnter={e => (e.currentTarget.style.color='#000000')} onMouseLeave={e => (e.currentTarget.style.color='#666666')}>{item.label}</a>
                    : <span>{item.label}</span>
                  }
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '0.85rem', display: 'flex', gap: '1.25rem' }}>
                {[
                  { href: 'https://github.com/AyushSNair',                label: '↗ GitHub' },
                  { href: 'https://linkedin.com/in/ayush-nair-b71699284', label: '↗ LinkedIn' },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#444444', fontSize: '0.78rem', fontWeight: 500 }}
                    onMouseEnter={e => (e.currentTarget.style.color='#000000')}
                    onMouseLeave={e => (e.currentTarget.style.color='#444444')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <p style={{ color: '#444444', lineHeight: 1.85, fontSize: '0.95rem' }}>
                I'm a final-year Information Technology student at{' '}
                <span style={{ color: '#111111', fontWeight: 600 }}>Fr. C. Rodrigues Institute of Technology</span>{' '}
                (CGPA <span style={{ color: '#111111', fontWeight: 600 }}>9.52/10</span>). With 2+ years of engineering experience, I bridge the gap between research and production — from building AI inspection systems at{' '}
                <span style={{ color: '#333333', fontWeight: 600 }}>TIFR</span> to developing real-time fall detection at{' '}
                <span style={{ color: '#333333', fontWeight: 600 }}>IISER Mohali</span>.
              </p>
              <p style={{ color: '#444444', lineHeight: 1.85, fontSize: '0.95rem' }}>
                I thrive at the intersection of{' '}
                <span style={{ color: '#111111', fontWeight: 600 }}>Computer Vision</span>,{' '}
                <span style={{ color: '#111111', fontWeight: 600 }}>Full-Stack Development</span>, and{' '}
                <span style={{ color: '#111111', fontWeight: 600 }}>Machine Learning</span>. Whether it's a PyQt5 desktop app that cuts lab QC time by 80%, or a sign language transcriber at 85% accuracy — I build things that actually work in production.
              </p>
              <p style={{ color: '#444444', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Beyond engineering, I'm a{' '}
                <span style={{ color: '#22c55e', fontWeight: 600 }}>hackathon winner</span> (1st at Horizon 1.0),
                a <span style={{ color: '#22c55e', fontWeight: 600 }}>GSSoC '25 contributor</span>, and a firm believer that great software should be elegant, performant, and accessible.
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
              {stats.map(s => (
                <div key={s.label} className="glass glass-hover"
                  style={{ borderRadius: '1rem', padding: '1.25rem 0.75rem', textAlign: 'center' }}>
                  <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>
                    {s.value}<span style={{ fontSize: '0.7rem', color: '#999999', WebkitTextFillColor: 'unset' }}>{s.suffix}</span>
                  </div>
                  <div style={{ color: '#999999', fontSize: '0.7rem', marginTop: '0.4rem' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="glass" style={{ borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: 42, height: 42, borderRadius: '0.75rem', background: 'rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={20} style={{ color: '#333333' }} />
                </div>
                <div>
                  <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    B.E. — Information Technology
                  </h3>
                  <p style={{ color: '#444444', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Fr. C. Rodrigues Institute of Technology
                  </p>
                  <p style={{ color: '#888888', fontSize: '0.78rem', marginBottom: '0.6rem' }}>
                    Vashi, Navi Mumbai · Aug 2022 – May 2026
                  </p>
                  <span style={{ padding: '0.2rem 0.75rem', borderRadius: 9999, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#16a34a', fontSize: '0.72rem', fontWeight: 700 }}>
                    CGPA: 9.52 / 10.0
                  </span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p style={{ color: '#999999', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                Areas of Interest
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {interests.map(i => (
                  <span key={i} className="tech-badge">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
