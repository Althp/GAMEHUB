/* =========================================================================
   1. LISTAS DE JOGOS
   ========================================================================= */

// Lista de Nintendo 64 / SNES
const jogosN64 = [
  {
    nome: "Mario Kart 64 (U) [!]",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.uAi80CTKYxNUe4KUg0l9wQHaEK%3Fpid%3DApi&f=1&ipt=0fe86d35dad443b321c7ed16cb23d6ccf07a2df6f73483a910043cd8da81c16f&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Mario Kart 64 (U) [!].v64",
  },
  {
    nome: "Super Mario 64 (U) [!]",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.zpnlNTEq4Vp8OUHtb5SLZQHaFJ%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=cf39f2109c611c086f004da8090d5b5945776a2f95c7a59aea9f9c6d8c46c65e&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Super Mario 64 (U) [!].v64",
  },
  {
    nome: "GoldenEye 007 (U) [!]",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.lBXxQce3QDkmfSmc49Q_5QHaLH%3Fpid%3DApi&f=1&ipt=c8f6256b787be048f3a620d3552ed1be620d7e47ec86db8d2f828876fd65e953&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/GoldenEye 007 (U) [!].V64",
  },
  {
    nome: "Banjo Kazooie (U) [!]",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._4YlJF4G5tZyM0cmYIQykQHaFa%3Fpid%3DApi&f=1&ipt=837993fd86691b262ab68027aa1aae0be2844f35d4c72f314fa291e08b41ae5c&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Banjo-Kazooie (U) [!].v64",
  },
  {
    nome: "Super Smash Bros. (U) [!]",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.3aVPOLFcoKtJqDDHCRYzbQAAAA%3Fpid%3DApi&f=1&ipt=15ba1da3f151bcbd0340b7110ace3409e0d18d56b0e24af35aeab8e37888c296&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Super Smash Bros. (U) [!].n64",
  },
  {
    nome: "Blast Corps",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.JxA-UqWLIYvIM54SrWQiGAHaFL%3Fpid%3DApi&f=1&ipt=7125d034ec0a13e90c072095c392e0e6e616ee309954cdd0ee83824f6e7dfaa6&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Blast Corps (U) (V1.1) [!].v64",
  },
  {
    nome: "Doom 64",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.RwdvMiMxU5DUlmy9zs7yewHaFb%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=a2ea1abaf5b15ecdad080d6c3df52cb904c6a701bd56f8fd486f19f9806d47c5&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Doom 64 (U) [!].z64",
  },
  {
    nome: "Turok   Dinosaur Hunter",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.a575gHFHr6rHOG16CRw6zgHaFb%3Fpid%3DApi&f=1&ipt=5c8f64fcf54fe4d46e8f55dbe12926fc38a37e6b17adca8bfb4f557b65ca8636&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Turok - Dinosaur Hunter (U) (V1.2) [!].v64",
  },
  {
    nome: "Harvest Moon 64 ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.0Mc-w3jtjensmEx_D-BFNQHaFa%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=9744dbc1a57d502faa2940e9a0d24f9055172dc7114b42cac33e897486369ba2&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Harvest Moon 64 (U) [!].v64",
  },
  {
    nome: "Star Wars   Shadows Of The Empire ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.cy_J70DXKBt_b8uzif1YqgHaFX%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=ce3d7cbe46e76681f78a9583465c7dc3dccf807b18686b16974c32488ccb837b&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Star Wars - Shadows of the Empire (U) (V1.2) [!].v64",
  },
  {
    nome: "Body Harvest",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.jFeo73u2mS3NRpvQsxMt3wHaEK%3Fpid%3DApi&f=1&ipt=e3afcdb5e7680e032437a60f6bfc758c3da710b35fa373831f07dfdbc92ef94f&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Body Harvest (U) [!].v64",
  },
  {
    nome: "Excitebike 64",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.i1690qy59asJNdnI47KBNwHaFL%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=9927ae19c37257980b97b2d0ebc23c72294727bc0a6ca629901f61ecac50e4c3&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/Excitebike 64 (U) [!].v64",
  },
  {
    nome: "F Zero X",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Nc3kOn9o_c2T8Uwkvtk4igHaFK%3Fpid%3DApi&f=1&ipt=35a4fb1be7e027c4eb19f38a11af5fa27195e1125d8985d6920243749a30cffd&ipo=images",
    tipo: "emulator",
    core: "n64",
    link: "games/n64/F-Zero X (U) [!].v64",
  },
];

