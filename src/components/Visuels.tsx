import { motion } from 'motion/react'

const img1 = new URL('../assets/user1 (1).jpeg', import.meta.url).href
const img2 = new URL('../assets/user1 (2).jpeg', import.meta.url).href
const videoSrc = new URL('../assets/extrait-video.mp4', import.meta.url).href

export function Visuels() {
  return (
    <motion.section
      id="visuels"
      className="py-16 md:py-24 scroll-mt-20 bg-silver/10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-xs uppercase tracking-[0.3em] text-steel mb-4">
          Visuels
        </h2>
        <p className="text-granite mb-8">
          Un regard. Une présence. Une énergie.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.img
            src={img1}
            alt="Kip's"
            className="w-full aspect-[4/5] object-cover rounded-xl border border-granite"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={img2}
            alt="Kip's"
            className="w-full aspect-[4/5] object-cover rounded-xl border border-granite"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />
        </div>
        <motion.div
          className="mt-6 rounded-xl overflow-hidden border border-silver shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <video
            src={videoSrc}
            controls
            className="w-full aspect-video bg-granite/10"
            poster={img1}
          >
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </motion.div>
      </div>
    </motion.section>
  )
}
