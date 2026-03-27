import Hero from './components/Home/Hero'
import Login from './components/Login/Login'
import { useMemo, useEffect, useState } from 'react'

function App() {
  const [countdown, setCountdown] = useState(10)
  const [isCountdownStarted, setIsCountdownStarted] = useState(false)
  const [isUnveiling, setIsUnveiling] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${(i * 37) % 100}%`,
        left: `${(i * 53) % 100}%`,
        duration: `${5 + (i % 10)}s`,
        delay: `${(i % 5) * 0.5}s`
      })),
    []
  )

  useEffect(() => {
    if (!isCountdownStarted || isUnveiling || isRevealed || countdown <= 0) return

    const intervalId = window.setInterval(() => {
      setCountdown((previous) => {
        if (previous <= 1) {
          window.clearInterval(intervalId)
          setIsUnveiling(true)
          return 0
        }
        return previous - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [countdown, isCountdownStarted, isUnveiling, isRevealed])

  useEffect(() => {
    if (!isUnveiling) return
    const timeoutId = window.setTimeout(() => {
      setIsRevealed(true)
      setIsUnveiling(false)
    }, 2000)
    return () => window.clearTimeout(timeoutId)
  }, [isUnveiling])

  const handleStartUnveil = () => {
    console.log('Button clicked!')
    setIsCountdownStarted(true)
  }

  if (!isRevealed) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-[20%] left-[10%] h-125 w-125 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 opacity-30 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] h-150 w-150 rounded-full bg-linear-to-r from-purple-600 to-pink-500 opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[50%] left-[50%] h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 opacity-25 blur-[90px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.duration} ease-in-out infinite`,
              animationDelay: particle.delay
            }}
          />
        ))}

        {/* Top Curtain with Holographic Effect */}
        <div
          className={`absolute inset-x-0 top-0 z-50 h-1/2 origin-top backdrop-blur-sm transition-all duration-2000 ease-[cubic-bezier(0.87,0,0.13,1)] ${
            isUnveiling ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(15,23,42,0.9) 50%, rgba(30,41,59,0.8) 100%)',
            borderBottom: '2px solid rgba(34, 211, 238, 0.3)',
            boxShadow: '0 10px 50px rgba(34, 211, 238, 0.2)'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <span className="text-cyan-400/80 text-xs tracking-[0.5em] uppercase font-light">Encrypted</span>
          </div>
        </div>
        
        {/* Bottom Curtain with Holographic Effect */}
        <div
          className={`absolute inset-x-0 bottom-0 z-50 h-1/2 origin-bottom backdrop-blur-sm transition-all duration-2000 ease-[cubic-bezier(0.87,0,0.13,1)] ${
            isUnveiling ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
          style={{
            background: 'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(15,23,42,0.9) 50%, rgba(30,41,59,0.8) 100%)',
            borderTop: '2px solid rgba(34, 211, 238, 0.3)',
            boxShadow: '0 -10px 50px rgba(34, 211, 238, 0.2)'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-purple-500/5 to-transparent" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
            <span className="text-purple-400/80 text-xs tracking-[0.5em] uppercase font-light">System Ready</span>
          </div>
        </div>

        {/* Main Content */}
        <div className={`relative z-60 text-center transition-all duration-1000 ${
          isUnveiling ? 'scale-150 opacity-0 blur-xl' : 'scale-100 opacity-100 blur-0'
        }`}>
          
          {/* Glassmorphic Container */}
          <div className="relative px-16 py-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.3)]">
            
            {/* Animated Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl opacity-60" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-400 rounded-tr-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-400 rounded-bl-3xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400 rounded-br-3xl opacity-60" />

            {/* Logo/Title Section */}
            <div className="relative mb-12">
              
              {/* Glow Effect Behind Text */}
              <div className="absolute top-1/2 left-1/2 h-25 w-75 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 blur-[60px] opacity-50 animate-pulse" />
              
              <h1 className="relative text-[clamp(3rem,8vw,5rem)] font-black uppercase tracking-[0.3em] mb-4">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] animate-gradient">
                  Met Club
                </span>
              </h1>
              
              {/* Animated Underline */}
              <div className="relative h-1 w-32 mx-auto overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
              </div>
              
              {/* Subtitle */}
              <p className="mt-4 text-sm text-white/60 tracking-[0.4em] uppercase font-light">
                Premium Experience
              </p>
            </div>

            {/* Button or Countdown */}
            {!isCountdownStarted && !isUnveiling && (
              <div className="relative">
                <button
                  onClick={handleStartUnveil}
                  className="relative overflow-hidden rounded-full px-12 py-5 text-base font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(168,85,247,0.3) 100%)',
                    border: '2px solid rgba(34,211,238,0.5)'
                  }}
                >
                  <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-purple-300">
                    Unveil Experience
                  </span>
                </button>
              </div>
            )}

            {isCountdownStarted && !isUnveiling && (
              <div className="relative">
                {/* Circular Progress */}
                <div className="relative mt-12 w-48 h-48 mx-auto">
                  <svg className="absolute inset-0 -rotate-90 w-full h-full">
                    <circle
                      cx="96"
                      cy="96"
                      r="90"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="90"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 90}`}
                      strokeDashoffset={`${2 * Math.PI * 90 * (countdown / 10)}`}
                      className="transition-all duration-1000 ease-linear drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white/80">
                      {Math.round((10 - countdown) * 10)}%
                    </span>
                  </div>
                </div>

                {/* Loading Dots */}
                <div className="mt-8 flex items-center justify-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Custom CSS for Animations */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-20px) translateX(10px);
              opacity: 0.8;
            }
          }
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
          
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="bg-linear-to-br from-blue-500 via-teal-500 to-cyan-500">
      <div className="flex flex-col lg:flex-row items-center lg:items-center min-h-[calc(100vh-68px)] px-4 sm:px-8 md:px-16 py-6 gap-8">
        <div className="flex flex-col justify-between flex-1 w-full">
          <Hero />
        </div>
        <div className="w-full max-w-md lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start">
          <Login />
        </div>
      </div>
      <footer className="text-white py-6 text-sm text-center">
        <a href="http://cdsr.com.bd" target="_blank" rel="noopener noreferrer">Developed by Centre for Data Science Research (CDSR)</a>
      </footer>
    </div>
  )
}

export default App