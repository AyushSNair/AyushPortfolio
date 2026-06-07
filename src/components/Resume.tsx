import { Download, Eye, FileText, CheckCircle } from 'lucide-react';

const highlights = [
  'CGPA 9.52/10 — Top academic performer',
  '2+ years of engineering at TIFR & IISER',
  '80% QC time reduction with AI system at TIFR',
  '60% false positive reduction in fall detection',
  '1st Place — Horizon 1.0 Hackathon (GDSC)',
  "GSSoC '25 Selected Open Source Contributor",
  'Full-Stack MERN + AI/ML + Computer Vision',
  'Production systems serving real researchers',
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding" style={{ background: '#ffffff' }} aria-label="Resume section">
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">06 — My CV</span>
          <h2>My <span className="gradient-text">Resume</span></h2>
          <div className="section-divider" />
          <p style={{ color: '#888888', fontSize: '0.9rem', maxWidth: 440, margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            Download or preview my full CV — optimized for ATS and recruiter review.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)', gap: '2.5rem', alignItems: 'start' }}>

          {/* ── Resume preview ── */}
          <div className="glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
            {/* Window chrome */}
            <div style={{ background: 'rgba(0,0,0,0.04)', padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(239,68,68,0.5)' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(251,191,36,0.5)' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(34,197,94,0.5)' }} />
              </div>
              <span style={{ color: '#aaaaaa', fontSize: '0.72rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>AyushNair_Resume.pdf</span>
            </div>

            <div style={{ background: '#fafafa', padding: '2.5rem', minHeight: 380 }}>
              {/* Simulated header */}
              <div style={{ textAlign: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.07)', marginBottom: '1.75rem' }}>
                <div style={{ color: '#000000', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.3rem' }}>Ayush Sukhadan Nair</div>
                <div style={{ color: '#555555', fontSize: '0.78rem', marginBottom: '0.25rem' }}>Software Developer · AI/ML Engineer · Full-Stack</div>
                <div style={{ color: '#aaaaaa', fontSize: '0.7rem', fontFamily: 'monospace' }}>nairayush45@gmail.com · +91 9321061394 · Mumbai, India</div>
              </div>

              {[
                { icon: <FileText size={13} />, label: 'Education',    detail: 'B.E. IT · CGPA 9.52' },
                { icon: <FileText size={13} />, label: 'Experience',   detail: '4 positions · TIFR, IISER, NGO, FCRIT' },
                { icon: <FileText size={13} />, label: 'Projects',     detail: '5+ shipped projects' },
                { icon: <FileText size={13} />, label: 'Skills',       detail: '25+ technologies' },
                { icon: <FileText size={13} />, label: 'Achievements', detail: "Hackathon winner, GSSoC '25" },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#555555' }}>{s.icon}</span>
                    <span style={{ color: '#000000', fontSize: '0.82rem', fontWeight: 500 }}>{s.label}</span>
                  </div>
                  <span style={{ color: '#bbbbbb', fontSize: '0.72rem', fontFamily: 'monospace' }}>{s.detail}</span>
                </div>
              ))}

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', marginTop: '2rem' }}>
                <a href="/AyushNair_Resume.pdf" download
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', borderRadius: '0.875rem', background: '#111111', color: 'white', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                  <Download size={15} /> Download PDF
                </a>
                <a href="/AyushNair_Resume.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', borderRadius: '0.875rem', border: '1px solid rgba(0,0,0,0.12)', color: '#333333', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
                  <Eye size={15} /> Preview
                </a>
              </div>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Highlights */}
            <div className="glass" style={{ borderRadius: '1.25rem', padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <CheckCircle size={16} style={{ color: '#444444' }} />
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.9rem' }}>Why Hire Me?</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#555555', fontSize: '0.8rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 2, fontSize: '0.7rem' }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="glass" style={{ borderRadius: '1.25rem', padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🤝</div>
              <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Ready to Collaborate?</h3>
              <p style={{ color: '#888888', fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Actively looking for full-time roles in software engineering, AI/ML, and full-stack development.
              </p>
              <a href="mailto:nairayush45@gmail.com"
                style={{ display: 'block', padding: '0.85rem', borderRadius: '0.875rem', background: 'linear-gradient(135deg,#111111,#333333)', color: 'white', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
