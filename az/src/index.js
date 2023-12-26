import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';

import {Header} from './Header/index.js';
import {Sobre} from './Sobre/index.js';
import {Descricao} from './Descrição/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Sobre/>
    <Descricao/>
  </React.StrictMode>
);

