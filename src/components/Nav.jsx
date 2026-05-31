import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '1.25rem 2.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.1rem',
        letterSpacing: '-0.02em',
        color: 'var(--accent)',
      }}>RR<span style={{ color: 'var(--white)' }}>.</span></a>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            color: 'var(--gray)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
          >{l.label}</a>
        ))}
        <a href="#contact" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          padding: '0.5rem 1.25rem',
          border: '1px solid var(--accent)',
          color: 'var(--accent)',
          borderRadius: '100px',
          transition: 'all 0.25s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
        >Let's Talk</a>
      </div>
    </nav>
  )
}
