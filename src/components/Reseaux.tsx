import { motion } from 'motion/react'
import { socials } from '../data'

export function Reseaux() {
  return (
    <motion.section
      id="reseaux"
      className="py-16 md:py-24 scroll-mt-20 bg-silver/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display text-xs uppercase tracking-[0.3em] text-steel mb-4">
          Réseaux
        </h2>
        <p className="text-granite mb-8">Suis l'expérience.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display px-4 py-3 rounded-full border border-granite text-charcoal hover:border-slate hover:text-slate transition-colors text-sm"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {s.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
