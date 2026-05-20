import { useState } from 'react'

function J2MENumpad() {
  const [activeKey, setActiveKey] = useState(null)

  const handlePress = (key) => {
    setActiveKey(key)
    setTimeout(() => setActiveKey(null), 150)
  }

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'],
  ]

  const keyLabels = {
    '1': '1',
    '2': '2 ▲',
    '3': '3',
    '4': '4 ◄',
    '5': '5 OK',
    '6': '6 ►',
    '7': '7',
    '8': '8 ▼',
    '9': '9',
    '*': '*',
    '0': '0',
    '#': '#',
  }

  return (
    <div className="p-4 bg-[var(--bg-dark)] border-t border-[var(--border-color)]">
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-3 gap-2">
          {keys.flat().map((key) => (
            <button
              key={key}
              onClick={() => handlePress(key)}
              className={`h-14 rounded-lg font-mono text-sm font-medium transition-all active:scale-95 ${
                activeKey === key
                  ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/50'
                  : 'bg-[var(--bg-card)] border-2 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-white'
              }`}
            >
              {keyLabels[key]}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => handlePress('soft-left')}
            className={`px-6 py-2 rounded-lg text-xs font-medium transition-all ${
              activeKey === 'soft-left'
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]'
            }`}
          >
            Soft Left
          </button>
          <button
            onClick={() => handlePress('soft-right')}
            className={`px-6 py-2 rounded-lg text-xs font-medium transition-all ${
              activeKey === 'soft-right'
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]'
            }`}
          >
            Soft Right
          </button>
        </div>
      </div>
    </div>
  )
}

export default J2MENumpad
