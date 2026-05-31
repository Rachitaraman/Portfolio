const items = [
  'Machine Learning', '✦', 'System Design', '✦', 'Computer Vision', '✦',
  'DSA · 400+', '✦', 'LLM & RAG', '✦', 'REST APIs', '✦',
  'Full-Stack', '✦', 'ArcFace', '✦', 'PostgreSQL', '✦', 'Docker', '✦',
  'NIT Patna', '✦', 'AWS Finalist', '✦', 'IMO Silver', '✦',
  'Machine Learning', '✦', 'System Design', '✦', 'Computer Vision', '✦',
  'DSA · 400+', '✦', 'LLM & RAG', '✦', 'REST APIs', '✦',
  'Full-Stack', '✦', 'ArcFace', '✦', 'PostgreSQL', '✦', 'Docker', '✦',
]

export default function Marquee() {
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', padding: '1rem 0' }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: item === '✦' ? 'serif' : 'var(--font-display)',
            fontSize: item === '✦' ? '0.7rem' : '0.78rem',
            fontWeight: item === '✦' ? 400 : 700,
            letterSpacing: item === '✦' ? 0 : '0.1em',
            textTransform: 'uppercase',
            color: item === '✦' ? 'var(--accent)' : 'var(--gray)',
            flexShrink: 0,
          }}>{item}</span>
        ))}
      </div>
    </div>
  )
}
