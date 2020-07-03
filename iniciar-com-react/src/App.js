import React from 'react';

/**

function ComponenteFuncional(){/**Assim que se cria um componente funcional
  return(
    <h1>Hello</h1>
  )
}
-------------------------------------------------------------
Componente de State

class App extends React.Component{

  state = { 
    nome :'P'
  }
  modificarNome = (event) => { /**Arrow Function 
    this.setState({
      nome : event.target.value
    })
  }
  render(){
    return(
      <> -Fragmento
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome} </h1>
      </>
    )
  }
}
-----------------------------------------------------------
Componente Combo Box um Select

criaComboBox = () => {
    const opcoes = ["A","B"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
    
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
-------------------------------------------------------------------------------
Props - São estáticos e pode usar quantos quiser no 
ReactDOM.render(<App nome="Pedro" idade={18}/>,document.getElementById('root'));
*/
class App extends React.Component{

  state = { 
    nome :''
  }
  modificarNome = (event) => { /**Arrow Function */
    
    this.setState({
      nome : event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["A","B"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
    
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componentDidMount')
  }

  render(){
    console.log('Executou o render')

    return(
      <>
        <input className="text-centralizado"type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.props.nome} sua idade é {this.props.idade} </h1>
        {this.criaComboBox ()}
      </>
    )
  }
}

export default App;