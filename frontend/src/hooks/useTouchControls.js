import { useState, useEffect } from 'react'

function useTouchControls(canvasRef) {
  const [touches, setTouches] = useState({})

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleTouchStart = (e) => {
      e.preventDefault()
      const newTouches = {}
      for (const touch of e.changedTouches) {
        newTouches[touch.identifier] = {
          x: touch.clientX,
          y: touch.clientY,
        }
      }
      setTouches((prev) => ({ ...prev, ...newTouches }))
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      const newTouches = {}
      for (const touch of e.changedTouches) {
        newTouches[touch.identifier] = {
          x: touch.clientX,
          y: touch.clientY,
        }
      }
      setTouches((prev) => ({ ...prev, ...newTouches }))
    }

    const handleTouchEnd = (e) => {
      e.preventDefault()
      setTouches((prev) => {
        const updated = { ...prev }
        for (const touch of e.changedTouches) {
          delete updated[touch.identifier]
        }
        return updated
      })
    }

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [canvasRef])

  return touches
}

export default useTouchControls
