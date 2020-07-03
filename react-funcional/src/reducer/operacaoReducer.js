import {useReducer} from 'react';

//Logica do flux

const STATE_INICIAL = {
  resultado:''
}

const operacaoReducer = (state = STATE_INICIAL, action) =>{
  console.log('action executada: ', JSON.stringify(action))
  switch(action.type){
      case 'SUBTRACAO':
      case 'SOMA':
        return{...state, resultado: action.payload}
      default:
        return state;
  }
}

const useStore = () => useReducer(operacaoReducer, STATE_INICIAL);

export default useStore;