let currentGame = null;
let emulatorLoaded = false;

function initEmulator(game) {
  currentGame = game;

  const playBtn = document.getElementById('playBtn');
  const closeBtn = document.getElementById('closeEmulator');
  const resetBtn = document.getElementById('resetEmulator');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const section = document.getElementById('emulatorSection');
      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: 'smooth' });
      loadEmulator(game);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('emulatorSection').classList.add('hidden');
      unloadEmulator();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      loadEmulator(game);
    });
  }
}

function loadEmulator(game) {
  const iframe = document.getElementById('emulatorIframe');
  const placeholder = document.getElementById('emulatorPlaceholder');

  placeholder.classList.remove('hidden');
  iframe.classList.add('hidden');
  placeholder.innerHTML = '<p>⏳ Carregando emulador...</p>';

  const basePath = getBasePath();
  const jarRelativePath = `../../../../games/${game.id}/${game.id}.jar`;

  const emulatorUrl = `${basePath}lib/freej2me-web/web/run.html?jar=${jarRelativePath}&fractionScale=1`;

  iframe.src = emulatorUrl;

  iframe.onload = () => {
    placeholder.classList.add('hidden');
    iframe.classList.remove('hidden');
    emulatorLoaded = true;
  };

  iframe.onerror = () => {
    placeholder.innerHTML = `
      <div style="text-align:center;padding:40px;">
        <p style="color:var(--danger);margin-bottom:15px;">Erro ao carregar emulador</p>
        <p style="color:var(--text-secondary);font-size:14px;margin-bottom:20px;">Verifique se o arquivo JAR existe em games/${game.id}/</p>
        <a href="${game.jar}" class="btn btn-primary" download>⬇ Baixar .JAR para jogar offline</a>
      </div>
    `;
  };
}

function unloadEmulator() {
  const iframe = document.getElementById('emulatorIframe');
  const placeholder = document.getElementById('emulatorPlaceholder');

  iframe.src = '';
  iframe.classList.add('hidden');
  placeholder.classList.remove('hidden');
  placeholder.innerHTML = '<p> Clique em "Iniciar Emulador" para jogar</p>';
  emulatorLoaded = false;
}

function getBasePath() {
  const path = window.location.pathname;
  const parts = path.split('/');
  parts.pop();
  return parts.join('/') + (parts.length > 0 ? '/' : '');
}
