import { useState, useEffect } from 'react'

function useGamepad() {
  const [connected, setConnected] = useState(false)
  const [gamepad, setGamepad] = useState(null)

  useEffect(() => {
    const handleConnect = (e) => {
      console.log('Gamepad connected:', e.gamepad.id)
      setConnected(true)
      setGamepad(e.gamepad)
    }

    const handleDisconnect = () => {
      console.log('Gamepad disconnected')
      setConnected(false)
      setGamepad(null)
    }

    window.addEventListener('gamepadconnected', handleConnect)
    window.addEventListener('gamepaddisconnected', handleDisconnect)

    return () => {
      window.removeEventListener('gamepadconnected', handleConnect)
      window.removeEventListener('gamepaddisconnected', handleDisconnect)
    }
  }, [])

  const pollGamepad = () => {
    if (!connected) return null

    const gamepads = navigator.getGamepads()
    for (const gp of gamepads) {
      if (gp) {
        return {
          axes: gp.axes,
          buttons: gp.buttons.map((b) => b.pressed),
        }
      }
    }
    return null
  }

  return { connected, gamepad, pollGamepad }
}

export default useGamepad
