import React, {useState, useEffect} from 'react';

function App() {

  const [ numero, setNumero] = useState('');
  const [segundonumero, setSegundonumero] = useState('');
  const [resultado, setResultado] = useState('');
  
  const somar = () =>{
      const numeroInt = parseInt(numero)
      const segundoInt = parseInt(segundonumero)
    
      setResultado( numeroInt + segundoInt);
  }

  useEffect(() => {//Função Call-back, carregar dados de uma datatable
    console.log('Varíavel número: ', numero)
  })
  

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
