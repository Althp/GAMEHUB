export const coreMap = {
  nes: 'nes',
  snes: 'snes',
  genesis: 'segaMD',
  ps1: 'psx',
  gba: 'gba',
  gb: 'gb',
  gbc: 'gbc',
  n64: 'n64',
  arcade: 'arcade',
  atari2600: 'atari2600',
  atari7800: 'atari7800',
  sega32x: 'sega32x',
  segaCD: 'segaCD',
  segaGG: 'segaGG',
  segaMS: 'segaMS',
  segaSaturn: 'segaSaturn',
  vb: 'vb',
  ws: 'ws',
  lynx: 'lynx',
  ngp: 'ngp',
  pce: 'pce',
  msx: 'msx',
  doom: 'doom',
  nds: 'nds',
  jaguar: 'jaguar',
  colecovision: 'coleco',
  odyssey2: 'odyssey2',
  segaSG: 'segaSG',
  vectrex: 'vectrex',
  '3do': '3do',
}

export function buildEmulatorUrl(game) {
  const core = coreMap[game.platform] || 'nes'
  
  const params = new URLSearchParams({
    core,
    gameUrl: game.romUrl,
    gameName: game.title,
    autoStart: 'true',
    color: '#8b5cf6',
  })

  if (game.biosUrl) {
    params.set('biosUrl', game.biosUrl)
  }

  return `/player.html?${params.toString()}`
}

export function buildJ2MEUrl(game) {
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

  return `/player.html?${params.toString()}`
}

export const CDN_URL = 'https://cdn.emulatorjs.org/stable/data/'
export const LOADER_URL = `${CDN_URL}loader.js`
