import { useEffect, useRef, useState } from 'react'

const words = ['ML Engineer', 'SDE', 'Computer Vision', 'Full-Stack Builder', 'Gen-AI Engineer', 'DSA · 400+ Problems']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  useEffect(() => {
    const word = words[wordIdx]
    let timeout
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '8rem 2.5rem 4rem', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '80px 80px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(191,255,0,0.07) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.4rem 1rem', border: '1px solid var(--border2)', borderRadius: '100px',
          marginBottom: '3rem', background: 'rgba(255,255,255,0.03)',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent2)', boxShadow: '0 0 8px var(--accent2)', animation: 'pulse 2s infinite' }} />
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--gray)', letterSpacing: '0.08em' }}>
            Available · NIT Patna · CS · CGPA 8.42
          </span>
        </div>

        {/* Name */}
        <div style={{ overflow: 'hidden', marginBottom: '0.3rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 9rem)',
            fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--white)',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}>Rachita</h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 9rem)',
            fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em',
            color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.22)',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
          }}>Raman</h1>
        </div>

        {/* Typewriter */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray2)' }}>{'{ '}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)', fontWeight: 700, color: 'var(--accent)', minWidth: '320px' }}>
            {displayed}
            <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: 'var(--accent)', marginLeft: '2px', verticalAlign: 'middle', animation: 'blink 1s infinite' }} />
            <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray2)' }}>{' }'}</span>
        </div>

        {/* Bio */}
        <p style={{
          maxWidth: '560px', fontSize: '1rem', color: 'var(--gray)', lineHeight: 1.85, marginBottom: '3rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s',
        }}>
          CS undergrad at <strong style={{ color: 'var(--white)' }}>NIT Patna</strong> who builds end-to-end systems —
          from deep learning pipelines and LLM-powered products to REST APIs and full-stack web apps.
          Strong in <strong style={{ color: 'var(--white)' }}>DSA, system design</strong>, and shipping things that work at scale.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '6rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s',
        }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
            padding: '0.9rem 2rem', background: 'var(--accent)', color: '#000', borderRadius: '100px',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(191,255,0,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >View Projects ↓</a>
          <a href="https://github.com/Rachitaraman" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
            padding: '0.9rem 2rem', background: 'transparent', color: 'var(--white)',
            border: '1px solid var(--border2)', borderRadius: '100px', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >GitHub ↗</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem',
          borderTop: '1px solid var(--border)', paddingTop: '2.5rem',
          opacity: visible ? 1 : 0, transition: 'opacity 0.9s 0.7s',
        }}>
          {[
            { num: '94.2%', label: 'Face Verification', sub: 'ArcFace · CRIS Govt.' },
            { num: '400+', label: 'DSA Solved', sub: 'CodeChef 1503 · CF 1049' },
            { num: 'AIR 75', label: 'IMO Silver Medal', sub: 'Math Olympiad' },
            { num: '2 Live', label: 'Shipped Products', sub: 'ClearClause · CityCircuit' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1, marginBottom: '0.4rem' }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--gray)', marginBottom: '0.15rem' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--gray2)', letterSpacing: '0.06em' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
