# GAMEHUB - Planejamento do Site de Jogos Java

## Visão Geral

Plataforma web estática para hospedar, catalogar e jogar jogos Java (.JAR/.JAD) diretamente no navegador, hospedada no GitHub Pages.

---

## Stack Tecnológica

| Componente | Tecnologia |
|------------|------------|
| Frontend | HTML + CSS + JavaScript puro |
| Hospedagem | GitHub Pages (grátis) |
| Banco de Dados | `data/games.json` (JSON estático) |
| Emulador | j2me.js (MIDP no browser) |
| Upload de Jogos | Manual (via commit) |

---

## Estrutura de Arquivos

```
GAMEHUB/
├── index.html              # Home com grid de jogos
├── game.html               # Página do jogo + emulador
├── css/
│   └── style.css           # Estilos responsivos
├── js/
│   ├── app.js              # Renderiza jogos do JSON
│   ├── search.js           # Busca e filtros
│   └── emulator.js         # Integração com j2me.js
├── lib/
│   └── j2me.js/            # Biblioteca do emulador
├── data/
│   └── games.json          # Catálogo de jogos
├── games/                  # Arquivos .JAR/.JAD
│   └── [nome-do-jogo]/
│       ├── game.jar
│       └── game.jad
├── covers/                 # Capas dos jogos (.png/.jpg)
└── screenshots/            # Screenshots dos jogos
```

---

## Database (games.json)

```json
{
  "games": [
    {
      "id": "snake",
      "title": "Snake Classic",
      "developer": "Nokia",
      "genre": "Arcade",
      "platform": "mobile",
      "jar": "games/snake/snake.jar",
      "jad": "games/snake/snake.jad",
      "size": "65KB",
      "cover": "covers/snake.png",
      "screenshots": ["screenshots/snake1.png"],
      "description": "O clássico jogo da cobrinha da Nokia",
      "downloads": 15420,
      "rating": 4.5
    }
  ]
}
```

---

## Layout do Site

```
┌─────────────────────────────────────────────────┐
│  🎮 GAMEHUB              [🔍 Buscar...] [Sobre] │
├─────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────┐  │
│  │  "Reviva os clássicos Java"               │  │
│  │  Jogue direto no seu navegador!           │  │
│  └───────────────────────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  Filtros: [Todos] [Ação] [RPG] [Puzzle] [Corrida]│
├─────────────────────────────────────────────────┤
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│  │ 🎮   │ │ 🎮   │ │ 🎮   │ │ 🎮   │  Cards    │
│  │Snake │ │Pac   │ │Tetris│ │Rally │           │
│  │⭐4.5 │ │⭐4.8 │ │⭐4.9 │ │⭐4.2 │           │
│  └──────┘ └──────┘ └──────┘ └──────┘           │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│  │ 🎮   │ │ 🎮   │ │ 🎮   │ │ 🎮   │           │
│  │...   │ │...   │ │...   │ │...   │           │
│  └──────┘ └──────┘ └──────┘ └──────┘           │
├─────────────────────────────────────────────────┤
│  Sobre | GitHub | Termos de Uso                 │
└─────────────────────────────────────────────────┘
```

---

## Funcionalidades

### MVP (Fase 1)

- [x] Estrutura HTML base (index.html + game.html)
- [x] CSS responsivo (style.css)
- [x] Catálogo em JSON (games.json)
- [x] Renderização dos jogos via JavaScript (app.js)
- [x] Busca por nome do jogo (search.js)
- [x] Filtro por gênero/categoria
- [x] Página individual do jogo (game.html)
- [x] Download direto de .JAR e .JAD
- [x] Integração com emulador j2me.js (emulator.js)
- [x] Emulador embutido na página do jogo
- [x] Capas/screenshots dos jogos (estrutura pronta)
- [x] Design responsivo (mobile + desktop)

### Fase 2 (Futuro)

- [ ] Sistema de rating com estrelas
- [ ] Contador de downloads
- [ ] Jogos em destaque / mais baixados
- [ ] Paginação ou infinite scroll
- [x] Ordenação (nome, rating, downloads, data)
- [x] Página "Sobre" e "Termos de Uso"
- [x] Favicon e meta tags para SEO
- [ ] PWA (Progressive Web App)

