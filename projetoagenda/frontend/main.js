import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Mensagem from './modules/Mensagem';



const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const mensagem = new Mensagem('.form-messagem');


login.init();
cadastro.init();
mensagem.init();


// import './assets/css/style.css';

