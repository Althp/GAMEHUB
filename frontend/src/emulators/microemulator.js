export class MicroEmulatorWeb {
  constructor(canvas) {
    this.canvas = canvas
    this.game = null
    this.jadData = null
  }

  async loadJAR(jarUrl) {
    console.log(`Loading JAR: ${jarUrl}`)
    
    // Download JAR file
    const response = await fetch(jarUrl)
    if (!response.ok) {
      throw new Error(`Failed to load JAR: ${jarUrl}`)
    }
    
    this.game = await response.arrayBuffer()
    return this.game
  }

  async loadJAD(jadUrl) {
    console.log(`Loading JAD: ${jadUrl}`)
    
    const response = await fetch(jadUrl)
    if (!response.ok) {
      throw new Error(`Failed to load JAD: ${jadUrl}`)
    }
    
    const text = await response.text()
    this.jadData = this.parseJAD(text)
    return this.jadData
  }

  parseJAD(text) {
    const data = {}
    const lines = text.split('\n')
    
    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split(':')
        if (key && valueParts.length > 0) {
          data[key.trim()] = valueParts.join(':').trim()
        }
      }
    }
    
    return data
  }

  async loadGame(jarUrl, jadUrl) {
    if (jadUrl) {
      await this.loadJAD(jadUrl)
    }
    
    await this.loadJAR(jarUrl)
    
    console.log('Game loaded:', {
      jar: jarUrl,
      jad: jadUrl,
      metadata: this.jadData,
    })
    
    return {
      status: 'loaded',
      jar: jarUrl,
      jad: jadUrl,
      metadata: this.jadData,
    }
  }

  handleKeyPress(key) {
    const keyMap = {
      '0': 48,
      '1': 49,
      '2': 50,
      '3': 51,
      '4': 52,
      '5': 53,
      '6': 54,
      '7': 55,
      '8': 56,
      '9': 57,
      '*': 42,
      '#': 35,
      'up': -1,
      'down': -2,
      'left': -3,
      'right': -4,
      'soft-left': -6,
      'soft-right': -7,
    }
    
    const keyCode = keyMap[key]
    if (keyCode !== undefined) {
      console.log(`Key pressed: ${key} (code: ${keyCode})`)
    }
  }

  destroy() {
    console.log('Destroying MicroEmulator instance')
    this.game = null
    this.jadData = null
  }
}

export default MicroEmulatorWeb
