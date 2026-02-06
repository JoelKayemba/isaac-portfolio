import { motion } from 'motion/react'
import { socials } from '../data'

export function Footer() {
  return (
    <motion.footer
      className="py-10 border-t border-silver/60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-steel hover:text-slate text-xs uppercase tracking-[0.2em] transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
        <div className="font-display text-steel text-sm">
          © Kip's
          <br />
          Kinshasa — Monde
        </div>
      </div>
    </motion.footer>
  )
}
