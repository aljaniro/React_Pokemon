
import Api from './componentes/api';
import './App.css';
import { Provedo } from './provider/apicontest';
import Portada from './componentes/portada';
import Navbar from './componentes/navbar';

// Create a client

function App() {
  return (
    <Provedo>
    <div className="App">
      <Navbar></Navbar>
      <Portada></Portada>
    <div className="titulo text-center" ><h1 style={{color:"goldenrod"}}>LISTA DE POKEMON</h1></div>
      <Api></Api>
    </div>
    </Provedo>
  );
}

export default App;
