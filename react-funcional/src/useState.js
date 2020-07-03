import React, {useState} from 'react';


function App() {

  const [ numero, setNumero] = useState(0);
  const [segundonumero, setSegundonumero] = useState(0);
  const [resultado, setResultado] = useState(0);
  //OU

  /**
   * const [state, setState] = useState({
   *  numero: 0,
   *  segundonumero: 0,
   *  resultado: 0 
   * })
   */
  const somar = () =>{
      const numeroInt = parseInt(numero)
      const segundoInt = parseInt(segundonumero)
    
      setResultado( numeroInt + segundoInt);
  }


  return(
    <div>
      
      Número 1:<br />
      <input type="text" onChange={e => setNumero(e.target.value)} value={numero}/><br />
      
      Número 2:<br />
      <input type="text" onChange={e => setSegundonumero(e.target.value)} value={segundonumero}/><br />
      
      <button onClick={somar}>Somar</button><br />
      
       Resultado:<br />
      
      <input type="text" onChange={e => setResultado(e.target.value)}value={resultado}/><br />
    </div>
  );
}

export default App;
