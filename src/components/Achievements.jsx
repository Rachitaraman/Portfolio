const hackathons = [
  { name: 'AWS ImpactX Hackathon', badge: 'Finalist · Offline Round', color: '#FB923C' },
  { name: 'Myntra HackerRamp 2025', badge: 'Stage 3 Qualifier', color: '#F472B6' },
  { name: 'Adobe India Hackathon', badge: 'Round 2 Qualifier', color: '#A78BFA' },
]

const academic = [
  { stat: 'AIR 75 & 93', label: 'IMO Silver Medalist', color: '#F5C842' },
  { stat: 'Top 300', label: 'IOQM · TIFR', color: '#F5C842' },
  { stat: 'Top 1%', label: 'IOQC State Topper', color: '#F5C842' },
  { stat: '1503', label: 'CodeChef Rating', color: '#BFFF00' },
  { stat: '1049', label: 'Codeforces Rating', color: '#BFFF00' },
  { stat: '400+', label: 'DSA Problems Solved', color: '#00FF94' },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '8rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>05 / Recognition</p>

        <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '4rem' }}>
          Awards &<br /><span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>achievements.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="reveal reveal-delay-1" style={{ padding: '2.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Hackathons</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {hackathons.map(h => (
                <div key={h.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', gap: '1rem', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = h.color + '50'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{h.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.06em', padding: '0.2rem 0.6rem', background: h.color + '15', border: `1px solid ${h.color}30`, color: h.color, borderRadius: '100px', whiteSpace: 'nowrap' }}>{h.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ padding: '2.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Academic & DSA</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {academic.map(a => (
                <div key={a.label} style={{ padding: '1rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = a.color + '40'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: a.color, lineHeight: 1 }}>{a.stat}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray)', marginTop: '0.3rem' }}>{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cert */}
        <div className="reveal reveal-delay-3" style={{ marginTop: '1.5rem', padding: '1.5rem 2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.5rem' }}>🎓</span>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>Advanced Certification in Data Science & AI</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#00d4ff' }}>IIT Madras & IIT Roorkee</div>
          </div>
        </div>
      </div>
    </section>
  )
}
