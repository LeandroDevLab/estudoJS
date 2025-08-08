import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './validators/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();
//import './assets/css/style.css';

//para atualizar aqui precisei rodar o npm run dev para atualizar as mudanças no bundle.js
//alert(1);
