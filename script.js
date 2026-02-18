/* =========================================================================
   GAMEHUB PREMIUM - SCRIPT REFATORADO
   ========================================================================= */

// Dados dos jogos (mantidos do original)
const jogosN64 = [
  {
    nome: "Super Mario 64",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.zpnlNTEq4Vp8OUHtb5SLZQHaFJ%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=29466a988b45dfdfdad863775de099aaf8149892f20e2a4741dfa60a5a0923a6&ipo=images",
    link: "games/n64/Super_Mario_64.html",
    tipo: "html",
    categoria: "n64",
  },
];

const jogosPC = [
  {
    nome: "Bomb It 3",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.yx5gwB6H_Wo0_LmzJF0XQgHaE8%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit3.html",
    categoria: "html",
  },
  {
    nome: "Bomb It 1",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.rl0tPRygj9gNajavcnQGMAHaE8%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit1.html",
    categoria: "html",
  },
  {
    nome: "Bomb It 2",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.aXppHha7mudLSjvcRzqkawAAAA%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit2.html",
    categoria: "html",
  },
  {
    nome: "Bomb It 7",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.2FUkooF17DFeZsEOtRNRMQHaFp%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit7.html",
    categoria: "html",
  },
  {
    nome: "Bomb It 5",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP._gqVVf6Eq2jfUtKGFQKKNwHaFp%3Fpid%3DApi&f=1&ipt=b0c57883482035ae42c65ca27cbda4b0297cdcae8bb78bc67a314e4bc028cd7a&ipo=images",
    tipo: "html",
    link: "games/html/Bomb It 5.html",
    categoria: "html",
  },
  {
    nome: "Bomb It 6",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.eKCpuMBsUT2ZYgSNjUXB6wHaD4%3Fpid%3DApi&f=1&ipt=a3c2fbfd7fcd90d90d63124bc432add2cef6ab4d0a1be08f7ffdf0d5ea11bafb&ipo=images",
    tipo: "html",
    link: "games/html/Bomb It 6.html",
    categoria: "html",
  },
  {
    nome: "Bomb It 4",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP._KOZKxkJYmsBLzTbC3uTJAHaE8%3Fpid%3DApi&f=1&ipt=03ae8c3b8d8d4a2b227730df0b775d535ab95b0b1849cf76fb41d08e2935cacf&ipo=images",
    tipo: "html",
    link: "games/html/Bomb It 4.html",
    categoria: "html",
  },
];

