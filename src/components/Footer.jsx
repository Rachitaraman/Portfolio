export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 2.5rem',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--accent)', letterSpacing: '-0.02em' }}>
        RR<span style={{ color: 'var(--white)' }}>.</span>
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gray2)', letterSpacing: '0.08em' }}>
        © 2025 Rachita Raman · Built with React & Vite · Mumbai, India
      </span>
      <a href="#hero" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gray2)',
        letterSpacing: '0.08em', transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--gray2)'}
      >Back to top ↑</a>
    </footer>
  )
}
