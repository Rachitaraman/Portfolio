export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

          <div>
            <p className="reveal" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem',
            }}>01 / About</p>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '2rem',
            }}>
              Engineer.<br />Builder.{' '}
              <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent)' }}>Solver.</span>
            </h2>
            <p className="reveal reveal-delay-2" style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              I'm a CS undergrad at <strong style={{ color: 'var(--white)' }}>NIT Patna (CGPA 8.42)</strong> with a broad engineering foundation —
              strong in <strong style={{ color: 'var(--white)' }}>Data Structures & Algorithms</strong>, system design, and building
              full-stack products from scratch. My sweet spot is applying ML/AI in production systems that actually ship.
            </p>
            <p className="reveal reveal-delay-3" style={{ color: 'var(--gray)', lineHeight: 1.9, fontSize: '0.95rem' }}>
              I've built REST APIs, designed databases, written clean Python/Java/C++ across 400+ DSA problems,
              and shipped <strong style={{ color: 'var(--white)' }}>two live products</strong>. When I'm not coding, I compete in math olympiads —
              IMO Silver Medalist (AIR 75 & 93).
            </p>
          </div>

          {/* Cards */}
          <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { icon: '🎓', title: 'Education', desc: 'B.Tech CS · NIT Patna · CGPA 8.42 · Aug 2023–Present' },
              { icon: '🏛️', title: 'Internship', desc: 'ML Engineer Intern · CRIS, Ministry of Railways, GoI' },
              { icon: '⚙️', title: 'Engineering', desc: 'DSA · System Design · REST APIs · Full-Stack · Docker' },
              { icon: '📍', title: 'Location', desc: 'Mumbai, India · Open to Remote & Relocation' },
            ].map(card => (
              <div key={card.title} style={{
                padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '12px', transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{card.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gray)', lineHeight: 1.5 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
