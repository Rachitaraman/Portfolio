const groups = [
  // AI/ML — 65%
  { label: 'Computer Vision', color: '#BFFF00', tag: 'AI/ML', items: ['FaceNet', 'ArcFace', 'OpenCV', 'Face Verification', 'Face Embeddings', 'Cosine Similarity', 'Biometrics'] },
  { label: 'ML & Deep Learning', color: '#00FF94', tag: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Neural Networks', 'Feature Engineering', 'Model Evaluation', 'NLP', 'k-fold CV'] },
  { label: 'Generative AI', color: '#A78BFA', tag: 'AI/ML', items: ['LangChain', 'LLM Integration', 'Prompt Engineering', 'OpenAI API', 'RAG Pipelines', 'Hugging Face'] },
  { label: 'Data & Analytics', color: '#FB923C', tag: 'AI/ML', items: ['Pandas', 'NumPy', 'EDA', 'Hypothesis Testing', 'A/B Testing', 'Matplotlib', 'Seaborn', 'PySpark'] },
  // SDE — 35%
  { label: 'Languages & DSA', color: '#F5C842', tag: 'SDE', items: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL', 'Go', 'TypeScript', 'DSA · 400+'] },
  { label: 'Backend & Infra', color: '#00d4ff', tag: 'SDE', items: ['REST APIs', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'AWS Lambda', 'S3', 'Docker', 'Git', 'CI/CD', 'PyTest', 'System Design'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 2.5rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>04 / Stack</p>

        <div className="reveal reveal-delay-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Technical<br /><span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>arsenal.</span>
          </h2>
          {/* Split bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em' }}>
              <span style={{ color: 'var(--accent)' }}>AI / ML / Gen-AI</span>
              <span style={{ color: '#00d4ff' }}>SDE</span>
            </div>
            <div style={{ height: '4px', borderRadius: '100px', background: 'var(--surface2)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg, var(--accent), #00FF94)', borderRadius: '100px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--gray2)' }}>
              <span>65%</span><span>35%</span>
            </div>
          </div>
        </div>

        {/* AI/ML group */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', padding: '0.2rem 0.75rem', border: '1px solid rgba(191,255,0,0.3)', borderRadius: '100px', background: 'rgba(191,255,0,0.05)' }}>AI · ML · Gen-AI</span>
            <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            {groups.filter(g => g.tag === 'AI/ML').map((g, i) => (
              <SkillCard key={g.label} g={g} i={i} />
            ))}
          </div>
        </div>

        {/* SDE group */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00d4ff', padding: '0.2rem 0.75rem', border: '1px solid rgba(0,212,255,0.3)', borderRadius: '100px', background: 'rgba(0,212,255,0.05)' }}>SDE · Backend · Infra</span>
            <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {groups.filter(g => g.tag === 'SDE').map((g, i) => (
              <SkillCard key={g.label} g={g} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ g, i }) {
  return (
    <div className={`reveal reveal-delay-${(i % 4) + 1}`} style={{
      padding: '1.75rem', background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: '16px', transition: 'border-color 0.3s, transform 0.3s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = g.color + '40'; e.currentTarget.style.transform = 'translateY(-4px)' }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: g.color, flexShrink: 0, boxShadow: `0 0 6px ${g.color}80` }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray)' }}>{g.label}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {g.items.map(s => (
          <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', padding: '0.25rem 0.6rem', background: g.color + '10', border: `1px solid ${g.color}25`, color: 'var(--gray)', borderRadius: '100px', transition: 'color 0.2s, background 0.2s', cursor: 'default' }}
          onMouseEnter={e => { e.currentTarget.style.color = g.color; e.currentTarget.style.background = g.color + '20' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--gray)'; e.currentTarget.style.background = g.color + '10' }}
          >{s}</span>
        ))}
      </div>
    </div>
  )
}
