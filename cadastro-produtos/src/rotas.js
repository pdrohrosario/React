import React from 'react';

import { Switch, Route} from 'react-router-dom';

import Home from './views/home.js';
import CadastroProduto from './views/produtos/cadastro.js';
import ConsultaProdutos from './views/produtos/consulta.js';

export default () => {
  return(
    
      <Switch>
        <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto}/>
        <Route exact path="/consulta-produtos" component={ConsultaProdutos}/>     
             
        <Route exact path="/" component={Home}/>     
      </Switch>
    
  )
}
