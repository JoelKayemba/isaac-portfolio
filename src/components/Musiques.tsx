import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { tracks, socials } from '../data'
import { TypewriterText } from './TypewriterText'

const GRAIN_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat',
}

const PLATFORMS_EXIT_NAMES = ['YouTube', 'Spotify'] as const
const PLATFORMS_EXIT = socials.filter((s) =>
  PLATFORMS_EXIT_NAMES.includes(s.name as (typeof PLATFORMS_EXIT_NAMES)[number])
)

type Track = (typeof tracks)[number]

/** Zigzag arrondi : chemins SVG en courbes (Q = quadratic bezier), coordonnées 0–1 */
const ROUNDED_ZIGZAG_PATHS: Record<number, string> = {
  0: 'M.02 .08 Q.18 0 .35 .12 Q.52 .04 .68 .14 Q.85 .06 .98 .12 Q1 .28 .95 .5 Q1 .72 .88 .92 Q.7 1 .5 .88 Q.32 .96 .15 .9 Q0 .75 0 .5 Q.02 .25 .02 .08 Z',
  1: 'M0 .15 Q.15 .05 .32 .18 Q.5 .08 .68 .2 Q.85 .1 1 .2 Q.92 .42 1 .62 Q.88 .8 1 .95 Q.72 1 .5 .85 Q.28 .95 .1 .82 Q0 .92 .05 .65 Q0 .38 0 .15 Z',
  2: 'M.06 0 Q.25 .12 .45 .02 Q.65 .14 .82 .04 Q.95 .18 1 .4 Q.92 .6 1 .78 Q.82 .94 .62 1 Q.4 .9 .22 .98 Q.06 .85 0 .62 Q.08 .38 0 .18 Q.06 0 .06 0 Z',
  3: 'M0 .28 Q.18 .08 .38 0 Q.55 .12 .72 0 Q.88 .1 1 .28 Q.95 .5 1 .72 Q.82 .9 .65 1 Q.48 .92 .3 1 Q.12 .88 0 .68 Q.05 .48 0 .28 Z',
  4: 'M.08 .05 Q.28 .14 .48 .02 Q.68 .16 .85 .06 Q.98 .2 .92 .45 Q 1 .68 .88 .88 Q.68 .98 .48 .88 Q.28 .96 .08 .82 Q0 .58 .06 .32 Q0 .12 .08 .05 Z',
  5: 'M0 .22 Q.2 .06 .42 .16 Q.6 .04 .78 .18 Q.92 .08 1 .3 Q.94 .52 1 .75 Q.78 .92 .58 1 Q.38 .88 .2 .98 Q.02 .85 0 .6 Q.06 .35 0 .22 Z',
}

const FRAME_SIZE = 'w-[min(88vw,460px)] h-[min(70vw,380px)]'

/** SVG caché contenant les clipPath (zigzag arrondi) pour chaque piste */
function MusiquesClipDefs() {
  return (
    <svg width={0} height={0} className="absolute" aria-hidden>
      <defs>
        {(Object.entries(ROUNDED_ZIGZAG_PATHS) as [string, string][]).map(([i, d]) => (
          <clipPath key={i} id={`musiques-clip-${i}`} clipPathUnits="objectBoundingBox">
            <path d={d} />
          </clipPath>
        ))}
      </defs>
    </svg>
  )
}

/** Cover dans un cadre zigzag arrondi (courbes), cliquable, hover → play */
function TrackCover({
  imageUrl,
  href,
  frameIndex,
}: {
  imageUrl: string
  href: string
  frameIndex: number
}) {
  const [hover, setHover] = useState(false)
  const clipId = `musiques-clip-${frameIndex % 6}`
  return (
    <div
      className={`musiques-frame overflow-hidden bg-charcoal/30 ${FRAME_SIZE}`}
      style={{ clipPath: `url(#${clipId})` }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full h-full overflow-hidden musiques-cover"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.95] transition-transform duration-500"
        />
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" style={GRAIN_STYLE} />
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-white/90 text-4xl md:text-5xl pointer-events-none"
          initial={false}
          animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.8 }}
          transition={{ duration: 0.25 }}
        >
          ▶
        </motion.span>
      </a>
    </div>
  )
}

