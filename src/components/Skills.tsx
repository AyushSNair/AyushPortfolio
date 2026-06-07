import { useState } from 'react';

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: '⌨️',
    color: 'linear-gradient(135deg,#111111,#444444)',
    skills: [
      { name: 'Python',     level: 92 },
      { name: 'Java',       level: 78 },
      { name: 'SQL',        level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'linear-gradient(135deg,#333333,#666666)',
    skills: [
      { name: 'React',       level: 88 },
      { name: 'HTML / CSS',  level: 90 },
      { name: 'Tailwind CSS',level: 85 },
      { name: 'PyQt5',       level: 78 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'linear-gradient(135deg,#222222,#555555)',
    skills: [
      { name: 'Node.js',        level: 84 },
      { name: 'Express.js',     level: 82 },
      { name: 'REST API Design',level: 88 },
      { name: 'Flask',          level: 80 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'linear-gradient(135deg,#444444,#777777)',
    skills: [
      { name: 'MongoDB',    level: 85 },
      { name: 'MySQL',      level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis',      level: 72 },
      { name: 'ChromaDB',   level: 70 },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    color: 'linear-gradient(135deg,#111111,#555555)',
    skills: [
      { name: 'TensorFlow', level: 82 },
      { name: 'YOLOv8',     level: 85 },
      { name: 'OpenCV',     level: 88 },
      { name: 'MediaPipe',  level: 84 },
      { name: 'Scikit-learn',level: 76 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: 'linear-gradient(135deg,#333333,#666666)',
    skills: [
      { name: 'Docker',         level: 76 },
      { name: 'Git / GitHub',   level: 90 },
      { name: 'GitHub Actions', level: 74 },
      { name: 'Linux (Ubuntu)', level: 80 },
      { name: 'Postman',        level: 85 },
    ],
  },
];

const allBadges = [
  'Python','React','Node.js','TypeScript','Java','MongoDB','MySQL',
  'PostgreSQL','Docker','Git','TensorFlow','YOLOv8','OpenCV','MediaPipe',
  'Flask','Express.js','Tailwind CSS','Redis','ChromaDB','PyQt5',
  'REST API','GitHub Actions','Linux','Postman','LSTM','Scikit-learn',
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? skillGroups.filter(g => g.category === active) : skillGroups;

  return (
    <section id="skills" className="section-padding" style={{ background: '#ffffff' }} aria-label="Skills section">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">02 — What I Use</span>
          <h2>Technical <span className="gradient-text">Skills</span></h2>
          <div className="section-divider" />
          <p style={{ color: '#888888', fontSize: '0.9rem', maxWidth: 480, margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            From AI/ML pipelines to full-stack web apps — here's my technical toolkit.
          </p>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '3.5rem' }}>
          {['All', ...skillGroups.map(g => g.category)].map(cat => (
            <button key={cat} onClick={() => setActive(cat === 'All' ? null : (active === cat ? null : cat))}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: 9999,
                fontSize: '0.78rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                border: 'none',
                ...((!active && cat === 'All') || active === cat
                  ? { background: '#111111', color: 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }
                  : { background: 'rgba(0,0,0,0.05)', color: '#666666', border: '1px solid rgba(0,0,0,0.1)' }
                ),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {shown.map(group => (
            <div key={group.category} className="glass glass-hover card-border-animate"
              style={{ borderRadius: '1.25rem', padding: '2rem' }}>

              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: '0.875rem', background: group.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', flexShrink: 0 }}>
                  {group.icon}
                </div>
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.95rem' }}>{group.category}</h3>
              </div>

              {/* Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#333333', fontSize: '0.82rem', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ color: '#aaaaaa', fontSize: '0.72rem', fontFamily: 'monospace' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 3, background: 'rgba(0,0,0,0.07)', borderRadius: 9999, overflow: 'hidden' }}>
                      <div className="progress-bar" style={{ width: `${skill.level}%`, height: '100%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badge cloud */}
        <div className="glass" style={{ borderRadius: '1.5rem', padding: '2.5rem' }}>
          <p style={{ textAlign: 'center', color: '#aaaaaa', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
            Full Technology Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem' }}>
            {allBadges.map(b => <span key={b} className="skill-chip">{b}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
