import Hero from './components/Home/Hero'
import Login from './components/Login/Login'
import { useEffect, useState, useRef } from 'react'
import bgImage from './assets/images/bg.png'
import bgImage2 from './assets/images/Unveling.png'

// 🔊 Replace with your actual clap audio URL or import
const CLAP_AUDIO_URL = 'YOUR_CLAP_AUDIO_URL_HERE'

type ConfettiPiece = {
  left: string
  width: string
  height: string
  backgroundColor: string
  borderRadius: string
  animation: string
  animationDelay: string
  transform: string
}

const CONFETTI_COLORS = ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#32CD32', '#FF1493', '#ffffff', '#FFA500']

function App() {
  const [countdown, setCountdown] = useState(10)
  const [isCountdownStarted, setIsCountdownStarted] = useState(false)
  const [isUnveiling, setIsUnveiling] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

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

    // 🔊 Play clap audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }

    const timeoutId = window.setTimeout(() => {
      setIsRevealed(true)
      setIsUnveiling(false)
    }, 2200)
    return () => window.clearTimeout(timeoutId)
  }, [isUnveiling])

  const generateConfettiPieces = () => {
    return Array.from({ length: 80 }, () => ({
      left: `${Math.random() * 100}%`,
      width: `${6 + Math.random() * 10}px`,
      height: `${6 + Math.random() * 10}px`,
      backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      animation: `confettiFall ${1.5 + Math.random() * 2.5}s linear forwards`,
      animationDelay: `${Math.random() * 0.8}s`,
      transform: `rotate(${Math.random() * 360}deg)`,
    }))
  }

  const handleStartUnveil = () => {
    setConfettiPieces(generateConfettiPieces())
    setIsCountdownStarted(true)
  }

  if (!isRevealed) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">

        {/* 🔊 Hidden audio */}
        <audio ref={audioRef} src={CLAP_AUDIO_URL} preload="auto" />

        {/* ── LAYER 1 (bottom): Main landing page — always visible underneath ── */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Glass overlay — same as revealed state */}
          <div
            className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_42%,rgba(255,255,255,0.06))] backdrop-blur-[3px]"
            style={{ boxShadow: 'inset 0 0 70px rgba(15, 23, 42, 0.12)' }}
          />
          {/* Hero + Login rendered below, visible as shutter lifts */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-8 md:px-16 py-6 gap-8">
            <div className="flex flex-col justify-between flex-1 w-full">
              <Hero />
            </div>
            <div className="w-full max-w-md lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start">
              <Login />
            </div>
          </div>
        </div>

        {/* ── LAYER 2 (top): Shutter — slides UP when unveiling ── */}
        <div
          className="absolute inset-0 z-20"
          style={{
            transform: isUnveiling ? 'translateY(-100%)' : 'translateY(0)',
            transition: isUnveiling ? 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {/* Unveiling background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Animated Weather Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[8%] left-[8%] w-16 h-16 opacity-70 animate-float-slow">
              <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255,200,200,0.9)" strokeWidth="3">
                <circle cx="50" cy="50" r="20" fill="none" />
                <path d="M50 10L50 25M50 75L50 90M10 50L25 50M75 50L90 50" strokeLinecap="round" />
                <path d="M20 20L30 30M70 70L80 80M80 20L70 30M30 70L20 80" strokeLinecap="round" />
                <path d="M55 40L45 55L52 55L48 70" strokeWidth="2" fill="rgba(255,200,200,0.9)" />
              </svg>
            </div>

            <div className="absolute top-[5%] left-[20%] w-20 h-20 opacity-70 animate-float-medium">
              <svg viewBox="0 0 100 100" fill="rgba(255,200,200,0.8)" stroke="rgba(255,200,200,0.9)" strokeWidth="2">
                <path d="M30 40Q30 25 45 25Q50 15 60 20Q75 20 75 35Q85 35 85 50Q85 60 75 60L30 60Q18 60 18 48Q18 40 30 40Z" />
                <path d="M35 65L32 75M45 65L42 75M55 65L52 75M65 65L62 75" stroke="rgba(255,200,200,0.9)" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute top-[3%] left-[38%] w-16 h-16 opacity-70 animate-spin-slow">
              <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255,200,200,0.9)" strokeWidth="2.5">
                <circle cx="50" cy="30" r="12" />
                <path d="M50 42Q60 50 50 58Q40 66 50 74Q60 82 50 92" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <div className="absolute top-[10%] right-[25%] w-12 h-16 opacity-70 animate-pulse-slow">
              <svg viewBox="0 0 100 100" fill="rgba(255,200,200,0.9)">
                <path d="M55 10L35 50L50 50L40 90L75 45L58 45L75 10Z" />
              </svg>
            </div>

            <div className="absolute top-[8%] right-[8%] w-20 h-20 opacity-70 animate-float-slow">
              <svg viewBox="0 0 100 100" fill="rgba(255,200,200,0.8)" stroke="rgba(255,200,200,0.9)" strokeWidth="2">
                <path d="M25 45Q25 30 40 30Q45 20 55 25Q70 25 70 40Q80 40 80 55Q80 65 70 65L25 65Q13 65 13 53Q13 45 25 45Z" />
                <circle cx="45" cy="55" r="8" fill="rgba(255,200,200,0.6)" />
              </svg>
            </div>

            <div className="absolute top-[35%] left-[5%] w-16 h-16 opacity-70 animate-float-medium">
              <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255,200,200,0.9)" strokeWidth="3">
                <path d="M50 50Q70 50 70 30Q70 20 60 20" strokeLinecap="round" />
                <path d="M50 50Q30 50 30 70Q30 80 40 80" strokeLinecap="round" />
                <circle cx="50" cy="50" r="8" fill="rgba(255,200,200,0.3)" />
              </svg>
            </div>

            <div className="absolute top-[55%] left-[10%] w-10 h-14 opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}>
              <svg viewBox="0 0 100 100" fill="rgba(255,200,200,0.9)">
                <path d="M60 10L40 50L55 50L35 90L70 45L55 45Z" />
              </svg>
            </div>

            <div className="absolute bottom-[20%] left-[8%] w-20 h-20 opacity-70 animate-spin-very-slow">
              <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255,200,200,0.9)" strokeWidth="2.5">
                <circle cx="50" cy="50" r="35" /><circle cx="50" cy="50" r="25" /><circle cx="50" cy="50" r="15" />
                <path d="M50 15L50 85M15 50L85 50" />
              </svg>
            </div>

            <div className="absolute top-[20%] right-[12%] w-24 h-16 opacity-70 animate-float-medium">
              <svg viewBox="0 0 120 80" fill="none" stroke="rgba(255,200,200,0.9)" strokeWidth="3">
                <path d="M10 40Q30 20 60 40Q90 60 110 40" strokeLinecap="round" />
                <path d="M10 50Q30 30 60 50Q90 70 110 50" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>

            <div className="absolute top-[45%] right-[5%] w-20 h-20 opacity-70 animate-float-slow">
              <svg viewBox="0 0 100 100" fill="rgba(255,200,200,0.8)" stroke="rgba(255,200,200,0.9)" strokeWidth="2">
                <path d="M30 35Q30 20 45 20Q50 10 60 15Q75 15 75 30Q85 30 85 45Q85 55 75 55L30 55Q18 55 18 43Q18 35 30 35Z" />
                <path d="M35 60L32 72M45 60L42 72M55 60L52 72M65 60L62 72M75 60L72 72" stroke="rgba(255,200,200,0.9)" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute bottom-[25%] right-[10%] w-20 h-20 opacity-70 animate-spin-very-slow" style={{ animationDelay: '2s' }}>
              <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255,200,200,0.9)" strokeWidth="2.5">
                <path d="M50 10Q80 25 80 50Q80 75 50 90Q20 75 20 50Q20 25 50 10" strokeLinecap="round" />
                <circle cx="50" cy="50" r="12" />
              </svg>
            </div>
          </div>

          {/* Button / Countdown — inside shutter */}
          <div
            className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-700 ${
              isUnveiling ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            }`}
          >
            {!isCountdownStarted && (
              <div className="text-center">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg"
                  style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.8)' }}
                >
                  Are You Ready for the Next Wave?
                </h2>
                <button
                  onClick={handleStartUnveil}
                  className="px-12 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-2xl hover:from-red-500 hover:to-red-600 hover:scale-105 transition-all duration-300 border-2 border-red-400 cursor-pointer"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                >
                  Start Experience
                </button>
              </div>
            )}

            {isCountdownStarted && (
              <div className="text-center">
                <div
                  className="text-8xl font-bold text-white mb-4 drop-shadow-2xl animate-pulse"
                  style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.7)' }}
                >
                  {countdown}
                </div>
                <div className="flex items-center justify-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CONFETTI — z-50, above shutter, stays on screen as shutter slides up */}
        {isUnveiling && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
            {confettiPieces.map((piece, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: piece.left,
                  top: `-5%`,
                  width: piece.width,
                  height: piece.height,
                  backgroundColor: piece.backgroundColor,
                  borderRadius: piece.borderRadius,
                  animation: piece.animation,
                  animationDelay: piece.animationDelay,
                  transform: piece.transform,
                  opacity: 0.9,
                }}
              />
            ))}
          </div>
        )}

        {/* Animations */}
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(8px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(-8px); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-very-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
            100% { transform: translateY(110vh) rotate(720deg) scale(0.5); opacity: 0.2; }
          }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
          .animate-spin-very-slow { animation: spin-very-slow 12s linear infinite; }
        `}</style>
      </div>
    )
  }

  // ── Revealed / Main App ──────────────────────────────────────────────────────
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_42%,rgba(255,255,255,0.06))] backdrop-blur-[3px]"
        style={{ boxShadow: 'inset 0 0 70px rgba(15, 23, 42, 0.12)' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center min-h-[calc(100vh-68px)] px-4 sm:px-8 md:px-16 py-6 gap-8">
        <div className="flex flex-col justify-between flex-1 w-full">
          <Hero />
        </div>
        <div className="w-full max-w-md lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start">
          <Login />
        </div>
      </div>

      <footer className="relative z-10 text-white py-6 text-sm text-center drop-shadow-md">
        <a href="http://cdsr.com.bd" target="_blank" rel="noopener noreferrer">
          Developed by Centre for Data Science Research (CDSR)
        </a>
      </footer>
    </div>
  )
}

export default App