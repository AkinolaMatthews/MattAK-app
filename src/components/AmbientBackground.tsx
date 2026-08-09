import { useEffect, useState } from 'react'

function AmbientBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-20 -left-20 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * 40}px, ${mouse.y * 40}px)` }}
      >
        <div className="w-[36rem] h-[36rem] rounded-full bg-emerald-400/25 dark:bg-emerald-400/15 blur-[110px] animate-float-slow" />
      </div>

      <div
        className="absolute top-1/3 -right-20 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * -50}px, ${mouse.y * 25}px)` }}
      >
        <div className="w-[32rem] h-[32rem] rounded-full bg-sky-400/20 dark:bg-sky-500/15 blur-[110px] animate-float-slower" />
      </div>

      <div
        className="absolute bottom-0 left-1/4 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * -30}px)` }}
      >
        <div className="w-[28rem] h-[28rem] rounded-full bg-amber-300/20 dark:bg-amber-400/15 blur-[110px] animate-float-slow" />
      </div>
    </div>
  )
}

export default AmbientBackground