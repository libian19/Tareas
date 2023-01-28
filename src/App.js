import './App.css';
import { LogofreeCodeCamp } from './componentes/LogofreeCodeCamp'
import ContenedorTareas from './componentes/ContenedorTareas';

function App() {
  return (

    <div className="App">
      <LogofreeCodeCamp/>

      <div className='lista--tareas-contenedor'>
        <h1>Mis Tareas</h1>

        <ContenedorTareas />

      </div>

    </div>

  );
}

export default App;
