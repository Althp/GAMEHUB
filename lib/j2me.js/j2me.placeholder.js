/*
 * j2me.js - J2ME Emulator for Web
 * 
 * Esta e uma referencia para o emulador j2me.js
 * Para funcionalidade completa, baixe a biblioteca em:
 * https://github.com/nicknisi/j2me.js
 * 
 * Ou use alternativas:
 * - https://github.com/obr/microemulator
 * - https://github.com/DoubangoTelecom/j2me
 * 
 * Coloque o arquivo j2me.js completo nesta pasta
 * e descomente a linha abaixo:
 */

// <script src="lib/j2me.js/j2me.min.js"><\/script>

const J2ME = {
  init: function(options) {
    console.log('j2me.js placeholder - Emulador nao carregado');
    console.log('Baixe j2me.js e coloque em lib/j2me.js/');
    if (options.onError) {
      options.onError(new Error('Emulador j2me.js nao encontrado. Adicione a biblioteca em lib/j2me.js/'));
    }
  },
  stop: function() {
    console.log('Emulador parado');
  },
  keyPress: function(key) {
    console.log('Tecla pressionada:', key);
  }
};
