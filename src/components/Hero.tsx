import { motion } from 'motion/react'
import { socials } from '../data'
import { TypewriterText } from './TypewriterText'

const heroImage = new URL('../assets/black-user.png', import.meta.url).href

const LINES = [
  'Des histoires vraies.',
  'Des émotions brutes.',
  'Une voix née de la rue.',
]

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: 2 + (i % 3),
  left: 5 + (i * 7) % 90,
  top: 10 + (i * 11) % 80,
  delay: i * 0.4,
  duration: 18 + (i % 6),
}))

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  Snapchat: SnapchatIcon,
  Spotify: SpotifyIcon,
  'X (Twitter)': XIcon,
  Mail: MailIcon,
}

const PLATFORMS = socials
  .filter((s) => SOCIAL_ICONS[s.name])
  .map((s) => ({ ...s, icon: SOCIAL_ICONS[s.name]! }))

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224.061.523.578.523.269 0 .629-.031 1.004-.119.769-.271 1.617-.721 2.299-1.368.344-.329.644-.719.899-1.158.36-.629.57-1.338.57-2.087 0-.419-.061-.839-.181-1.238-.479-1.588-1.653-2.666-3.072-2.666-.39 0-.764.09-1.108.24-.06.029-.119.059-.18.09-.479-.27-1.006-.479-1.611-.599-.419-.09-.9-.149-1.362-.149-.674 0-1.317.149-1.918.419-.345.149-.674.329-.96.54-.06-.21-.09-.449-.09-.688 0-.898.419-1.711 1.072-2.235.66-.523 1.5-.81 2.399-.81.359 0 .718.044 1.062.134.389-.389.899-.629 1.463-.629.06 0 .119.007.179.015.074-.076.149-.152.239-.224.629-.539 1.433-.853 2.297-.853.06 0 .119.007.179.015.029-.03.075-.059.119-.089.808-.688 1.847-1.078 2.966-1.078.24 0 .479.015.718.045-.389-.57-.899-1.047-1.533-1.348-1.317-.629-2.756-.988-4.346-.988z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

export function Hero() {
  return (
    <header className="hero-root relative min-h-screen overflow-hidden flex items-center bg-[#1a1a1d] pt-14 sm:pt-16 pb-24 sm:pb-28 lg:pb-16">
      {/* Fond sombre + grain */}
      <div className="hero-grain" aria-hidden />

      {/* Particules */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="hero-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 1 + p.delay * 0.1, duration: 1 }}
        />
      ))}

      {/* Watermark Kinshasa */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="font-display text-[min(18vw,12rem)] font-bold text-white/[0.035] tracking-tighter whitespace-nowrap">
          Kinshasa
        </span>
      </div>

      {/* Micro-texte culturel */}
      <motion.p
        className="absolute left-4 right-4 sm:left-6 sm:right-auto md:left-10 bottom-14 sm:bottom-8 text-white/40 font-display text-[10px] md:text-xs tracking-[0.2em] uppercase z-10 text-center sm:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        Né à Kinshasa. Pour le monde.
      </motion.p>

      {/* Layout : contenu à gauche, portrait à droite */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
        {/* Colonne texte */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            className="font-display text-white/60 text-xs md:text-sm uppercase tracking-[0.3em] mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            R&B Trap • Kinshasa
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tighter leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            KIP'S
          </motion.h1>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-1 sm:space-y-2">
            {LINES.map((line, i) => (
              <motion.div
                key={i}
                className="text-white text-base sm:text-lg md:text-xl font-light tracking-wide min-h-[1.5em]"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1 + i * 0.2,
                  duration: 0.6,
                }}
              >
                <TypewriterText
                  text={line}
                  speed={50}
                  delay={i === 0 ? 400 : i === 1 ? 1800 : 3200}
                  tag="span"
                  showCursor={i === LINES.length - 1}
                />
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
          >
            <a
              href="#musiques"
              className="hero-cta-glow font-display inline-flex items-center gap-2 px-5 py-3.5 sm:px-6 text-white text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <span className="text-[10px]">▶</span> Écouter
            </a>
            <a
              href="#univers"
              className="hero-cta-outline font-display inline-flex items-center gap-2 px-5 py-3.5 sm:px-6 text-white text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full border border-white/40 transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              <span className="text-sm">🎧</span> Découvrir l'univers
            </a>
          </motion.div>
        </div>

        {/* Colonne portrait */}
        <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2 max-h-[45vh] sm:max-h-[50vh] lg:max-h-none">
          <motion.div
            className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Kip's - Artiste R&B Trap, Kinshasa"
                className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] contrast-[1.02]"
                style={{ filter: 'saturate(0.92) contrast(1.02)' }}
              />
              {/* Overlay grain léger sur l'image */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Icônes plateformes - cascade, côté droit (desktop) / bas (mobile) */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-10"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        {PLATFORMS.map((platform, i) => {
          const Icon = platform.icon
          return (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors duration-300 p-1"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 + i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.15 }}
              aria-label={platform.name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          )
        })}
      </motion.div>

      {/* Icônes en bas sur mobile */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 flex justify-center gap-5 sm:gap-6 lg:hidden z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        {PLATFORMS.map((platform, i) => {
          const Icon = platform.icon
          return (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors p-1"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.08, duration: 0.35 }}
              whileHover={{ scale: 1.1 }}
              aria-label={platform.name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          )
        })}
      </motion.div>

      {/* Bouton son optionnel */}
      <motion.button
        type="button"
        className="absolute top-24 right-4 md:right-8 text-white/30 hover:text-white/60 font-display text-[10px] uppercase tracking-[0.25em] transition-colors z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        aria-label="Activer l'ambiance"
      >
        Activer l'ambiance
      </motion.button>
    </header>
  )
}
