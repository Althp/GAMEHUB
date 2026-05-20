# GameHub - Frontend

Plataforma de jogos retrô online com suporte a:
- **EmulatorJS** - Consoles clássicos via CDN (NES, SNES, Mega Drive, PS1, N64, GBA, Arcade, etc.)
- **MicroEmulator Web** - Jogos Java ME (.JAR/.JAD)

## 🚀 Tech Stack

- **React 19** + **Vite**
- **TailwindCSS** - Estilização
- **Zustand** - Gerenciamento de estado
- **React Router** - Rotas
- **Lucide React** - Ícones
- **EmulatorJS** - Emulação via CDN (`cdn.emulatorjs.org`)

## 📁 Estrutura

```
src/
├── components/
│   ├── Catalog/
│   │   ├── GameCard.jsx      # Card do jogo
│   │   └── GameGrid.jsx      # Grid com filtros
│   ├── Player/
│   │   ├── EmulatorPlayer.jsx # iframe EmulatorJS
│   │   └── J2MEPlayer.jsx     # iframe MicroEmulator
│   ├── Controls/
│   │   └── J2MENumpad.jsx     # Teclado numérico (Java ME)
│   └── UI/
│       └── Navbar.jsx         # Barra de navegação
├── pages/
│   ├── Home.jsx               # Página inicial
│   ├── Game.jsx               # Página do jogo + player
│   └── Library.jsx            # Biblioteca completa
├── hooks/
│   ├── useGamepad.js          # Hook para gamepad físico
│   └── useTouchControls.js    # Hook para touch
├── store/
│   └── useStore.js            # Zustand store
├── data/
│   └── games.js               # Dados mockados dos jogos
├── App.jsx
├── main.jsx
└── index.css

public/
├── player.html                # Página standalone do EmulatorJS
└── roms/                      # ROMs locais (dev)
```

## 🎮 Como EmulatorJS Funciona

O EmulatorJS é carregado via iframe para não conflitar com o React SPA:

```
React App (App.jsx)
  └── Game.jsx
       ├── EmulatorPlayer.jsx  → iframe → /player.html?core=nes&gameUrl=...
       └── J2MEPlayer.jsx      → iframe → /player.html?core=j2me&gameUrl=...
```

O `player.html` é uma página standalone que:
1. Lê os parâmetros da URL (core, gameUrl, gameName, etc.)
2. Configura as variáveis `EJS_*` globais
3. Carrega o loader.js do CDN do EmulatorJS
4. O emulador roda dentro do iframe

### Sistemas Suportados

3DO, Arcade, Atari 2600/7800, ColecoVision, DOOM, GB/GBC/GBA, Jaguar, Lynx, MSX, N64, NDS, NES, NGP, Odyssey2, PCE, PSX, Sega 32X/CD/GG/MD/MS/Saturn/SG, SNES, VB, Vectrex, WS

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy

Recomendado: **Vercel** ou **Netlify**

```bash
# Vercel
vercel deploy

# Netlify
netlify deploy --prod
```

## 📝 Próximos Passos

1. Adicionar ROMs reais na pasta `public/roms/`
2. Integrar MicroEmulator Web para Java ME
3. Criar backend Node.js para API
4. Sistema de upload de ROMs
5. Saves na nuvem
6. Autenticação de usuários
7. PWA para instalação no celular
