//import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
//import ParentComp from './components/ParentComp';
import { Component } from 'react';
import Propiedades from './components/Propiedades';
//import Efecto from './components/Hooks/Efecto';
//import Estado from './components/Hooks/Estado'
import Estadoo from './components/Estadoo';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import {EventosES6, EventosES7} from './components/Eventos';
import { MasSobreEventos } from './components/MasEventos';
import Padre from './components/ComunicacionCompontentes';
import CicloVida from './components/CicloVida';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Propiedades 
          cadena="Esto es una cadena texto" 
          number={33} 
          boolean={false} 
          array = {[1,2,3]}
          objeto= {{nombre: "Eustaquio", correo: "eustaquio@correo.com"}}
          elementoReact = {<i>Esto es un elemento React italic</i>} 
          funcion = {(num) => num * num}
          componenteReact = {<Componente />}/>
          <br /><hr />
          <Estadoo />
          <br /><hr />
          <RenderizadoCondicional isLog={false} />
          <br /><hr />
          <EventosES6 />
          <br /><hr />
          <EventosES7 />
          <br /><hr />
          <MasSobreEventos />
          <br /><hr />
          <Padre />
          <br /><hr />
          <CicloVida />
          <br /><hr />
      </div>
    )
  }
}


/* Parte de Hooks
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Efecto />  
      </div>
    )
  }
}
*/

/* Parte componentes por clase
class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentComp />  
      </div>
    )
  }
}*/


/* Primer componente
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Componente msg="Hi Im a msg component"/> 
        <br/><br/><br/><br/>
        <ParentComp />
    </div> 
  );
}
*/
export default App;
