# 🎮 GAMEHUB - Jogos Java Classico

Plataforma web para hospedar, catalogar e jogar jogos Java (.JAR/.JAD) diretamente no navegador.

## 🚀 Demo

[Ver no GitHub Pages](https://althp.github.io/GAMEHUB/)

## 📋 Sobre

GAMEHUB e uma plataforma dedicada a preservar jogos Java classicos. Aqui voce pode:

- **Jogar no navegador** usando o emulador freej2me-web integrado
- **Baixar arquivos** .JAR e .JAD gratuitamente
- **Explorar o catalogo** com busca, filtros e ordenacao

## 🛠️ Tecnologias

- HTML5 + CSS3 + JavaScript puro
- [freej2me-web](https://github.com/zb3/freej2me-web) (emulador J2ME com suporte a 3D, MIDI)
- Hospedado no GitHub Pages

## 📁 Estrutura

```
GAMEHUB/
├── index.html              # Pagina principal
├── game.html               # Pagina do jogo + emulador
├── css/style.css           # Estilos
├── js/
│   ├── app.js              # Logica principal
│   ├── search.js           # Busca e filtros
│   └── emulator.js         # Integracao do emulador
── data/games.json         # Catalogo de jogos
├── lib/freej2me-web/       # Emulador J2ME
│   └── web/
│       └── run.html        # Emulador
├── games/                  # Arquivos .JAR/.JAD
├── covers/                 # Capas dos jogos (SVG)
└── screenshots/            # Screenshots
```
GAMEHUB/
├── index.html              # Pagina principal
├── game.html               # Pagina do jogo + emulador
├── css/style.css           # Estilos
├── js/
│   ├── app.js              # Logica principal
│   ├── search.js           # Busca e filtros
│   └── emulator.js         # Integracao do emulador
├── data/games.json         # Catalogo de jogos
├── lib/freej2me-web/       # Emulador J2ME
│   └── web/
│       ├── run.html        # Emulador
│       └── jar/            # JARs dos jogos (sincronizados)
├── games/                  # Arquivos .JAR/.JAD originais
├── covers/                 # Capas dos jogos (SVG)
── screenshots/            # Screenshots
└── sync-jars.ps1           # Script para sincronizar JARs
```

## 🎯 Como Adicionar Jogos

### 1. Adicionar arquivos do jogo

```
games/
└── nome-do-jogo/
    ├── game.jar
    └── game.jad (opcional)
```

### 2. Adicionar capa

Crie um SVG em `covers/nome-do-jogo.svg`

### 3. Adicionar ao catalogo

Edite `data/games.json` e adicione uma entrada:

```json
{
  "id": "nome-do-jogo",
  "title": "Nome do Jogo",
  "developer": "Desenvolvedor",
  "genre": "Acao",
  "platform": "mobile",
  "jar": "games/nome-do-jogo/game.jar",
  "jad": "games/nome-do-jogo/game.jad",
  "size": "100 KB",
  "cover": "covers/nome-do-jogo.svg",
  "screenshots": ["screenshots/nome-do-jogo1.png"],
  "description": "Descricao do jogo",
  "downloads": 0,
  "rating": 0,
  "year": 2024
}
```

### 4. Commit e push

```bash
git add -A
git commit -m "Adiciona novo jogo: Nome do Jogo"
git push
```

O emulador carrega os JARs direto da pasta `games/`, sem necessidade de sincronizacao.

##  Emulador

O GAMEHUB usa o [freej2me-web](https://github.com/zb3/freej2me-web) - um emulador J2ME completo que roda no navegador.

### Recursos do emulador:
- ✅ Suporte a MIDP 2.0
- ✅ Graficos 3D (M3G, Mascot Capsule)
- ✅ Audio MIDI
- ✅ Controles de teclado e touch
- ✅ Salvar progresso (RMS)

### Controles:
| Tecla | Funcao |
|-------|--------|
| Setas | Direcao |
| Enter | OK / Acao |
| Esc | Menu |
| 0-9 | Numeros |
| F1 / Q | Soft Key Esquerda |
| F2 / W | Soft Key Direita |
| * / E | Asterisco |
| # / R | Cerquilha |

### Notas:
- O emulador requer conexao com internet (usa CheerpJ)
- Nem todos os jogos J2ME sao compatíveis
- Clique na tela do emulador para focar os controles de teclado

##  Deploy no GitHub Pages

1. Crie um repositorio no GitHub
2. Push os arquivos
3. Vá em **Settings > Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Selecione a branch `main` e pasta `/(root)`
6. Clique em **Save**
7. Acesse `https://seu-usuario.github.io/GAMEHUB/`

## 📝 Generos Suportados

- Acao
- Aventura
- RPG
- Puzzle
- Corrida
- Esporte
- Arcade
- Estrategia
- Simulacao
- Plataforma

## 📄 Licenca

Este projeto e para fins educacionais e de preservacao. Todos os jogos pertencem a seus respectivos desenvolvedores e detentores de direitos autorais.

O emulador [freej2me-web](https://github.com/zb3/freej2me-web) possui licenca propria.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/novo-jogo`)
3. Commit suas mudancas (`git commit -m 'Adiciona novo jogo'`)
4. Push (`git push origin feature/novo-jogo`)
5. Abra um Pull Request

---

Feito com ❤️ para preservar a historia dos jogos mobile
