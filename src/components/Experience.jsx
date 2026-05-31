const bullets = [
  { text: 'Architected end-to-end face verification system — designed the full service layer: image ingestion, preprocessing, embedding extraction, similarity scoring, and threshold-based accept/reject decision with under 300ms inference.', highlight: '300ms' },
  { text: 'Benchmarked FaceNet vs ArcFace on 500+ image pairs — ArcFace hit 94.2% accuracy. Integrated with existing biometric attendance infra (fingerprint + photo capture), achieving FAR below 2%.', highlight: '94.2%' },
  { text: 'Built and integrated REST API endpoints into the railway crew operations backend — connected the CV service to 1,000+ crew records in production database, with error handling and logging for safety-critical uptime.', highlight: '1,000+' },
  { text: 'Tackled real-world data challenges — histogram equalisation, face alignment, and augmentation improved model robustness by 18% on hard cases (low-res images, lighting shifts, pose mismatch).', highlight: '18%' },
  { text: 'Wrote clean, documented Python modules across the pipeline — from preprocessing utilities to model wrappers — following engineering best practices for a government-grade safety system.', highlight: 'government-grade' },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '8rem 2.5rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="reveal" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem',
        }}>02 / Experience</p>

        <h2 className="reveal reveal-delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '4rem',
        }}>Where I've<br /><span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>worked.</span></h2>

        <div className="reveal reveal-delay-2" style={{
          border: '1px solid var(--border)', borderRadius: '16px',
          overflow: 'hidden', background: 'var(--surface)',
        }}>
          <div style={{
            padding: '2.5rem', borderBottom: '1px solid var(--border)',
            background: 'linear-gradient(135deg, rgba(191,255,0,0.05) 0%, transparent 60%)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem',
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#000',
                background: 'var(--accent)', padding: '0.3rem 0.8rem', borderRadius: '100px', marginBottom: '1rem',
              }}>ML Engineer Intern</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
                Centre for Railway Information Systems
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>
                Ministry of Railways, Govt. of India · CV pipeline + backend integration for national railway crew ops
              </p>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gray)',
              padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--bg)',
            }}>May – Jul 2025</div>
          </div>

          <div style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'rgba(191,255,0,0.1)', border: '1px solid rgba(191,255,0,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent)', fontWeight: 500,
                  }}>{'0' + (i + 1)}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.75, paddingTop: '0.2rem' }}>
                    {b.text.split(b.highlight).map((part, j, arr) => (
                      j < arr.length - 1
                        ? <span key={j}>{part}<strong style={{ color: 'var(--white)' }}>{b.highlight}</strong></span>
                        : <span key={j}>{part}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Two tag groups */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '0.25rem' }}>ML/AI</span>
                {['FaceNet', 'ArcFace', 'OpenCV', 'TensorFlow', 'Face Embeddings', 'Computer Vision'].map(t => (
                  <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.25rem 0.65rem', background: 'rgba(191,255,0,0.07)', border: '1px solid rgba(191,255,0,0.2)', color: 'var(--gray)', borderRadius: '100px' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#00FF94', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '0.25rem' }}>SDE</span>
                {['Python', 'REST APIs', 'PostgreSQL', 'Git', 'Modular Architecture', 'Backend Integration'].map(t => (
                  <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.25rem 0.65rem', background: 'rgba(0,255,148,0.07)', border: '1px solid rgba(0,255,148,0.2)', color: 'var(--gray)', borderRadius: '100px' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