const jogosMG = [
  {
    nome: "Flicky",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.0QWkJFEq8D3BF-0vA8je1AHaJt%3Fpid%3DApi&f=1",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Flicky (JUE) [b1].bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic 3D Blast DX",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.YxmxpX7DPeRnko_Vp3In_QHaEK%3Fpid%3DApi&f=1&ipt=90a1ccf3288c439bc2cb4e83b3a2e4c476cc9844d76953df7dc4091891284742&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic 3D Blast DX.bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic 3D Blast",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.iF-nmlreo8_2hF9P1C8OZgHaEK%3Fpid%3DApi&f=1&ipt=585dd99c52f2a5234d446600d2292e751cab5d09b33e16c23ba63707d6761430&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic 3D Blast.bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic & Knuckles",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Yd0Of4bsDRbtZPGR0Ap3NQHaFj%3Fpid%3DApi&f=1&ipt=d5d502b07aa3a8e71e08df17f2c9534b48e804a01b0093fb9fe7973425a8a623&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic and Knuckles.bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic Spinball",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.LGffJmefqhjQpJVeU5c_twHaFi%3Fpid%3DApi&f=1&ipt=070164e21ae91900d049ef931ad4cb0bc5bc70d7ce82bd9cd68b36d1a79ad57c&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic Spinball.bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic The Hedgehog 2",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.HlR55NnUAfqORqi7_1aSqwHaFe%3Fpid%3DApi&f=1&ipt=79834ef0aca8b3ee27695a03f3cc1a39cbf79643cdda9945a75d6322ce4dd219&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic The Hedgehog 2.bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic The Hedgehog 3",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.sfpclJyhw4iR6BE_VYP61gHaFe%3Fpid%3DApi&f=1&ipt=adeb2d89b6b830a62c2bb83f13a9f885855d8bcf54dfc92a81b27e446cf460ec&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic The Hedgehog 3.bin",
    categoria: "megadrive",
  },
  {
    nome: "Sonic The Hedgehog",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.qQSXxqMGYyFzCXR_TAQ9uwHaEK%3Fpid%3DApi&f=1&ipt=f227c816ddbb591a82214a4e29573a0cfbdcc82fab2fd4c2ea8816aa8890bd5b&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic The Hedgehog.bin",
    categoria: "megadrive",
  },
  {
    nome: "Comix Zone",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.AIgzxplLTPn0iIEcA1oI2wHaHa%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=abc3501ddb70dca91c1e62cb5a892984891cc084317c510b8b32871dffd68a27&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Comix Zone (U) [p1][T+Ita].bin",
    categoria: "megadrive",
  },
  {
    nome: "Phantasy Star IV",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.ss7E_0CQd968ucD1VeuBoQHaF7%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=b59e796c55cf5003102b21f9f08786dd31d118c40704f05eaae3916c241b6292&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Phantasy Star IV (4) [h9] [T+Por].bin",
    categoria: "megadrive",
  },
  {
    nome: "Gunstar Heroes",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Hn9P7-uEyW_gHP5cQMpwAwHaKJ%3Fcb%3Ddefcache2%26pid%3DApi%26defcache%3D1&f=1&ipt=5354cd9781734101c939a791cb660be44f03b41c5eb8665d58e136e6446dbd0a&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Gunstar Heroes (U) [!].bin",
    categoria: "megadrive",
  },
  {
    nome: "Toejam & Earl",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.OgVixcI5vNYWNBTt-C-r4AHaHa%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=d140bc78cb56be812f37ef1d3e11b63c5e7ae7ba0884b0de2ccf612e0944c32d&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Toejam & Earl in Panic on Funkotron (U) [h1].bin",
    categoria: "megadrive",
  },
  {
    nome: "Golden Axe III",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.Vka3rDtQRk3kgXHTncS4fwHaKZ%3Fpid%3DApi&f=1&ipt=bef0e4a730649d327dc104c6f4203c489cddab619b6a78a8e2370a145c6a53c6&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Golden Axe III (J) [p1][!].bin",
    categoria: "megadrive",
  },
  {
    nome: "Shining Force II",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.GDsBwsHnmho7s8S-fmcsPQHaHa%3Fcb%3Ddefcache2%26pid%3DApi%26defcache%3D1&f=1&ipt=a0f110924ae8c17c2a86e0db30899c0e4685874980eca5d8f84a6a93fc6d4c1f&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Shining Force II - Return of the King (J) [h3].bin",
    categoria: "megadrive",
  },
  {
    nome: "Castlevania: The New Generation",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.PjA3IQRDVQyCu71cPJkCugHaKI%3Fpid%3DApi&f=1&ipt=61d63d0048858f594c0e2e01f94e8806493899674782d61b34e75f5a0bc6a686&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Castlevania - The New Generation (E) [b1].bin",
    categoria: "megadrive",
  },
  {
    nome: "Streets of Rage 2",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.wIOqcboyGzCQp8OBG8JdtQHaKS%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=2a6d4d8f7904c339b447db772a95c90b31ab8508ff8e84257a8d0acde9b8767b&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Streets of Rage 2 (U) [h4].bin",
    categoria: "megadrive",
  },
];

const meusJogos = [...jogosN64, ...jogosPC, ...jogosMG];

/* =========================================================================
   ELEMENTOS DOM
   ========================================================================= */

const container = document.getElementById("gameContainer");
const recContainer = document.getElementById("dailyRecContainer");
const recGrid = document.getElementById("recGrid");
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalGameTitle");
const modalBadge = document.getElementById("modalGameBadge");
const modalBody = document.querySelector(".modal-content");
const searchInput = document.getElementById("searchBar");
const clearBtn = document.getElementById("clearBtn");
const noResults = document.getElementById("noResults");
const fullscreenIcon = document.getElementById("fullscreenIcon");
const gameTarget = document.getElementById("gameTarget");
const gameOverlay = document.getElementById("gameOverlay");
const filterTabs = document.querySelectorAll(".tab");

let currentFilter = "all";
let jogosFiltrados = [...meusJogos];

/* =========================================================================
   FUNÇÕES DE FAVORITOS
   ========================================================================= */

function getFavoritos() {
  const favs = localStorage.getItem("meusFavoritos");
  return favs ? JSON.parse(favs) : [];
}

function toggleFavorito(nomeJogo, event) {
  event.stopPropagation();
  let favs = getFavoritos();

  if (favs.includes(nomeJogo)) {
    favs = favs.filter((f) => f !== nomeJogo);
  } else {
    favs.push(nomeJogo);
  }

  localStorage.setItem("meusFavoritos", JSON.stringify(favs));
  renderizarJogos(jogosFiltrados);
}