// Lista de PC / HTML5
const jogosPC = [
  {
    nome: "Bomb it 3",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.yx5gwB6H_Wo0_LmzJF0XQgHaE8%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit3.html",
  },
  {
    nome: "Bomb it 1",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.rl0tPRygj9gNajavcnQGMAHaE8%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit1.html",
  },
  {
    nome: "Bomb it 2",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.aXppHha7mudLSjvcRzqkawAAAA%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit2.html",
  },
  {
    nome: "Bomb it 7",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.2FUkooF17DFeZsEOtRNRMQHaFp%3Fpid%3DApi&f=1",
    tipo: "html",
    link: "games/html/bombit7.html",
  },
  {
    nome: "Bomb It 5",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP._gqVVf6Eq2jfUtKGFQKKNwHaFp%3Fpid%3DApi&f=1&ipt=b0c57883482035ae42c65ca27cbda4b0297cdcae8bb78bc67a314e4bc028cd7a&ipo=images",
    tipo: "html",
    link: "games/html/Bomb It 5.html",
  },
  {
    nome: "Bomb It 6",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.eKCpuMBsUT2ZYgSNjUXB6wHaD4%3Fpid%3DApi&f=1&ipt=a3c2fbfd7fcd90d90d63124bc432add2cef6ab4d0a1be08f7ffdf0d5ea11bafb&ipo=images",
    tipo: "html",
    link: "games/html/Bomb It 6.html",
  },
  {
    nome: "Bomb It 4",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP._KOZKxkJYmsBLzTbC3uTJAHaE8%3Fpid%3DApi&f=1&ipt=03ae8c3b8d8d4a2b227730df0b775d535ab95b0b1849cf76fb41d08e2935cacf&ipo=images",
    tipo: "html",
    link: "games/html/Bomb It 4.html",
  },
];