/** Une slide = une musique en plein écran, cadre déformé/zigzag (forme par index), typewriter */
function TrackSlide({ track, index = 0, isActive }: { track: Track; index?: number; isActive: boolean }) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${track.youtubeId}`
  const coverUrl = `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`

  return (
    <div
      className="musiques-slide shrink-0 w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12"
      style={{ width: '100vw', minWidth: '100vw' }}
    >
      <div className="w-full md:w-[55%] flex justify-center items-center">
        <TrackCover imageUrl={coverUrl} href={youtubeUrl} frameIndex={index} />
      </div>
      <div className="w-full md:w-[45%] text-center md:text-left">
        <h3 className="font-display text-white text-2xl md:text-3xl uppercase tracking-[0.2em] mb-2 min-h-[1.2em]">
          {isActive ? <TypewriterText text={track.title} speed={80} delay={200} showCursor={true} /> : track.title}
        </h3>
        <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Kip's</p>
        <p className="text-white/80 text-base md:text-lg font-light mb-6 max-w-md min-h-[3em]">
          {isActive ? (
            <TypewriterText text={track.desc} speed={35} delay={800} tag="span" showCursor={true} />
          ) : (
            track.desc
          )}
        </p>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-[0.2em] transition-colors"
        >
          <span className="text-lg">▶</span> Écouter
        </a>
      </div>
    </div>
  )
}

export function Musiques() {
  const sectionRef = useRef<HTMLElement>(null)
  const n = tracks.length

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Scroll vertical → déplacement horizontal : une slide par "palier"
  const xVw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.88, 1],
    ['0vw', '-100vw', '-200vw', '-300vw', '-400vw', '-500vw', '-500vw', '-500vw']
  )

  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setActiveIndex(Math.max(0, Math.min(Math.floor(v * n * 1.1), n - 1)))
    })
    return unsub
  }, [scrollYProgress, n])

  // Opacité phrase d'entrée
  const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const introY = useTransform(scrollYProgress, [0, 0.08], [0, -20])

  // Sortie : "La musique continue ailleurs" + plateformes en bas
  const exitOpacity = useTransform(scrollYProgress, [0.88, 0.95], [0, 1])

  return (
    <section
      ref={sectionRef}
      id="musiques"
      className="musiques-root relative scroll-mt-20"
      style={{ height: `${(n + 0.6) * 100}vh` }}
    >
      <MusiquesClipDefs />
      <div className="musiques-grain" aria-hidden />

      {/* Zone sticky : viewport fixe, contenu horizontal qui défile */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex">
        <motion.div
          className="flex h-full"
          style={{ x: xVw }}
        >
          {tracks.map((track, index) => (
            <TrackSlide
              key={track.id}
              track={track}
              index={index}
              isActive={index === activeIndex}
            />
          ))}
        </motion.div>
      </div>

      {/* Phrase d'entrée — disparaît en scrollant */}
      <motion.div
        className="absolute top-[18vh] left-0 right-0 z-20 text-center pointer-events-none"
        style={{ opacity: introOpacity, y: introY }}
      >
        <p className="font-display text-white/60 text-xs uppercase tracking-[0.4em]">
          Écouter, c'est entrer.
        </p>
      </motion.div>

      {/* Sortie — en bas de la section, transition fluide vers le reste du site */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 py-16 text-center bg-[#1a1b1e]/95 backdrop-blur-sm"
        style={{ opacity: exitOpacity }}
      >
        <p className="text-white/50 text-sm md:text-base tracking-wide mb-8">
          La musique continue ailleurs.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {PLATFORMS_EXIT.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 text-sm uppercase tracking-[0.25em] transition-colors"
            >
              {p.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
