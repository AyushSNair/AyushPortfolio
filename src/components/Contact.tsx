import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const contactLinks = [
  { id: 'email-link',    icon: <Mail size={18} />,         label: 'Email',    value: 'nairayush45@gmail.com',               href: 'mailto:nairayush45@gmail.com',                accent: 'linear-gradient(135deg,#111111,#333333)' },
  { id: 'github-link',   icon: <GithubIcon size={18} />,   label: 'GitHub',   value: 'github.com/AyushSNair',               href: 'https://github.com/AyushSNair',               accent: 'linear-gradient(135deg,#333333,#555555)' },
  { id: 'linkedin-link', icon: <LinkedinIcon size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/ayush-nair-b71699284', href: 'https://linkedin.com/in/ayush-nair-b71699284', accent: 'linear-gradient(135deg,#222222,#444444)' },
  { id: 'phone-link',    icon: <Phone size={18} />,        label: 'Phone',    value: '+91 9321061394',                       href: 'tel:+919321061394',                           accent: 'linear-gradient(135deg,#444444,#666666)' },
];

type Status = 'idle' | 'sending' | 'success';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const link = `mailto:nairayush45@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = link;
    setTimeout(() => { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); }, 800);
  };

  const inputStyle = {
    width: '100%', padding: '0.85rem 1.1rem', borderRadius: '0.75rem',
    background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)',
    color: '#111111', fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#f8f8f8' }} aria-label="Contact section">
      <div style={{ maxWidth: 1050, margin: '0 auto' }}>

        {/* Header */}
        <div className="section-header">
          <span className="section-number">07 — Let's Talk</span>
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <div className="section-divider" />
          <p style={{ color: '#888888', fontSize: '0.9rem', maxWidth: 460, margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            Actively looking for software engineering & AI/ML roles. Open to full-time, internships, and research collaborations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,3fr)', gap: '3rem', alignItems: 'start' }}>

          {/* ── Left: Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Status */}
            <div className="glass" style={{ borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'pulse 2s ease-in-out infinite' }} />
                <span style={{ color: '#16a34a', fontWeight: 700, fontSize: '0.85rem' }}>Available for Work</span>
              </div>
              <p style={{ color: '#888888', fontSize: '0.82rem', lineHeight: 1.75 }}>
                Final year ending May 2026. Actively interviewing for full-time software engineering and ML engineering roles.
              </p>
            </div>

            {/* Location */}
            <div className="glass" style={{ borderRadius: '1.25rem', padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666666', fontSize: '0.82rem', marginBottom: '0.25rem' }}>
                <MapPin size={13} style={{ color: '#444444' }} /> Based in Navi Mumbai, India
              </div>
              <p style={{ color: '#aaaaaa', fontSize: '0.75rem', paddingLeft: '1.35rem' }}>Open to remote & relocation</p>
            </div>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactLinks.map(link => (
                <a key={link.id} id={link.id} href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass glass-hover"
                  style={{ borderRadius: '1rem', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: link.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ color: '#aaaaaa', fontSize: '0.65rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{link.label}</div>
                    <div style={{ color: '#111111', fontSize: '0.78rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 180 }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="glass" style={{ borderRadius: '1.25rem', padding: '2.5rem' }}>
            <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '1.05rem', marginBottom: '2rem' }}>Send a Message</h3>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={30} style={{ color: '#22c55e' }} />
                </div>
                <h3 style={{ color: '#000000', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Message Composed!</h3>
                <p style={{ color: '#888888', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Your email client should have opened. Reach me at{' '}
                  <a href="mailto:nairayush45@gmail.com" style={{ color: '#333333' }}>nairayush45@gmail.com</a>
                </p>
                <button onClick={() => setStatus('idle')} style={{ padding: '0.75rem 1.75rem', borderRadius: '0.75rem', background: '#111111', color: 'white', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', border: 'none' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} id="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', color: '#888888', fontSize: '0.78rem', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="John Doe" style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', color: '#888888', fontSize: '0.78rem', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@company.com" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', color: '#888888', fontSize: '0.78rem', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={onChange} placeholder="Job Opportunity / Collaboration / ..." style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', color: '#888888', fontSize: '0.78rem', marginBottom: '0.5rem', fontWeight: 500 }}>Message *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange}
                    placeholder="Tell me about the role, project, or collaboration opportunity..."
                    style={{ ...inputStyle, resize: 'none' }} />
                </div>

                <button type="submit" id="contact-submit" disabled={status === 'sending'}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', padding: '0.95rem', borderRadius: '0.875rem', background: '#111111', color: 'white', fontWeight: 700, fontSize: '0.9rem', cursor: status === 'sending' ? 'not-allowed' : 'pointer', border: 'none', opacity: status === 'sending' ? 0.65 : 1, boxShadow: '0 4px 20px rgba(0,0,0,0.15)', transition: 'all 0.2s', marginTop: '0.5rem' }}>
                  {status === 'sending'
                    ? <><span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} /> Opening Mail Client...</>
                    : <><Send size={15} /> Send Message</>
                  }
                </button>

                <p style={{ textAlign: 'center', color: '#cccccc', fontSize: '0.72rem' }}>
                  This opens your email client. Or email directly at nairayush45@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
