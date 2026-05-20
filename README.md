# GAMEHUB - Jogos J2ME Clássicos

## 🎮 Sobre
GAMEHUB é uma plataforma web para jogar jogos clássicos de Java (J2ME) diretamente no navegador, usando o emulador [FreeJ2ME-Web](https://github.com/zb3/freej2me-web).

##  Demo
**Jogue agora:** [https://althp.github.io/GAMEHUB](https://althp.github.io/GAMEHUB)

## 📁 Estrutura
```
GAMEHUB/
├── index.html          # Página principal
├── player.html         # Player do emulador
├── css/
│   └── style.css       # Estilos com tema retro
├── js/
│   └── app.js          # Lógica do catálogo e player
├── games/              # Seus arquivos .jar
├── emulator/           # FreeJ2ME-Web (git submodule)
└── assets/             # Imagens e recursos
```

## 🚀 Instalação Local

### 1. Clonar o repositório (com submodules)
```bash
git clone --recurse-submodules https://github.com/Althp/GAMEHUB.git
cd GAMEHUB
```

**Se já clonou sem submodules:**
```bash
git submodule update --init --recursive
```

### 2. Rodar localmente
```bash
npx serve -l 3000
```

### 3. Acessar
Abra no navegador: `http://localhost:3000`

## 🎮 Como Adicionar Jogos

### 1. Colocar o arquivo .jar
Copie o arquivo `.jar` para a pasta `games/`

### 2. Adicionar ao catálogo
Edite `js/app.js` e adicione no array `gamesData`:

```javascript
{
    id: 'meujogo',           // ID único
    title: 'Nome do Jogo',   // Nome exibido
    category: 'action',      // action, adventure, puzzle, rpg, sports, racing
    description: 'Descrição',
    icon: '🎮',             // Emoji
    jar: 'meujogo.jar',      // Nome do arquivo
    width: 240,              // Largura da tela
    height: 320              // Altura da tela
}
```

### 3. Commit e push
```bash
git add games/meujogo.jar js/app.js
git commit -m "add: novo jogo - Nome do Jogo"
git push
```

O GitHub Actions fará o deploy automático!

## 🎯 Controles do Emulador
- **Setas**: Navegar
- **Enter**: Ação/OK
- **F1 ou Q**: Soft Key Esquerda
- **F2 ou W**: Soft Key Direita
- **0-9**: Teclado numérico
- **Esc**: Opções/Sair

## 📝 Notas
- Os jogos devem estar em formato `.jar` (J2ME)
- Nem todos os jogos podem funcionar perfeitamente
- Ajuste as configurações no emulador (Esc) se um jogo não funcionar
- O emulador requer conexão com internet (CheerpJ)

## 🔧 Personalização
- Edite `css/style.css` para mudar o visual
- Edite `js/app.js` para adicionar/remover jogos
- Substitua os emojis por imagens reais na pasta `assets/`

##  Licença
Este projeto usa o emulador [FreeJ2ME-Web](https://github.com/zb3/freej2me-web) sob sua licença original.

**Nota**: Os jogos são propriedade de seus respectivos donos. Certifique-se de ter os direitos para usá-los.
