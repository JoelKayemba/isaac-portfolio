import { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import extraitVideo from '../assets/extrait-video.mp4'

const PARAGRAPHS = [
  "Né à Kinshasa, élevé à Ngaliema, Kip's transforme son vécu en musique.",
  "Il chante l'amour intense, les chutes silencieuses, les combats quotidiens et les rêves trop grands pour l'environnement qui les a vus naître.",
  "Sa musique ne raconte pas des histoires imaginées. Elle raconte la vraie vie.",
]

/**
 * Section L'UNIVERS — fond blanc, éditorial minimal.
 * Vidéo comme image centrale, texte qui respire, transition douce.
 */
export function Univers() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onLoaded = () => {
      if (v.duration > 0 && !isNaN(v.duration)) v.currentTime = v.duration * 0.35
    }
    v.addEventListener('loadedmetadata', onLoaded)
    if (v.readyState >= 1) onLoaded()
    return () => v.removeEventListener('loadedmetadata', onLoaded)
  }, [])

  return (
    <section
      id="univers"
      className="relative scroll-mt-20 bg-white py-20 md:py-28 lg:py-36"
    >
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Titre */}
        <motion.p
          className="font-display text-[10px] uppercase tracking-[0.4em] text-steel mb-10 md:mb-14"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          L'univers
        </motion.p>

        {/* Vidéo — cadre simple, centré */}
        <motion.div
          className="relative w-full max-w-md mx-auto aspect-3/4 rounded-xl overflow-hidden bg-neutral-100 shadow-lg shadow-charcoal/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <video
            ref={videoRef}
            src={extraitVideo}
            autoPlay
            muted
            loop
            playsInline
            className="univers-video-bw w-full h-full object-cover"
            aria-hidden
          />
          <div className="univers-video-grain" aria-hidden />
        </motion.div>

        {/* Texte — colonne étroite, centrée */}
        <div className="mt-16 md:mt-20 max-w-xl mx-auto text-center md:text-left">
          {PARAGRAPHS.map((text, i) => (
            <motion.p
              key={i}
              className="text-charcoal/90 text-lg md:text-xl leading-[1.8] font-light mb-6 last:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
            >
              {text}
            </motion.p>
          ))}

          {/* Phrase signature */}
          <motion.blockquote
            className="mt-14 md:mt-16 pt-8 border-t border-silver/40"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-display text-slate text-xl md:text-2xl tracking-tight">
              Kip's ne cherche pas à plaire.
              <br />
              <span className="text-charcoal">Il cherche à marquer.</span>
            </p>
          </motion.blockquote>
        </div>

        {/* Transition vers Musiques */}
        <motion.p
          className="font-display text-[10px] uppercase tracking-[0.35em] text-steel/80 text-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          La musique commence ici.
        </motion.p>
      </div>
    </section>
  )
}