//JOGOS DE MEGA DRIVE AQUI //
const jogosMG = [
  {
    nome: "Flicky (JUE) [B1]",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.0QWkJFEq8D3BF-0vA8je1AHaJt%3Fpid%3DApi&f=1",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Flicky (JUE) [b1].bin",
  },
  {
    nome: "Sonic 3D Blast DX",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.YxmxpX7DPeRnko_Vp3In_QHaEK%3Fpid%3DApi&f=1&ipt=90a1ccf3288c439bc2cb4e83b3a2e4c476cc9844d76953df7dc4091891284742&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic 3D Blast DX.bin",
  },
  {
    nome: "Sonic 3D Blast",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.iF-nmlreo8_2hF9P1C8OZgHaEK%3Fpid%3DApi&f=1&ipt=585dd99c52f2a5234d446600d2292e751cab5d09b33e16c23ba63707d6761430&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic 3D Blast.bin",
  },
  {
    nome: "Sonic And Knuckles",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Yd0Of4bsDRbtZPGR0Ap3NQHaFj%3Fpid%3DApi&f=1&ipt=d5d502b07aa3a8e71e08df17f2c9534b48e804a01b0093fb9fe7973425a8a623&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic and Knuckles.bin",
  },
  {
    nome: "Sonic Spinball",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.LGffJmefqhjQpJVeU5c_twHaFi%3Fpid%3DApi&f=1&ipt=070164e21ae91900d049ef931ad4cb0bc5bc70d7ce82bd9cd68b36d1a79ad57c&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic Spinball.bin",
  },
  {
    nome: "Sonic The Hedgehog 2",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.HlR55NnUAfqORqi7_1aSqwHaFe%3Fpid%3DApi&f=1&ipt=79834ef0aca8b3ee27695a03f3cc1a39cbf79643cdda9945a75d6322ce4dd219&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic The Hedgehog 2.bin",
  },
  {
    nome: "Sonic The Hedgehog 3",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.sfpclJyhw4iR6BE_VYP61gHaFe%3Fpid%3DApi&f=1&ipt=adeb2d89b6b830a62c2bb83f13a9f885855d8bcf54dfc92a81b27e446cf460ec&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic The Hedgehog 3.bin",
  },
  {
    nome: "Sonic The Hedgehog",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.qQSXxqMGYyFzCXR_TAQ9uwHaEK%3Fpid%3DApi&f=1&ipt=f227c816ddbb591a82214a4e29573a0cfbdcc82fab2fd4c2ea8816aa8890bd5b&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Sonic The Hedgehog.bin",
  },
  {
    nome: "Comix Zone",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.AIgzxplLTPn0iIEcA1oI2wHaHa%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=abc3501ddb70dca91c1e62cb5a892984891cc084317c510b8b32871dffd68a27&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Comix Zone (U) [p1][T+Ita].bin",
  },
  {
    nome: "Phantasy Star IV ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.ss7E_0CQd968ucD1VeuBoQHaF7%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=b59e796c55cf5003102b21f9f08786dd31d118c40704f05eaae3916c241b6292&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Phantasy Star IV (4) [h9] [T+Por].bin",
  },
  {
    nome: "Gunstar Heroes",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Hn9P7-uEyW_gHP5cQMpwAwHaKJ%3Fcb%3Ddefcache2%26pid%3DApi%26defcache%3D1&f=1&ipt=5354cd9781734101c939a791cb660be44f03b41c5eb8665d58e136e6446dbd0a&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Gunstar Heroes (U) [!].bin",
  },
  {
    nome: "Toejam & Earl In Panic On Funkotron ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.OgVixcI5vNYWNBTt-C-r4AHaHa%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=d140bc78cb56be812f37ef1d3e11b63c5e7ae7ba0884b0de2ccf612e0944c32d&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Toejam & Earl in Panic on Funkotron (U) [h1].bin",
  },
  {
    nome: "Golden Axe III ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.Vka3rDtQRk3kgXHTncS4fwHaKZ%3Fpid%3DApi&f=1&ipt=bef0e4a730649d327dc104c6f4203c489cddab619b6a78a8e2370a145c6a53c6&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Golden Axe III (J) [p1][!].bin",
  },
  {
    nome: "Shining Force II   Return Of The King",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.GDsBwsHnmho7s8S-fmcsPQHaHa%3Fcb%3Ddefcache2%26pid%3DApi%26defcache%3D1&f=1&ipt=a0f110924ae8c17c2a86e0db30899c0e4685874980eca5d8f84a6a93fc6d4c1f&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Shining Force II - Return of the King (J) [h3].bin",
  },
  {
    nome: "Castlevania   The New Generation ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.PjA3IQRDVQyCu71cPJkCugHaKI%3Fpid%3DApi&f=1&ipt=61d63d0048858f594c0e2e01f94e8806493899674782d61b34e75f5a0bc6a686&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Castlevania - The New Generation (E) [b1].bin",
  },
  {
    nome: "Streets Of Rage 2 ",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.wIOqcboyGzCQp8OBG8JdtQHaKS%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=2a6d4d8f7904c339b447db772a95c90b31ab8508ff8e84257a8d0acde9b8767b&ipo=images",
    tipo: "emulator",
    core: "segaMD",
    link: "games/segaMD/Streets of Rage 2 (U) [h4].bin",
  },
];

// JUNTANDO TUDO NA LISTA MESTRE
const meusJogos = [...jogosN64, ...jogosPC, ...jogosMG];

/* =========================================================================
   2. SELEÇÃO DE ELEMENTOS
   ========================================================================= */
