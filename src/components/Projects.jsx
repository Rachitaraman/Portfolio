const projects = [
  {
    num: '01',
    name: 'ClearClause AI',
    category: 'Gen-AI · LegalTech · Full-Stack',
    desc: 'End-to-end contract risk platform: async Flask REST APIs on AWS Lambda, LangChain-powered LLM clause extraction, PostgreSQL storage, and a live web UI. Reduced per-document review from ~45 mins to under 18 mins across 500+ contracts.',
    tags: ['Python', 'Flask', 'REST APIs', 'LangChain', 'LLM', 'AWS Lambda', 'S3', 'PostgreSQL', 'Prompt Engineering'],
    github: 'https://github.com/rachitaraman/clearclause',
    live: 'https://clearclause-ai.onrender.com',
    award: 'AWS ImpactX Finalist',
    metrics: [{ v: '60%', l: 'Review time ↓' }, { v: '40%', l: 'API latency ↓' }, { v: '200+', l: 'Concurrent users' }],
    color: '#BFFF00',
    sdePillars: ['REST APIs', 'Async Backend', 'Cloud Deploy', 'Caching'],
  },
  {
    num: '02',
    name: 'CityCircuit',
    category: 'ML · Full-Stack · Backend',
    desc: 'Full-stack transport optimization app with a Flask REST API backend, JavaScript frontend, PostgreSQL DB, and a TensorFlow neural network. Built the entire data pipeline — EDA, cleaning 23% noisy data, feature engineering, k-fold cross-validation across 3 architectures.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'REST APIs', 'PostgreSQL', 'JavaScript', 'Data Pipeline'],
    github: 'https://github.com/Rachitaraman/CityCircuit',
    live: 'https://city-circuit.vercel.app/',
    award: null,
    metrics: [{ v: '87.4%', l: 'Model accuracy' }, { v: '35%', l: 'Over baseline' }, { v: '10K+', l: 'Records processed' }],
    color: '#00FF94',
    sdePillars: ['Full-Stack', 'REST APIs', 'PostgreSQL', 'Data Pipeline'],
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>03 / Work</p>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Featured<br /><span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>projects.</span>
            </h2>
          </div>
          <a className="reveal reveal-delay-2" href="https://github.com/Rachitaraman" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', padding: '0.6rem 1.5rem', border: '1px solid var(--border2)', borderRadius: '100px', color: 'var(--gray)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--gray)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
          >All Projects ↗</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((p, idx) => (
            <div key={p.num} className={`reveal reveal-delay-${idx + 1}`} style={{
              border: '1px solid var(--border)', borderRadius: '16px', background: 'var(--surface)', overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + '50'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ height: '2px', background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gray2)' }}>{p.num}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{p.name}</h3>
                    {p.award && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em', padding: '0.2rem 0.6rem', background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.3)', color: '#f5c842', borderRadius: '100px' }}>★ {p.award}</span>
                    )}
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: p.color, letterSpacing: '0.1em', marginBottom: '1rem' }}>{p.category}</p>
                  <p style={{ fontSize: '0.92rem', color: 'var(--gray)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '600px' }}>{p.desc}</p>

                  {/* SDE pillars */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--gray2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '0.25rem', paddingTop: '0.25rem' }}>SDE:</span>
                    {p.sdePillars.map(s => (
                      <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.2rem 0.55rem', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', borderRadius: '100px' }}>{s}</span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '1.5rem' }}>
                    {p.metrics.map(m => (
                      <div key={m.l}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: p.color, lineHeight: 1 }}>{m.v}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--gray2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{m.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.25rem 0.65rem', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--gray2)', borderRadius: '100px' }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingTop: '0.5rem' }}>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', padding: '0.5rem 1rem', background: p.color, color: '#000', borderRadius: '100px', fontWeight: 600, transition: 'opacity 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>Live ↗</a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', padding: '0.5rem 1rem', border: '1px solid var(--border2)', color: 'var(--gray)', borderRadius: '100px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--gray)' }}>GitHub ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
