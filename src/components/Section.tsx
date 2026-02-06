import { motion } from 'motion/react'

type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-display text-xs uppercase tracking-[0.3em] text-steel mb-6">
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  )
}
