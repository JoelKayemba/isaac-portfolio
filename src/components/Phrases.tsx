import { useState } from 'react'
import { motion } from 'motion/react'
import { quotes } from '../data'

/** Ondes SVG abstraites — une par émotion (courbes douces, monochrome) */
const WAVES = [
  // 1. Ressentir trop — plus dense, serrée
  <path key="1" d="M0 12 Q 12 6 24 12 T 48 12 T 72 12 T 96 12 T 120 12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />,
  // 2. La musique parle — fluide, équilibrée
  <path key="2" d="M0 12 Q 20 4 40 12 Q 60 20 80 12 Q 100 4 120 12" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />,
  // 3. Tomber / se relever — petite rupture au centre
  <path key="3" d="M0 12 Q 25 8 50 12 M 50 12 Q 75 16 120 12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 0" />,
  // 4. Kinshasa — plus longue, ample
  <path key="4" d="M0 12 Q 30 2 60 12 Q 90 22 120 12 Q 150 2 180 12" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />,
  // 5. Chaque douleur — fragile, irrégulière
  <path key="5" d="M0 14 Q 15 6 35 10 Q 55 16 70 8 Q 85 14 105 11 Q 120 16 140 12" fill="none" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />,
]

const WATERMARK = 'ÉMOTION'

type QuoteRowProps = {
  quote: string
  wave: React.ReactNode
  index: number
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
  dimmed: boolean
}

function QuoteRow({ quote, wave, index, isHovered, onHoverChange, dimmed }: QuoteRowProps) {
  return (
    <motion.li
      className="phrases-row group flex items-center gap-8 md:gap-12 max-w-2xl mx-auto py-8 md:py-12 transition-opacity duration-500"
      style={{ opacity: dimmed ? 0.45 : 1 }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      {/* Onde — apparaît en premier (viewport plus permissif), disparaît en dernier */}
      <motion.div
        className="phrases-wave shrink-0 w-24 md:w-28 text-charcoal/25 group-hover:text-charcoal/45 transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.svg
          viewBox="0 0 140 24"
          className="w-full h-4 md:h-5"
          preserveAspectRatio="none"
          animate={{
            opacity: [1, 0.92, 1],
            scaleY: [1, 1.008, 1],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {wave}
        </motion.svg>
      </motion.div>

      {/* Phrase — apparaît légèrement après l'onde */}
      <motion.p
        className={`phrases-text flex-1 text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${
          isHovered ? 'text-charcoal' : 'text-charcoal/80'
        }`}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        {quote}
      </motion.p>
    </motion.li>
  )
}

export function Phrases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const someoneHovered = hoveredIndex !== null

  return (
    <section
      id="phrases"
      className="phrases-root relative scroll-mt-20 py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Watermark arrière-plan — très grand, très transparent, traverse lentement */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <motion.span
          className="font-display text-[min(28vw,18rem)] font-bold text-charcoal/[0.035] tracking-tighter whitespace-nowrap"
          animate={{ x: ['-10%', '10%'] }}
          transition={{ duration: 45, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          {WATERMARK}
        </motion.span>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8">
        <motion.p
          className="font-display text-[10px] uppercase tracking-[0.4em] text-steel mb-16 md:mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Phrases / Émotions
        </motion.p>

        <ul className="space-y-0">
          {quotes.map((q, i) => (
            <QuoteRow
              key={i}
              quote={q}
              wave={WAVES[i]!}
              index={i}
              isHovered={hoveredIndex === i}
              onHoverChange={(hovered) => setHoveredIndex(hovered ? i : null)}
              dimmed={someoneHovered && hoveredIndex !== i}
            />
          ))}
        </ul>

        {/* Fin de section — dernière phrase visuelle puis "Tout commence par un son." */}
        <motion.div
          className="text-center pt-16 md:pt-24 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <p className="font-display text-slate/90 text-base md:text-lg uppercase tracking-[0.3em]">
            Tout commence par un son.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
