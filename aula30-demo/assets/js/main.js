const data = new Date();
const opcoes = { 
  dateStyle: 'full',
  timeStyle: 'short'
};

const h1 = document.querySelector('.container h1');
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
