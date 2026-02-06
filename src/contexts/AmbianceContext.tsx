import { createContext, useCallback, useContext, useRef, useState } from 'react'

// Extrait MBONGO — boucle en fond pendant la navigation
const mbongoSrc = new URL("../assets/Kip's mbongo (visualizer).m4a.mp4", import.meta.url).href

type AmbianceContextValue = {
  isPlaying: boolean
  play: () => void
  pause: () => void
  toggle: () => void
}

const AmbianceContext = createContext<AmbianceContextValue | null>(null)

export function AmbianceProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const ensureAudio = useCallback(() => {
    if (audioRef.current) return audioRef.current
    const audio = new Audio(mbongoSrc)
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio
    return audio
  }, [])

  const play = useCallback(() => {
    const audio = ensureAudio()
    audio.play().then(() => setIsPlaying(true)).catch(() => {})
  }, [ensureAudio])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback(() => {
    if (isPlaying) pause()
    else play()
  }, [isPlaying, play, pause])

  return (
    <AmbianceContext.Provider value={{ isPlaying, play, pause, toggle }}>
      {children}
    </AmbianceContext.Provider>
  )
}

export function useAmbiance() {
  const ctx = useContext(AmbianceContext)
  if (!ctx) throw new Error('useAmbiance must be used within AmbianceProvider')
  return ctx
}
