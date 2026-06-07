import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  logo: string;
  color: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    role: 'Project Intern',
    company: 'Tata Institute of Fundamental Research (TIFR)',
    location: 'Colaba, Mumbai',
    period: 'Jun 2025 – Present',
    type: 'Research Internship',
    logo: '🔬',
    color: 'linear-gradient(135deg,#111111,#333333)',
    bullets: [
      'Built an end-to-end wirebond inspection pipeline (Linux/Ubuntu) using ORB-RANSAC homography and CLAHE upscaling, eliminating manual review across 92 step-holes per board.',
      'Reduced QC review time by 80% by deploying a custom RF-DETR object detection model via REST API with programmatic PDF/CSV report generation for gold pad inspection.',
      'Shipped HexaVision, a PyQt5 desktop application with multi-threaded processing and real-time progress tracking, adopted daily by lab engineers.',
    ],
    tags: ['Python', 'OpenCV', 'RF-DETR', 'PyQt5', 'REST API', 'Linux'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Indian Institute of Science Education & Research (IISER)',
    location: 'Mohali, Punjab',
    period: 'Jul 2024 – Jun 2025',
    type: 'Research Internship',
    logo: '🧠',
    color: 'linear-gradient(135deg,#222222,#555555)',
    bullets: [
      'Led development of a real-time fall detection system using YOLOv8-OBB and MediaPipe, cutting false positives by 60% and raising overall system reliability by 20%.',
      'Lowered emergency response latency by integrating a real-time healthcare monitoring module with caregiver alert notifications.',
    ],
    tags: ['YOLOv8', 'MediaPipe', 'Python', 'Flask', 'OpenCV'],
  },
  {
    role: 'Backend Developer — Application Development',
    company: 'Sports Mentoring Infusion (NGO)',
    location: 'Remote',
    period: 'Jun 2025 – Jul 2025',
    type: 'Contract',
    logo: '⚽',
    color: 'linear-gradient(135deg,#333333,#666666)',
    bullets: [
      'Developed a gamified mentorship platform for underprivileged youth, increasing user engagement by 65% and enabling data-driven interventions through analytics dashboards used by 15+ sports mentors.',
      'Migrated backend architecture from NoSQL to PostgreSQL while improving security, authentication, scalability, and production performance.',
    ],
    tags: ['Node.js', 'PostgreSQL', 'Express.js', 'REST API'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Fr. Conceicao Rodrigues Institute of Technology',
    location: 'Vashi, Navi Mumbai',
    period: 'Jul 2023 – Jun 2024',
    type: 'Internship',
    logo: '🏫',
    color: 'linear-gradient(135deg,#444444,#777777)',
    bullets: [
      'Improved page-load performance for a college portal serving 200+ users and delivered administration-requested feature modules on schedule.',
    ],
    tags: ['Web Development', 'Performance Optimization', 'Full-Stack'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: '#ffffff' }} aria-label="Work Experience section">
      <div style={{ maxWidth: 840, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">04 — Where I've Worked</span>
          <h2>Work <span className="gradient-text">Experience</span></h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '0.7rem', top: '1.5rem', bottom: '2rem', width: 1,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.08), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: '-2.5rem', top: '1.5rem',
                  width: 22, height: 22, borderRadius: '50%',
                  background: exp.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(0,0,0,0.15)', zIndex: 1,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }} />
                </div>

                {/* Card */}
                <div className="glass glass-hover" style={{ borderRadius: '1.25rem', padding: '2rem' }}>

                  {/* Top */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ width: 46, height: 46, borderRadius: '0.875rem', background: exp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem', flexShrink: 0, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '1rem', lineHeight: 1.25, marginBottom: '0.2rem' }}>{exp.role}</h3>
                        <p style={{ color: '#444444', fontWeight: 600, fontSize: '0.82rem' }}>{exp.company}</p>
                      </div>
                    </div>
                    <span style={{ padding: '0.25rem 0.85rem', borderRadius: 9999, background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: '#777777', fontSize: '0.7rem', fontFamily: 'monospace', flexShrink: 0 }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.25rem', color: '#999999', fontSize: '0.78rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#555555', fontSize: '0.855rem', lineHeight: 1.7 }}>
                        <span style={{ color: '#333333', flexShrink: 0, marginTop: 4 }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.tags.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
