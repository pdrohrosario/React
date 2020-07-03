import React, {useState} from 'react';
import useStore from './operacaoReducer';

function ReducerHook() {

  const [ numero, setNumero] = useState('');
  const [segundonumero, setSegundonumero] = useState('');
  const [store, dispatch] = useStore()

  const somar = () =>{
      const numeroInt = parseInt(numero)
      const segundoInt = parseInt(segundonumero)

    console.log('dispachando a action')

      dispatch({
        type: 'SOMA',
        payload: numeroInt + segundoInt
      })
  }

  const subtrair = () =>{
    const numeroInt = parseInt(numero)
    const segundoInt = parseInt(segundonumero)

  console.log('dispachando a action')

    dispatch({
      type: 'SUBTRACAO',
      payload: numeroInt - segundoInt
    })
}

  
  return(
    <div>
      
      Número 1:<br />
      <input type="text" onChange={e => setNumero(e.target.value)} value={numero}/><br />
      
      Número 2:<br />
      <input type="text" onChange={e => setSegundonumero(e.target.value)} value={segundonumero}/><br />
      
      <button onClick={somar}>Somar</button><br />
      <button onClick={subtrair}>Subtrair</button><br />

       Resultado:<br />
      
      <input type="text" value={store.resultado} readOnly /><br />
    </div>
  );
}

export default ReducerHook;
