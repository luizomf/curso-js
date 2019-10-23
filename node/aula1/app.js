// CommonJS -> ES6 Modules
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Jão');
console.log(mod1);
console.log(p1);
