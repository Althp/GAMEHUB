import { useRef, useState } from 'react'
import { Maximize, RotateCcw } from 'lucide-react'
import J2MENumpad from '../Controls/J2MENumpad'

function J2MEPlayer({ game }) {
  const iframeRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)

  const params = new URLSearchParams({
    core: 'j2me',
    gameUrl: game.romUrl,
    gameName: game.title,
    autoStart: 'true',
    color: '#f59e0b',
  })

  if (game.jadUrl) {
    params.set('jadUrl', game.jadUrl)
  }

  const iframeSrc = `/player.html?${params.toString()}`

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleReload = () => {
    setIsLoading(true)
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div ref={containerRef} className="relative bg-black rounded-xl overflow-hidden">
      <div className="relative aspect-video">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-card)] z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-orange)] mx-auto mb-4"></div>
              <p className="text-[var(--text-secondary)]">Carregando MicroEmulator...</p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">Java ME - {game.title}</p>
            </div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={iframeSrc}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
          onLoad={handleIframeLoad}
          title={`Emulator - ${game.title}`}
        />
      </div>

      <div className="flex items-center justify-between p-3 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            className="p-2 rounded-lg bg-[var(--bg-dark)] hover:bg-[var(--accent-orange)] transition-colors text-white"
            title="Reiniciar jogo"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2 py-1 bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] rounded text-xs font-medium">
            ☕ Java ME
          </span>
          <h3 className="font-semibold text-sm truncate max-w-[200px]">{game.title}</h3>
        </div>

        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-[var(--bg-dark)] hover:bg-[var(--accent-orange)] transition-colors text-white"
          title="Tela cheia"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>

      <J2MENumpad />
    </div>
  )
}

export default J2MEPlayer
