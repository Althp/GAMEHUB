# 🎮 GAMEHUB - Jogos Java Classico

Plataforma web para hospedar, catalogar e jogar jogos Java (.JAR/.JAD) diretamente no navegador.

## 🚀 Demo

[Ver no GitHub Pages](https://seu-usuario.github.io/gamehub/)

## 📋 Sobre

GAMEHUB e uma plataforma dedicada a preservar jogos Java classicos. Aqui voce pode:

- **Jogar no navegador** usando o emulador J2ME integrado
- **Baixar arquivos** .JAR e .JAD gratuitamente
- **Explorar o catalogo** com busca, filtros e ordenacao

## 🛠️ Tecnologias

- HTML5 + CSS3 + JavaScript puro
- j2me.js (emulador J2ME para web)
- Hospedado no GitHub Pages

## 📁 Estrutura

```
GAMEHUB/
├── index.html          # Pagina principal
├── game.html           # Pagina do jogo + emulador
├── css/style.css       # Estilos
├── js/
│   ├── app.js          # Logica principal
│   ├── search.js       # Busca e filtros
│   └── emulator.js     # Integracao do emulador
├── data/games.json     # Catalogo de jogos
├── lib/j2me.js/        # Biblioteca do emulador
├── games/              # Arquivos .JAR/.JAD
├── covers/             # Capas dos jogos
└── screenshots/        # Screenshots
```

## 🎯 Como Adicionar Jogos

1. Crie uma pasta em `games/nome-do-jogo/`
2. Adicione os arquivos `.jar` e `.jad`
3. Adicione a capa em `covers/nome-do-jogo.png`
4. Adicione screenshots em `screenshots/`
5. Adicione uma entrada em `data/games.json`
6. Commit e push!

### Exemplo de entrada no games.json:

```json
{
  "id": "meu-jogo",
  "title": "Nome do Jogo",
  "developer": "Desenvolvedor",
  "genre": "Acao",
  "platform": "mobile",
  "jar": "games/meu-jogo/game.jar",
  "jad": "games/meu-jogo/game.jad",
  "size": "100 KB",
  "cover": "covers/meu-jogo.png",
  "screenshots": ["screenshots/meu-jogo1.png"],
  "description": "Descricao do jogo",
  "downloads": 0,
  "rating": 0,
  "year": 2024
}
```

## 🔧 Emulador

Para ativar o emulador, baixe a biblioteca j2me.js:

1. Acesse: https://github.com/nicknisi/j2me.js
2. Baixe o arquivo `j2me.min.js`
3. Coloque em `lib/j2me.js/j2me.min.js`
4. Adicione o script no `game.html` antes de `js/emulator.js`

```html
<script src="lib/j2me.js/j2me.min.js"></script>
<script src="js/emulator.js"></script>
```

## 📦 Deploy no GitHub Pages

1. Crie um repositorio no GitHub
2. Push os arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main` e salve
5. Acesse `https://seu-usuario.github.io/gamehub/`

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

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/novo-jogo`)
3. Commit suas mudancas (`git commit -m 'Adiciona novo jogo'`)
4. Push (`git push origin feature/novo-jogo`)
5. Abra um Pull Request

---

Feito com ❤️ para preservar a historia dos jogos mobile
