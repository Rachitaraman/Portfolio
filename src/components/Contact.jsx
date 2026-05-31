export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 2.5rem',
      background: 'var(--bg2)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(191,255,0,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="reveal" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem',
        }}>06 / Contact</p>

        <h2 className="reveal reveal-delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em',
          marginBottom: '1.5rem',
        }}>
          Let's build<br />
          <span style={{ color: 'var(--accent)' }}>something</span><br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>together.</span>
        </h2>

        <p className="reveal reveal-delay-2" style={{
          fontSize: '1rem', color: 'var(--gray)', lineHeight: 1.8, marginBottom: '3rem',
        }}>
          Open to ML Engineer internships, AI research roles, and interesting collaborations.
          <br />Based in Mumbai — open to remote.
        </p>

        <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="mailto:rachitaraman1206@gmail.com" style={{
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem',
            padding: '1rem 2.5rem',
            background: 'var(--accent)', color: '#000',
            borderRadius: '100px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(191,255,0,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >Send an Email ↗</a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem',
            padding: '1rem 2.5rem',
            border: '1px solid var(--border2)', color: 'var(--white)',
            borderRadius: '100px',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >LinkedIn ↗</a>
        </div>

        {/* Social links */}
        <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/Rachitaraman' },
            { label: 'rachitaraman1206@gmail.com', href: 'mailto:rachitaraman1206@gmail.com' },
            { label: '+91 9321308542', href: 'tel:+919321308542' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gray)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
