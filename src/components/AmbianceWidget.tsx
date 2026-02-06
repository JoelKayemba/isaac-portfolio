import { motion } from 'motion/react'
import { useAmbiance } from '../contexts/AmbianceContext'

/** Barres animées subtiles (décor) */
function WaveBars() {
  return (
    <div className="ambiance-bars flex items-end gap-0.5 h-4" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="w-0.5 bg-white/50 rounded-full min-h-[4px]"
          animate={{ height: ['30%', '90%', '50%', '80%', '40%', '70%', '30%'] }}
          transition={{
            duration: 1.2 + i * 0.15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function AmbianceWidget() {
  const { isPlaying, toggle } = useAmbiance()

  return (
    <motion.div
      className="ambiance-widget fixed bottom-5 left-5 z-50 flex items-center gap-3 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <button
        type="button"
        onClick={toggle}
        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors outline-none focus:ring-2 focus:ring-white/30 rounded-full"
        aria-label={isPlaying ? 'Pause' : "Activer l'ambiance"}
      >
        {isPlaying ? (
          <>
            <span className="font-display text-[10px] uppercase tracking-widest text-white/90">
              MBONGO
            </span>
            <WaveBars />
            <span className="text-white/70 text-sm ml-1" aria-hidden>
              ❚❚
            </span>
          </>
        ) : (
          <>
            <span className="text-white/60 text-sm" aria-hidden>
              ▶
            </span>
            <span className="font-display text-[10px] uppercase tracking-widest text-white/70">
              Activer l'ambiance
            </span>
          </>
        )}
      </button>
    </motion.div>
  )
}
