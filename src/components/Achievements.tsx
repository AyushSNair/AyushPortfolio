import { Trophy, Users, GitMerge, Star } from 'lucide-react';

const achievements = [
  {
    title: '1st Place — Horizon 1.0 Hackathon (GDSC)',
    subtitle: 'Vidyavardhini College of Engineering',
    description: 'Delivered a real-time SME data aggregation platform with live dashboards and multi-vertical business insights. Won 1st place out of all competing teams at a GDSC event.',
    date: 'March 2026',
    icon: <Trophy size={20} />,
    badge: '🏆 Gold',
    badgeStyle: { background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.12)', color: '#333333' },
    accent: 'linear-gradient(135deg,#111111,#444444)',
  },
  {
    title: "GirlScript Summer of Code (GSSoC '25)",
    subtitle: 'Selected Open Source Contributor',
    description: "Merged a custom array-input feature into AlgoVisualizer and revamped the documentation UI, improving accessibility for the open-source community.",
    date: '2025',
    icon: <GitMerge size={20} />,
    badge: '🌸 GSSoC',
    badgeStyle: { background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.12)', color: '#333333' },
    accent: 'linear-gradient(135deg,#222222,#555555)',
  },
  {
    title: '1st Place — Summer Project Competition',
    subtitle: 'Fr. C. Rodrigues Institute of Technology',
    description: 'VaniConnect secured 1st place among 60+ teams. Achieved 85% gesture recognition accuracy across 200+ ISL and ASL patterns.',
    date: '2024',
    icon: <Star size={20} />,
    badge: '🥇 Best Project',
    badgeStyle: { background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.12)', color: '#333333' },
    accent: 'linear-gradient(135deg,#333333,#666666)',
  },
  {
    title: 'Research at TIFR & IISER',
    subtitle: 'Dual Research Institute Contributions',
    description: "Selected for internships at two of India's premier research institutions — TIFR and IISER Mohali. Contributed production AI systems actively used in research workflows.",
    date: '2024–2025',
    icon: <Users size={20} />,
    badge: '🔬 Research',
    badgeStyle: { background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.12)', color: '#333333' },
    accent: 'linear-gradient(135deg,#444444,#777777)',
  },
];

const statsRow = [
  { value: '2',    label: 'Hackathons Won',      icon: '🏆' },
  { value: '2',    label: 'Research Institutes',  icon: '🔬' },
  { value: '60+',  label: 'Teams Defeated',       icon: '⚡' },
  { value: '9.52', label: 'CGPA',                 icon: '🎓' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ background: '#f8f8f8' }} aria-label="Achievements section">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">05 — Milestones</span>
          <h2>Achievements & <span className="gradient-text">Leadership</span></h2>
          <div className="section-divider" />
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {achievements.map((a, i) => (
            <div key={i} className="glass glass-hover card-border-animate"
              style={{ borderRadius: '1.25rem', overflow: 'hidden', position: 'relative' }}>

              {/* Gradient top bar */}
              <div style={{ height: 3, background: a.accent, flexShrink: 0 }} />

              <div style={{ padding: '2rem' }}>
                {/* Row 1: icon + badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: 46, height: 46, borderRadius: '0.875rem', background: a.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}>
                    {a.icon}
                  </div>
                  <span style={{ padding: '0.3rem 0.9rem', borderRadius: 9999, fontSize: '0.72rem', fontWeight: 700, ...a.badgeStyle }}>
                    {a.badge}
                  </span>
                </div>

                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '1rem', lineHeight: 1.35, marginBottom: '0.3rem' }}>{a.title}</h3>
                <p style={{ color: '#444444', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>{a.subtitle}</p>
                <p style={{ color: '#aaaaaa', fontSize: '0.7rem', fontFamily: 'monospace', marginBottom: '0.85rem' }}>{a.date}</p>
                <p style={{ color: '#666666', fontSize: '0.845rem', lineHeight: 1.75 }}>{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats band */}
        <div className="glass" style={{ borderRadius: '1.5rem', padding: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', textAlign: 'center' }}>
            {statsRow.map(s => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '1.75rem' }}>{s.icon}</span>
                <span className="gradient-text" style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>{s.value}</span>
                <span style={{ color: '#aaaaaa', fontSize: '0.72rem', lineHeight: 1.4, maxWidth: 80 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
