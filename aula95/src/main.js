import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function renderizaCpf() {
  const gera = new GeraCPF();
  const cpfGerador = document.querySelector('.cpf-gerado');
  cpfGerador.innerHTML = gera.geraNovoCpf();
})();
