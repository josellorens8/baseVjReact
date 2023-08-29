import './App.css';
import Juegos from "./componentes/Juegos"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>VIDEOJUEGOS</h1>
      <Juegos 
        id="a-simple-door"
        imagenJuego="a-simple-door.jpeg"
        altImagen="Portada A Simple Door"
        nombreJuego="A Simple Door"
        infoJuego="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan congue libero a luctus. Nunc porta, dolor a volutpat suscipit, est arcu commodo elit, quis euismod leo erat."
        estudio="Ketter Studio"/>

      <Juegos
        id="delivery-time"
        imagenJuego="delivety-time.png"
        altImagen="Portada Delivery Time"
        nombreJuego="Delivery Time"
        infoJuego="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan congue libero a luctus. Nunc porta, dolor a volutpat suscipit, est arcu commodo elit, quis euismod leo erat."
        estudio="Ketter Studio"/>

      <Juegos 
        id="duck-park"
        imagenJuego="duck-park-story.jpeg"
        altImagen="Portada Delivety Time"
        nombreJuego="Delivety Time"
        infoJuego="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan congue libero a luctus. Nunc porta, dolor a volutpat suscipit, est arcu commodo elit, quis euismod leo erat."
        estudio="Five Ducks"/>
      </div>
    </div>
  );
}

export default App;
