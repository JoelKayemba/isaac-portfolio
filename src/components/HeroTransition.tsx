import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const img1 = new URL('../assets/music (1).jpg', import.meta.url).href
const img2 = new URL('../assets/music (2).jpg', import.meta.url).href
const img3 = new URL('../assets/music (3).jpg', import.meta.url).href

const GRAIN_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat',
}

/**
 * Section traversée — on ne la regarde pas, on la traverse.
 * 250vh, scroll lent, images et texte pilotés par le scroll.
 */
export function HeroTransition() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Image 1 — L'entrée : loin, à gauche, avance, opacité monte
  const img1Scale = useTransform(scrollYProgress, [0, 0.12, 0.35], [0.4, 0.7, 0.85])
  const img1X = useTransform(scrollYProgress, [0, 0.25, 0.5], [-20, -5, 5])
  const img1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.45], [0, 0.3, 0.7, 0.5])

  // Image 2 — La traversée : droite, glisse verticalement, puis s'efface
  const img2Y = useTransform(scrollYProgress, [0.2, 0.4, 0.65], [80, 0, -40])
  const img2Opacity = useTransform(scrollYProgress, [0.2, 0.32, 0.5, 0.68], [0, 0.6, 0.85, 0])
  const img2Scale = useTransform(scrollYProgress, [0.25, 0.45], [0.9, 1.05])

  // Image 3 — L'intime : centrale, très proche, coupe l'écran, puis se dissout
  const img3Scale = useTransform(scrollYProgress, [0.5, 0.7, 0.92], [0.6, 1.15, 0.95])
  const img3Opacity = useTransform(scrollYProgress, [0.52, 0.65, 0.8, 0.95], [0, 0.9, 0.7, 0])

  // Watermark KINSHASA / NGALIEMA — traverse lentement l'écran
  const watermarkX = useTransform(scrollYProgress, [0, 1], [-30, 30])

  // Textes poétiques
  const text1Opacity = useTransform(scrollYProgress, [0.12, 0.2, 0.32, 0.42], [0, 0.95, 0.95, 0])
  const text2Opacity = useTransform(scrollYProgress, [0.38, 0.48, 0.58, 0.68], [0, 0.95, 0.95, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.62, 0.72, 0.82, 0.9], [0, 0.95, 0.95, 0])

  // Sortie : "Tout commence ici."
  const exitOpacity = useTransform(scrollYProgress, [0.88, 0.95, 1], [0, 0.98, 0.98])

  return (
    <section
      ref={sectionRef}
      className="immersion-root relative"
      style={{ height: '380vh' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Fond noir + grain + fumée */}
        <div className="absolute inset-0 bg-[#0a0a0b]" />
        <div className="immersion-grain" aria-hidden />
        <div className="immersion-smoke" aria-hidden />

        {/* Watermark — très grand, très transparent */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ x: watermarkX }}
        >
          <span className="font-display text-[min(22vw,14rem)] font-bold text-white/5 tracking-tighter whitespace-nowrap">
            KINSHASA
          </span>
        </motion.div>

        {/* Image 1 — L'entrée */}
        <motion.div
          className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[45vw] max-w-[420px] aspect-4/5 origin-center"
          style={{
            scale: img1Scale,
            x: img1X,
            opacity: img1Opacity,
          }}
        >
          <img
            src={img1}
            alt="Entrée — Kinshasa"
            className="w-full h-full object-cover grayscale contrast-[1.06]"
          />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={GRAIN_STYLE} />
        </motion.div>

        {/* Image 2 — La traversée */}
        <motion.div
          className="absolute right-[5%] top-1/2 w-[42vw] max-w-[380px] aspect-4/5 origin-center"
          style={{
            y: img2Y,
            opacity: img2Opacity,
            scale: img2Scale,
          }}
        >
          <img
            src={img2}
            alt="La ville respire"
            className="w-full h-full object-cover grayscale contrast-[1.06]"
          />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={GRAIN_STYLE} />
        </motion.div>

        {/* Image 3 — L'intime */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[85vw] max-w-[900px] aspect-4/5 origin-center -translate-x-1/2 -translate-y-1/2"
          style={{
            scale: img3Scale,
            opacity: img3Opacity,
          }}
        >
          <img
            src={img3}
            alt="Face à soi-même"
            className="w-full h-full object-cover grayscale contrast-[1.06] object-center"
          />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={GRAIN_STYLE} />
        </motion.div>

        {/* Texte 1 — Kinshasa n'est pas un décor */}
        <motion.div
          className="absolute left-[12%] top-[28%] right-[12%] md:left-[18%] md:right-[35%]"
          style={{ opacity: text1Opacity }}
        >
          <p className="font-display text-white/90 text-sm md:text-base uppercase tracking-[0.35em] leading-relaxed">
            Kinshasa
            <br />
            n'est pas un décor.
            <br />
            <span className="text-white/70">C'est une émotion.</span>
          </p>
        </motion.div>

        {/* Texte 2 — Chaque rue a une voix */}
        <motion.div
          className="absolute right-[10%] top-[55%] left-[10%] md:right-[18%] md:left-[45%] text-right md:text-right"
          style={{ opacity: text2Opacity }}
        >
          <p className="font-display text-white/90 text-sm md:text-base uppercase tracking-[0.35em] leading-relaxed">
            Chaque rue
            <br />
            a une voix.
          </p>
        </motion.div>

        {/* Texte 3 — La mienne est devenue musique */}
        <motion.div
          className="absolute left-[10%] bottom-[22%] right-[10%] md:left-[15%] md:right-[40%]"
          style={{ opacity: text3Opacity }}
        >
          <p className="font-display text-white/90 text-sm md:text-base uppercase tracking-[0.35em] leading-relaxed">
            La mienne
            <br />
            est devenue musique.
          </p>
        </motion.div>

        {/* Sortie — Tout commence ici. */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: exitOpacity }}
        >
          <p className="font-display text-white/95 text-center text-lg md:text-xl uppercase tracking-[0.4em] px-4">
            Tout commence ici.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
