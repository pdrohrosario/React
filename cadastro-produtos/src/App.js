import React from 'react';

import Navbar from './components/navbar.js'
import Rotas from './rotas.js';
import {HashRouter} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <div className="container">
        <Navbar />
        <Rotas />
      </div>
    </HashRouter>
  );
}

export default App;
