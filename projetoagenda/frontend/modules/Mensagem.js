

export default class Mensagem {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {

    this.events();
    setTimeout(function(){ document.querySelector('.mensagem-classe').remove() }, 8000);

    
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      // e.preventDefault();
     
      this.encontra(e);
     

    });
    
  }
  
  encontra(e) {
    const el = e.target;
    const p = el.querySelector('.mensagem-classe');
     
    
  }



  }


  


