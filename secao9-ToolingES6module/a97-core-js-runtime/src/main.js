//resolvendo promises e outros em navegadores antigos
import 'core-js/stable';

//resolvendo regeneretionRuntime is not defined
import 'regenerator-runtime/runtime';

import executa from './modules/promises';

import './assets/css/style.css';

executa();
