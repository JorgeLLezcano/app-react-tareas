import logo from './logo.svg';
import './App.css';
import LogoTareas from '../src/imagenes/logoTareas.png'
// import Tarea from './componentes/Tareas';
// import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-tareas'>
        <img 
        src={LogoTareas}
        className='logo'
        />
      </div>
       <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>

          {/* <Tarea texto='Aprender React'/> */}
       </div>
     
    </div>
  );
}

export default App;
