import { useState } from 'react';
import { ExternalLink, ArrowRight, X, Star, Layers, Lightbulb, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import projects, { type Project } from '../data/projects';

/* ─── Modal ─── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ padding: '2rem 1rem' }} role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
        onClick={onClose} aria-hidden="true" />

      <div className="relative w-full" style={{ maxWidth: 880, zIndex: 10, marginTop: '2rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>

          {/* Header strip */}
          <div style={{ position: 'relative', height: 140, background: `linear-gradient(135deg,${project.color.replace('from-','').replace(' to-','').split(' ')[0]?.includes('#') ? project.color : 'rgba(17,17,17,1)'})`, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg,rgba(0,0,0,0.4),rgba(0,0,0,0.15))` }} />
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color}`} style={{ opacity: 0.9 }} />
            <div className="absolute inset-0 flex items-center justify-between" style={{ padding: '1.75rem 2rem' }}>
              <div>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.4rem' }}>{project.icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {project.category} · {project.year}
                </span>
              </div>
              <button onClick={onClose} aria-label="Close"
                style={{ width: 38, height: 38, borderRadius: '0.75rem', background: 'rgba(0,0,0,0.4)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem', background: '#ffffff' }}>

            {/* Title + links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <h2 style={{ color: '#000000', fontWeight: 800, fontSize: '1.75rem', lineHeight: 1.15, marginBottom: '0.4rem' }}>{project.title}</h2>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>{project.tagline}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.1rem', borderRadius: '0.75rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: '#111111', fontSize: '0.82rem', textDecoration: 'none' }}>
                    <GithubIcon size={15} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.1rem', borderRadius: '0.75rem', background: '#111111', color: 'white', fontSize: '0.82rem', textDecoration: 'none' }}>
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
                {project.metrics.map(m => (
                  <div key={m.label} className="glass" style={{ borderRadius: '1rem', padding: '1.25rem', textAlign: 'center' }}>
                    <div className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: 800 }}>{m.value}</div>
                    <div style={{ color: '#999999', fontSize: '0.72rem', marginTop: '0.35rem' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <Layers size={17} style={{ color: '#555555' }} />
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.9rem' }}>Project Overview</h3>
              </div>
              <p style={{ color: '#555555', lineHeight: 1.8, fontSize: '0.875rem' }}>{project.overview}</p>
            </div>

            {/* Features */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <Star size={17} style={{ color: '#888888' }} />
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.9rem' }}>Key Features</h3>
              </div>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '0.65rem' }}>
                {project.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#444444', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#333333', marginTop: 2, flexShrink: 0 }}>▸</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <Code2 size={17} style={{ color: '#555555' }} />
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.9rem' }}>Tech Stack</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '0.85rem' }}>
                {project.techStack.map(ts => (
                  <div key={ts.category} className="glass" style={{ borderRadius: '0.875rem', padding: '1rem' }}>
                    <div style={{ color: '#aaaaaa', fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{ts.category}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {ts.items.map(item => <span key={item} className="tech-badge">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div style={{ background: 'rgba(0,0,0,0.04)', borderLeft: '2px solid rgba(0,0,0,0.3)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem' }}>
              <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.5rem' }}>Architecture & Workflow</h3>
              <p style={{ color: '#666666', fontSize: '0.82rem', lineHeight: 1.75 }}>{project.architecture}</p>
            </div>

            {/* Learnings */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <Lightbulb size={17} style={{ color: '#888888' }} />
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '0.9rem' }}>Key Learnings</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.learnings.map((l, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#555555', fontSize: '0.82rem', lineHeight: 1.65 }}>
                    <span style={{ flexShrink: 0, marginTop: 1 }}>💡</span>{l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
              {project.tags.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Card ─── */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button onClick={onClick} className="glass glass-hover card-border-animate"
      style={{ borderRadius: '1.25rem', overflow: 'hidden', textAlign: 'left', width: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column', border: 'none', padding: 0 }}
      aria-label={`View ${project.title} project details`}>

      {/* Top color bar */}
      <div className={`bg-gradient-to-r ${project.color}`} style={{ height: 4, width: '100%', flexShrink: 0 }} />

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{project.icon}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>{project.title}</h3>
                {project.highlight && (
                  <span style={{ padding: '0.1rem 0.4rem', borderRadius: '0.25rem', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.15)', color: '#555555', fontSize: '0.65rem' }}>★</span>
                )}
              </div>
              <span style={{ color: '#aaaaaa', fontSize: '0.7rem', fontFamily: 'monospace' }}>{project.category}</span>
            </div>
          </div>
          <span style={{ color: '#cccccc', fontSize: '0.7rem', fontFamily: 'monospace', flexShrink: 0 }}>{project.year}</span>
        </div>

        {/* Tagline */}
        <p style={{ color: '#777777', fontSize: '0.83rem', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.tagline}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.6rem' }}>
            {project.metrics.map(m => (
              <div key={m.label} style={{ background: 'rgba(0,0,0,0.03)', borderRadius: '0.6rem', padding: '0.6rem 0.4rem', textAlign: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ color: '#333333', fontWeight: 700, fontSize: '0.78rem', lineHeight: 1.2 }}>{m.value}</div>
                <div style={{ color: '#bbbbbb', fontSize: '0.62rem', marginTop: 2, lineHeight: 1.3 }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.slice(0, 4).map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
          {project.tags.length > 4 && <span className="tech-badge" style={{ color: '#aaaaaa' }}>+{project.tags.length - 4}</span>}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.25rem', marginTop: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {project.github && (
              <span role="link" aria-label="GitHub" style={{ color: '#bbbbbb', cursor: 'pointer' }}
                onClick={e => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                onMouseEnter={e => (e.currentTarget.style.color='#000000')}
                onMouseLeave={e => (e.currentTarget.style.color='#bbbbbb')}>
                <GithubIcon size={16} />
              </span>
            )}
            {project.demo && (
              <span role="link" aria-label="Demo" style={{ color: '#bbbbbb', cursor: 'pointer' }}
                onClick={e => { e.stopPropagation(); window.open(project.demo, '_blank'); }}
                onMouseEnter={e => (e.currentTarget.style.color='#000000')}
                onMouseLeave={e => (e.currentTarget.style.color='#bbbbbb')}>
                <ExternalLink size={16} />
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#444444', fontSize: '0.78rem', fontWeight: 600 }}>
            View Details <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </button>
  );
}

/* ─── Section ─── */
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter]     = useState('All');

  const cats = ['All', ...Array.from(new Set(projects.map(p => p.category.split('/')[0].trim())))];
  const shown = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="section-padding" style={{ background: '#f8f8f8' }} aria-label="Projects section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">03 — What I've Built</span>
          <h2>Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider" />
          <p style={{ color: '#888888', fontSize: '0.9rem', maxWidth: 480, margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            Click any card to explore the architecture, tech stack, and key learnings.
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '3.5rem' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{
                padding: '0.45rem 1.2rem', borderRadius: 9999, fontSize: '0.78rem', fontWeight: 600,
                cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                ...(filter === cat
                  ? { background: '#111111', color: 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }
                  : { background: 'rgba(0,0,0,0.05)', color: '#666666', border: '1px solid rgba(0,0,0,0.1)' }
                ),
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {shown.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#bbbbbb', fontSize: '0.82rem', marginTop: '3rem' }}>
          More on{' '}
          <a href="https://github.com/AyushSNair" target="_blank" rel="noopener noreferrer"
            style={{ color: '#444444' }} onMouseEnter={e => (e.currentTarget.style.textDecoration='underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration='none')}>
            GitHub →
          </a>
        </p>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
