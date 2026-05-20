let currentGame = null;
let emulatorInitialized = false;

function initEmulator(game) {
  currentGame = game;

  const playBtn = document.getElementById('playBtn');
  const closeBtn = document.getElementById('closeEmulator');
  const startBtn = document.getElementById('startEmulator');
  const resetBtn = document.getElementById('resetEmulator');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const section = document.getElementById('emulatorSection');
      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('emulatorSection').classList.add('hidden');
      stopEmulator();
    });
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startEmulator(game);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      stopEmulator();
      startEmulator(game);
    });
  }

  initTouchControls();
}

function startEmulator(game) {
  const canvasContainer = document.getElementById('emulatorCanvas');

  canvasContainer.innerHTML = '<p class="emulator-placeholder">Carregando emulador...</p>';

  if (typeof J2ME !== 'undefined' && J2ME.init) {
    J2ME.init({
      jar: game.jar,
      jad: game.jad,
      canvas: canvasContainer,
      onReady: () => {
        console.log('Emulador pronto');
      },
      onError: (error) => {
        canvasContainer.innerHTML = `
          <div style="text-align:center;padding:40px;">
            <p style="color:var(--danger);margin-bottom:15px;">Erro ao carregar emulador</p>
            <p style="color:var(--text-secondary);font-size:14px;">${error.message || 'Verifique se o arquivo JAR existe'}</p>
            <a href="${game.jar}" class="btn btn-primary" style="margin-top:20px;" download>Baixar .JAR para jogar offline</a>
          </div>
        `;
      }
    });
    emulatorInitialized = true;
  } else {
    canvasContainer.innerHTML = `
      <div style="text-align:center;padding:40px;">
        <p style="font-size:48px;margin-bottom:20px;">🎮</p>
        <p style="color:var(--warning);margin-bottom:15px;font-weight:600;">Emulador nao carregado</p>
        <p style="color:var(--text-secondary);font-size:14px;margin-bottom:20px;">
          A biblioteca j2me.js nao foi encontrada. Para jogar, baixe o arquivo JAR e use um emulador J2ME no seu dispositivo.
        </p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <a href="${game.jar}" class="btn btn-primary" download>⬇ Baixar .JAR</a>
          <a href="${game.jad}" class="btn btn-secondary" download>⬇ Baixar .JAD</a>
        </div>
        <p style="color:var(--text-secondary);font-size:12px;margin-top:20px;">
          Emuladores recomendados: <a href="https://github.com/nicknisi/j2me.js" target="_blank" style="color:var(--primary);">j2me.js</a> | 
          <a href="https://www.microemulator.org/" target="_blank" style="color:var(--primary);">MicroEmulator</a>
        </p>
      </div>
    `;
  }
}

function stopEmulator() {
  if (typeof J2ME !== 'undefined' && J2ME.stop) {
    J2ME.stop();
  }
  emulatorInitialized = false;
}

function initTouchControls() {
  const controlKeys = document.querySelectorAll('.control-key');

  controlKeys.forEach(key => {
    key.addEventListener('click', () => {
      const keyValue = key.dataset.key;
      simulateKeyPress(keyValue);
    });

    key.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const keyValue = key.dataset.key;
      simulateKeyPress(keyValue);
    });
  });
}

function simulateKeyPress(key) {
  if (typeof J2ME !== 'undefined' && J2ME.keyPress) {
    J2ME.keyPress(key);
  }

  const keyEl = document.querySelector(`.control-key[data-key="${key}"]`);
  if (keyEl) {
    keyEl.style.background = 'var(--primary)';
    setTimeout(() => {
      keyEl.style.background = '';
    }, 150);
  }
}

document.addEventListener('keydown', (e) => {
  if (!emulatorInitialized) return;

  const allowedKeys = [
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Enter', 'Escape',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '*', '#'
  ];

  if (allowedKeys.includes(e.key)) {
    e.preventDefault();
    simulateKeyPress(e.key);
  }
});