### Fase 3 (Avançado)

- [ ] Comentários via serviço externo (ex: Disqus)
- [ ] Sistema de favoritos (localStorage)
- [ ] Histórico de jogos jogados
- [ ] Compartilhamento em redes sociais
- [ ] Tema escuro/claro
- [ ] Tradução multi-idioma

---

## Fluxo para Adicionar Jogos (Manual)

1. Criar pasta em `games/nome-do-jogo/`
2. Adicionar `game.jar` e `game.jad` na pasta
3. Adicionar capa em `covers/nome-do-jogo.png`
4. Adicionar screenshots em `screenshots/`
5. Adicionar entrada no `data/games.json`
6. Commit + push → GitHub Pages atualiza automaticamente

---

## Gêneros de Jogos

- Ação
- Aventura
- RPG
- Puzzle
- Corrida
- Esporte
- Arcade
- Estratégia
- Simulação
- Plataforma

---

## Emulador freej2me-web (Externo)

**Fonte:** https://github.com/zb3/freej2me-web
**URL:** https://zb3.github.io/freej2me-web/

**Abordagem:** Emulador carregado via iframe externo
- ✅ Sem problemas de Range header (usa servidor oficial)
- ✅ Repositorio mais leve (~50MB menor)
- ✅ Emulador completo com 3D, MIDI, MIDP 2.0

**Funcionalidades do emulador:**
- [x] Carregar arquivo .JAR via URL
- [x] Renderizar tela do jogo em `<canvas>`
- [x] Mapear teclas do teclado para controles J2ME
- [x] Controles touch para mobile
- [x] Suporte a MIDP 2.0
- [x] Salvar/carregar estado do jogo (RMS)
- [x] Suporte a 3D (M3G, Mascot Capsule)
- [x] Audio MIDI

---

## Limitações do GitHub Pages

| Recurso | Suporte |
|---------|---------|
| Arquivos estáticos | ✅ Suportado |
| Hospedar .JAR/.JAD | ✅ Suportado |
| Emulador JavaScript | ✅ Suportado |
| Backend dinâmico | ❌ Não suportado |
| Upload via formulário | ❌ Não suportado |
| Database dinâmica | ❌ Usar JSON estático |
| Comentários | ⚠️ Serviço externo necessário |

---

## Checklist de Implementação

### Setup Inicial
- [x] Criar estrutura de pastas
- [ ] Baixar/adicionar j2me.js em `lib/`
- [x] Criar `games.json` com dados de exemplo

### Frontend
- [x] `index.html` - Página principal
- [x] `game.html` - Página do jogo + emulador
- [x] `css/style.css` - Estilos completos
- [x] `js/app.js` - Lógica de renderização
- [x] `js/search.js` - Busca e filtros
- [x] `js/emulator.js` - Integração do emulador

### Conteúdo
- [x] Adicionar pelo menos 5 jogos de exemplo (12 adicionados)
- [ ] Adicionar capas para cada jogo
- [x] Preencher `games.json` com dados completos

### Testes
- [ ] Testar emulador com jogos reais
- [ ] Testar responsividade (mobile/desktop)
- [ ] Testar downloads
- [ ] Testar busca e filtros
- [ ] Validar HTML/CSS

### Deploy
- [ ] Configurar repositório GitHub
- [ ] Ativar GitHub Pages
- [ ] Testar site online
- [x] Adicionar README.md no repositório

---

## Próximos Passos

1. [x] Criar estrutura de pastas
2. [x] Implementar HTML base
3. [x] Criar CSS responsivo
4. [x] Configurar games.json
5. [x] Implementar JavaScript (app.js, search.js)
6. [ ] Integrar emulador j2me.js (baixar biblioteca real)
7. [x] Adicionar jogos de exemplo
8. [ ] Adicionar capas e screenshots
9. [ ] Testar tudo
10. [ ] Deploy no GitHub Pages
