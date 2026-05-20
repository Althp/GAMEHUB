import { useState, useEffect } from 'react'
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'

function TouchControls() {
  const [activeButton, setActiveButton] = useState(null)

  useEffect(() => {
    const handleTouchStart = (e) => {
      const button = e.target.closest('[data-button]')
      if (button) {
        setActiveButton(button.dataset.button)
      }
    }

    const handleTouchEnd = () => {
      setActiveButton(null)
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const buttonBase = "w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95 select-none"
  const buttonInactive = "bg-[var(--bg-card)] border-2 border-[var(--border-color)] text-[var(--text-secondary)]"
  const buttonActive = "bg-[var(--primary)] border-2 border-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/50"

  return (
    <div className="p-4 bg-[var(--bg-dark)] border-t border-[var(--border-color)]">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-2">
          <div />
          <button
            data-button="up"
            className={`${buttonBase} ${activeButton === 'up' ? buttonActive : buttonInactive}`}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          <div />
          <button
            data-button="left"
            className={`${buttonBase} ${activeButton === 'left' ? buttonActive : buttonInactive}`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="w-14 h-14 rounded-full bg-[var(--bg-card)]/50 border-2 border-[var(--border-color)]/50" />
          <button
            data-button="right"
            className={`${buttonBase} ${activeButton === 'right' ? buttonActive : buttonInactive}`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <div />
          <button
            data-button="down"
            className={`${buttonBase} ${activeButton === 'down' ? buttonActive : buttonInactive}`}
          >
            <ArrowDown className="w-6 h-6" />
          </button>
          <div />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            data-button="a"
            className={`${buttonBase} w-16 h-16 ${activeButton === 'a' ? buttonActive : buttonInactive}`}
          >
            <span className="font-bold text-lg">A</span>
          </button>
          <button
            data-button="b"
            className={`${buttonBase} w-16 h-16 ${activeButton === 'b' ? buttonActive : buttonInactive}`}
          >
            <span className="font-bold text-lg">B</span>
          </button>
          <button
            data-button="x"
            className={`${buttonBase} w-14 h-14 ${activeButton === 'x' ? buttonActive : buttonInactive}`}
          >
            <span className="font-bold">X</span>
          </button>
          <button
            data-button="y"
            className={`${buttonBase} w-14 h-14 ${activeButton === 'y' ? buttonActive : buttonInactive}`}
          >
            <span className="font-bold">Y</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 mt-4">
        <button
          data-button="select"
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
            activeButton === 'select' ? buttonActive : buttonInactive
          }`}
        >
          SELECT
        </button>
        <button
          data-button="start"
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
            activeButton === 'start' ? buttonActive : buttonInactive
          }`}
        >
          START
        </button>
      </div>
    </div>
  )
}

export default TouchControls