const container = document.getElementById("gameContainer");
const recContainer = document.getElementById("dailyRecContainer");
const recGrid = document.getElementById("recGrid");
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalGameTitle");
const modalBody = document.querySelector(".modal-content");
const searchInput = document.getElementById("searchBar");
const clearBtn = document.getElementById("clearBtn");
const noResults = document.getElementById("noResults");
const fullscreenIcon = document.getElementById("fullscreenIcon");
const gameTarget = document.getElementById("gameTarget");

/* =========================================================================
   3. PERSISTÊNCIA (FAVORITOS)
   ========================================================================= */
function getFavoritos() {
  const favs = localStorage.getItem("meusFavoritos");
  return favs ? JSON.parse(favs) : [];
}

function toggleFavorito(nomeJogo, event) {
  event.stopPropagation(); // Impede abrir o jogo ao clicar na estrela
  let favs = getFavoritos();

  if (favs.includes(nomeJogo)) {
    favs = favs.filter((f) => f !== nomeJogo);
  } else {
    favs.push(nomeJogo);
  }

  localStorage.setItem("meusFavoritos", JSON.stringify(favs));
  renderizarJogos(meusJogos);
}

/* =========================================================================
   4. RENDERIZAR JOGOS
   ========================================================================= */
function renderizarJogos(lista) {
  container.innerHTML = "";
  const favoritos = getFavoritos();

  if (lista.length === 0) {
    if (noResults) noResults.style.display = "block";
    return;
  } else {
    if (noResults) noResults.style.display = "none";
  }

  lista.forEach((jogo) => {
    const realIndex = meusJogos.indexOf(jogo);
    const imgUrl =
      jogo.imagem || "https://via.placeholder.com/200?text=No+Image";

    // Verifica favoritos
    const isFav = favoritos.includes(jogo.nome);
    const starClass = isFav ? "is-favorite" : "";
    const iconClass = isFav ? "fas fa-star" : "far fa-star";

    const html = `
            <div class="app-icon" onclick="prepararJogo(${realIndex})" id="card-${realIndex}">
                <div class="icon-shape">
                    <img src="${imgUrl}" alt="${jogo.nome}" loading="lazy" onerror="this.src='https://via.placeholder.com/200?text=Erro'">
                </div>
                
                <div class="fav-btn ${starClass}" onclick="toggleFavorito('${jogo.nome}', event)">
                    <i class="${iconClass}"></i>
                </div>

                <span class="app-name">${jogo.nome}</span>
            </div>
        `;
    container.innerHTML += html;
  });
}

/* =========================================================================
   5. ABRIR JOGO (CORRIGIDO PARA LIMPAR MEMÓRIA DE VERDADE)
   ========================================================================= */
function prepararJogo(index) {
  const jogo = meusJogos[index];
  if (!jogo) return;

  if (modalTitle) modalTitle.innerText = jogo.nome;

  limparAreaDeJogo(); // Limpa TUDO antes de começar

  if (modal) modal.style.display = "flex";

  // Pequeno delay para garantir que o DOM limpou
  setTimeout(() => {
    if (jogo.tipo === "emulator") {
      iniciarEmulador(jogo);
    } else {
      iniciarIframe(jogo);
    }
  }, 100);
}

function iniciarIframe(jogo) {
  const iframe = document.createElement("iframe");
  iframe.id = "activeGameFrame";
  iframe.src = jogo.link;
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; fullscreen; gamepad; accelerometer; gyroscope";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.background = "#000";

  if (gameTarget) gameTarget.appendChild(iframe);
}

