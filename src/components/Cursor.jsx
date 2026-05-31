import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const follower = document.getElementById('cursor-follower')
    if (!cursor || !follower) return

    let fx = 0, fy = 0, cx = 0, cy = 0

    const move = e => {
      cx = e.clientX; cy = e.clientY
      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
    }

    const animate = () => {
      fx += (cx - fx) * 0.12
      fy += (cy - fy) * 0.12
      follower.style.left = fx + 'px'
      follower.style.top = fy + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    animate()
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-follower" />
    </>
  )
}