/* =========================================================================
   RENDERIZAÇÃO PREMIUM
   ========================================================================= */

function getBadgeClass(categoria) {
  switch (categoria) {
    case "n64":
      return "badge-n64";
    case "megadrive":
      return "badge-megadrive";
    case "html":
      return "badge-html";
    default:
      return "badge-n64";
  }
}

function getBadgeText(categoria) {
  switch (categoria) {
    case "n64":
      return "N64";
    case "megadrive":
      return "MD";
    case "html":
      return "WEB";
    default:
      return "N64";
  }
}

function renderizarJogos(lista) {
  container.innerHTML = "";
  const favoritos = getFavoritos();

  if (lista.length === 0) {
    if (noResults) noResults.style.display = "flex";
    return;
  } else {
    if (noResults) noResults.style.display = "none";
  }

  lista.forEach((jogo, index) => {
    const realIndex = meusJogos.indexOf(jogo);
    const imgUrl =
      jogo.imagem || "https://via.placeholder.com/200?text=No+Image";
    const isFav = favoritos.includes(jogo.nome);
    const starClass = isFav ? "is-favorite" : "";
    const iconClass = isFav ? "fas fa-star" : "far fa-star";
    const badgeClass = getBadgeClass(jogo.categoria);
    const badgeText = getBadgeText(jogo.categoria);

    const html = `
      <div class="app-icon" onclick="prepararJogo(${realIndex})" style="animation-delay: ${
      index * 50
    }ms">
        <div class="icon-wrapper">
          <span class="platform-badge ${badgeClass}">${badgeText}</span>
          <img src="${imgUrl}" alt="${
      jogo.nome
    }" loading="lazy" onerror="this.src='https://via.placeholder.com/200?text=Erro'">
          <div class="icon-overlay">
            <div class="play-icon">
              <i class="fas fa-play"></i>
            </div>
          </div>
        </div>
        <button class="fav-btn ${starClass}" onclick="toggleFavorito('${
      jogo.nome
    }', event)">
          <i class="${iconClass}"></i>
        </button>
        <span class="app-name">${jogo.nome}</span>
      </div>
    `;
    container.innerHTML += html;
  });
}

function renderizarRecomendacoes() {
  if (!recGrid) return;
  recGrid.innerHTML = "";

  // Pega 5 jogos aleatórios diferentes
  const shuffled = [...meusJogos].sort(() => 0.5 - Math.random());
  const recomendados = shuffled.slice(0, 5);

  if (recomendados.length > 0) {
    if (recContainer) recContainer.style.display = "block";
    recomendados.forEach((jogo) => {
      const realIndex = meusJogos.indexOf(jogo);
      const badgeClass = getBadgeClass(jogo.categoria);
      const badgeText = getBadgeText(jogo.categoria);

      const html = `
        <div class="app-icon rec-item" onclick="prepararJogo(${realIndex})">
          <div class="icon-wrapper">
            <span class="platform-badge ${badgeClass}">${badgeText}</span>
            <img src="${jogo.imagem}" alt="${jogo.nome}">
            <div class="icon-overlay">
              <div class="play-icon">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
          <span class="app-name">${jogo.nome}</span>
        </div>
      `;
      recGrid.innerHTML += html;
    });
  }
}

/* =========================================================================
   SISTEMA DE FILTROS
   ========================================================================= */

function filtrarJogos(categoria) {
  currentFilter = categoria;

  // Atualiza tabs visuais
  filterTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === categoria);
  });

  // Filtra lista
  if (categoria === "all") {
    jogosFiltrados = [...meusJogos];
  } else {
    jogosFiltrados = meusJogos.filter((jogo) => jogo.categoria === categoria);
  }

  // Aplica busca atual se houver
  const termo = searchInput.value.toLowerCase();
  if (termo) {
    jogosFiltrados = jogosFiltrados.filter((jogo) =>
      jogo.nome.toLowerCase().includes(termo)
    );
  }

  renderizarJogos(jogosFiltrados);
}

/* =========================================================================
   MODAL E JOGOS
   ========================================================================= */

function prepararJogo(index) {
  const jogo = meusJogos[index];
  if (!jogo) return;

  modalTitle.innerText = jogo.nome;
  modalBadge.innerText = getBadgeText(jogo.categoria);
  modalBadge.className = `game-badge ${getBadgeClass(jogo.categoria)}`;

  limparAreaDeJogo();

  // Mostra modal com animação
  modal.style.display = "flex";
  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  // Mostra loading
  gameOverlay.classList.remove("hidden");

  setTimeout(() => {
    if (jogo.tipo === "emulator") {
      iniciarEmulador(jogo);
    } else {
      iniciarIframe(jogo);
    }
    // Esconde loading após iframe carregar (simulado)
    setTimeout(() => {
      gameOverlay.classList.add("hidden");
    }, 1000);
  }, 100);
}