function iniciarEmulador(jogo) {
  // Criamos um iframe em branco em vez de jogar na Div principal
  const iframe = document.createElement("iframe");
  iframe.id = "activeGameFrame";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; fullscreen; gamepad; accelerometer; gyroscope";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.background = "#000";

  if (gameTarget) gameTarget.appendChild(iframe);

  // Injetamos o HTML e o script do EmuladorJS DENTRO do iframe!
  // Como o iframe herda o caminho do site, os links dos jogos vão funcionar perfeitamente.
  const iframeDoc = iframe.contentWindow.document;

  const htmlEmulador = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: #000; overflow: hidden; }</style>
      </head>
      <body>
          <div id="emulator-container" style="width: 100%; height: 100%;"></div>
          <script>
              window.EJS_player = "#emulator-container";
              window.EJS_core = "${jogo.core}";
              window.EJS_gameUrl = "${jogo.link}";
              window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
              window.EJS_startOnLoaded = true;
          </script>
          <script src="https://cdn.emulatorjs.org/stable/data/loader.js"></script>
      </body>
      </html>
    `;

  iframeDoc.open();
  iframeDoc.write(htmlEmulador);
  iframeDoc.close();
}

function fecharJogo() {
  // Se estiver em fullscreen, sai
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (modalBody.classList.contains("fullscreen-active")) {
    alternarTelaCheia(); // Sai do modo forçado mobile
  }

  if (modal) modal.style.display = "none";
  limparAreaDeJogo();
}

function limparAreaDeJogo() {
  const iframe = document.getElementById("activeGameFrame");

  if (iframe) {
    // A mágica acontece aqui: ao mudar para about:blank, o navegador
    // mata o áudio, o processamento e libera a memória instantaneamente!
    iframe.src = "about:blank";
    iframe.remove();
  }

  // Limpa qualquer outra sujeira visual que tenha ficado na div alvo
  if (gameTarget) gameTarget.innerHTML = "";
}

/* =========================================================================
   6. RECOMENDAÇÕES DIÁRIAS
   ========================================================================= */
function gerarRecomendacoesDiarias() {
  if (!recGrid) return;
  recGrid.innerHTML = "";
  const recomendados = meusJogos.slice(0, 5); // Exemplo: pega os 5 primeiros

  if (recomendados.length > 0) {
    if (recContainer) recContainer.style.display = "block";
    recomendados.forEach((jogo) => {
      const realIndex = meusJogos.indexOf(jogo);
      const html = `
                <div class="app-icon" onclick="prepararJogo(${realIndex})">
                    <div class="icon-shape">
                        <img src="${jogo.imagem}" alt="${jogo.nome}">
                    </div>
                    <span class="app-name">${jogo.nome}</span>
                </div>
            `;
      recGrid.innerHTML += html;
    });
  }
}

/* =========================================================================
   7. TELA CHEIA (PC + MOBILE FIX)
   ========================================================================= */
function alternarTelaCheia() {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isIOS) {
    // No iPhone, força via CSS
    toggleFullscreenClass();
  } else {
    // Android/PC: tenta nativo, se falhar, usa CSS
    if (!document.fullscreenElement) {
      modalBody.requestFullscreen().catch(() => toggleFullscreenClass());
    } else {
      document.exitFullscreen();
    }
  }
}

function toggleFullscreenClass() {
  const isActive = modalBody.classList.toggle("fullscreen-active");
  if (fullscreenIcon) {
    fullscreenIcon.classList.replace(
      isActive ? "fa-expand" : "fa-compress",
      isActive ? "fa-compress" : "fa-expand"
    );
  }
}

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    modalBody.classList.add("fullscreen-active");
    if (fullscreenIcon)
      fullscreenIcon.classList.replace("fa-expand", "fa-compress");
  } else {
    modalBody.classList.remove("fullscreen-active");
    if (fullscreenIcon)
      fullscreenIcon.classList.replace("fa-compress", "fa-expand");
  }
});

/* =========================================================================
   8. INICIALIZAÇÃO
   ========================================================================= */
if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    const termo = e.target.value.toLowerCase();
    if (clearBtn) clearBtn.style.display = termo.length > 0 ? "block" : "none";
    if (recContainer)
      recContainer.style.display = termo.length > 0 ? "none" : "block";

    const filtrados = meusJogos.filter((jogo) =>
      jogo.nome.toLowerCase().includes(termo)
    );
    renderizarJogos(filtrados);
  });
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    if (recContainer) recContainer.style.display = "block";
    renderizarJogos(meusJogos);
  });
}

console.log("Iniciando GameHub...");
renderizarJogos(meusJogos);
gerarRecomendacoesDiarias();