function iniciarIframe(jogo) {
  const iframe = document.createElement("iframe");
  iframe.id = "activeGameFrame";
  iframe.src = jogo.link;
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; fullscreen; gamepad; accelerometer; gyroscope";
  iframe.style.cssText =
    "width: 100%; height: 100%; border: none; background: #000;";

  gameTarget.appendChild(iframe);
}

function iniciarEmulador(jogo) {
  const iframe = document.createElement("iframe");
  iframe.id = "activeGameFrame";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; fullscreen; gamepad";
  iframe.style.cssText =
    "width: 100%; height: 100%; border: none; background: #000;";

  gameTarget.appendChild(iframe);

  const iframeDoc = iframe.contentWindow.document;
  const htmlEmulador = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body, html { 
          margin: 0; 
          padding: 0; 
          width: 100%; 
          height: 100%; 
          background: #000; 
          overflow: hidden; 
        }
      </style>
    </head>
    <body>
      <div id="emulator-container" style="width: 100%; height: 100%;"></div>
      <script>
        window.EJS_player = "#emulator-container";
        window.EJS_core = "${jogo.core}";
        window.EJS_gameUrl = "${jogo.link}";
        window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
        window.EJS_startOnLoaded = true;
      <\/script>
      <script src="https://cdn.emulatorjs.org/stable/data/loader.js"><\/script>
    </body>
    </html>
  `;

  iframeDoc.open();
  iframeDoc.write(htmlEmulador);
  iframeDoc.close();
}

function fecharJogo() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }

  modal.classList.remove("active");

  setTimeout(() => {
    modal.style.display = "none";
    modalBody.classList.remove("fullscreen");
    limparAreaDeJogo();
  }, 300);
}

function limparAreaDeJogo() {
  const iframe = document.getElementById("activeGameFrame");
  if (iframe) {
    iframe.src = "about:blank";
    iframe.remove();
  }
  gameTarget.innerHTML = "";
  gameOverlay.classList.remove("hidden");
}

function alternarTelaCheia() {
  if (!document.fullscreenElement) {
    modalBody
      .requestFullscreen()
      .then(() => {
        modalBody.classList.add("fullscreen");
        fullscreenIcon.classList.replace("fa-expand", "fa-compress");
      })
      .catch(() => {
        // Fallback para mobile
        modalBody.classList.toggle("fullscreen");
        fullscreenIcon.classList.replace(
          modalBody.classList.contains("fullscreen")
            ? "fa-expand"
            : "fa-compress",
          modalBody.classList.contains("fullscreen")
            ? "fa-compress"
            : "fa-expand"
        );
      });
  } else {
    document.exitFullscreen();
  }
}

// Event listener para mudança de fullscreen
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    modalBody.classList.remove("fullscreen");
    fullscreenIcon.classList.replace("fa-compress", "fa-expand");
  }
});

/* =========================================================================
   EVENT LISTENERS
   ========================================================================= */

// Busca
searchInput.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();
  clearBtn.style.display = termo.length > 0 ? "flex" : "none";
  recContainer.style.display = termo.length > 0 ? "none" : "block";

  jogosFiltrados = meusJogos.filter((jogo) => {
    const matchCategoria =
      currentFilter === "all" || jogo.categoria === currentFilter;
    const matchBusca = jogo.nome.toLowerCase().includes(termo);
    return matchCategoria && matchBusca;
  });

  renderizarJogos(jogosFiltrados);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";
  recContainer.style.display = "block";
  filtrarJogos(currentFilter);
  searchInput.focus();
});

// Filtros
filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filtrarJogos(tab.dataset.filter);
  });
});

// Modal controls
document
  .getElementById("fullscreenBtn")
  .addEventListener("click", alternarTelaCheia);
document.getElementById("closeBtn").addEventListener("click", fecharJogo);

// Fechar modal ao clicar no backdrop
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("modal-backdrop")) {
    fecharJogo();
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    fecharJogo();
  }
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

/* =========================================================================
   INICIALIZAÇÃO
   ========================================================================= */

console.log("🎮 GameHub Premium iniciado");
renderizarJogos(meusJogos);
renderizarRecomendacoes();
